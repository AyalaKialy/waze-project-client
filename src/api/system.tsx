import axios from 'axios';
import { System } from '../models/system.model';

//getAllSystems
export const getAllSystems = async () => {
    try {
        const {data} = await axios.get(`http://localhost:3333/system`);
        return data;
    }
    catch (error) {
        console.log('error in getAllSystems', error);
    }
}
//getSystemByManagerId
export const getSystemByManagerId = async (managerId: string) => {
    console.log("getSystemByManagerId");
    try {
        const { data } = await axios.get(`http://localhost:3333/system/${managerId}`);
        console.log(data);
        return data;
    }
    catch (error) {
        console.log('error-getSystemByManagerId',error);
    }
}

//getSystemByurlName
export const getSystemByUrlName = async (urlName: string) => {
    console.log("getSystemByurlName");
    try {
        const { data } = await axios.get(`http://localhost:3333/system/getSystemByurlName/${urlName}`);
        console.log(data);
        return data;
    }
    catch (error) {
        console.log('error-getSystemByurlName',error);
    }
}
//post 
export const createSystem = async (system:System) => {
    debugger;
    try {
        const res = await axios.post('http://localhost:3333/system/', system);
         console.log(res);
         debugger;
    }
    catch (error) {
        console.log('error-createSystem',error);
    }
}

//put
export const updateSystem = async (systemId:string, updates:System) => {
    try {
         await axios.put(`http://localhost:3333/system/${systemId}`, updates);
    }
    catch (error) {
        console.log('error - updateSystem',error);
    }
}

//delete
export const deleteSystem= async (systemId:string) => {
    try {
        await axios.delete(`http://localhost:3333/system/${systemId}`);
        // const { data } = await getAllSystems();
        // console.log(data);
        // return data;
    }
    catch (error) {
        console.log('error - deleteSystem', error);
    }
}

