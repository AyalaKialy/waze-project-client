import axios from 'axios';
import { Manager } from '../models/manager.model';

//getAll
export const getAllManagers = async () => {
    try {
        const {data} = await axios.get(`http://localhost:3333/manager`);
        return data;
    }
    catch (error) {
        console.log('error in getAllManagers', error);
    }
}

//getManagerByUserIdAndBySystemId
export const getManagerByUserIdAndBySystemId = async (userId: string,systemId:string) => {
    try {
        const {data} = await axios.get(`http://localhost:3333/manager/${userId}/${systemId}`);
        return data;
    }
    catch (error) {
        console.log('error in getRoleByUserIdAndBySystemId', error);
    }
}

//getManagerByUserId
export const getManagerByUserId = async (userId: string) => {
    try {
        const {data} = await axios.get(`http://localhost:3333/manager/getManagerByUserId/${userId}`);
        return data;
    }
    catch (error) {
        console.log('error in getManagerByUserId', error);
    }
}

//post 
export const createManager = async (newManager :Manager) => {
      
    try {
        const {data}= await axios.post('http://localhost:3333/manager/', newManager);
        console.log(data);
    }
    catch (error) {
        console.log('error in createManager', error);
    }
}

//delete
export const deleteManager = async (Id:string) => {
    try {
        await axios.delete(`http://localhost:3333/manager/${Id}`);
    }
    catch (error) {
        console.log('error in deleteManager', error);
    }
}

//put
export const updateManager= async (Id:string, updates:Manager) => {
    try {
         await axios.put(`http://localhost:3333/manager/${Id}`, updates);
    }
    catch (error) {
        console.log('error in updateManager',error);
    }
}