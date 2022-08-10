import axios from 'axios';
import { System } from '../models/system.model';

//getAllSystems
export const getAllSystems = async () => {
    try {
        const systems = await axios.get(`http://localhost:3333/system`);
        return systems.data;
    }
    catch (error) {
        console.log('error in getAllSystems', error);
    }
}
//getSystemByManagerId
export const getSystemByManagerId = async (managerId: string) => {
    try {
        const { data } = await axios.get(`http://localhost:3333/system/${managerId}`);
        return data;
    }
    catch (error) {
        console.log('error-getSystemByManagerId',error);
    }
}

//post 
export const createSystem = async (system:System) => {
    try {
         await axios.post('http://localhost:3333/system/', system);
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

