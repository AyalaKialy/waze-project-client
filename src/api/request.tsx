import axios from 'axios';
import { Request } from '../models/request.model';

//getAll
export const getAllRequests = async () => {
    try {
        const {data} = await axios.get(`http://localhost:3333/request`);
        return data;
    }
    catch (error) {
        console.log('error in getAllRequests', error);
    }
}

//getRequestById
export const getRequestById = async (id: string) => {
    try {
        const {data} = await axios.get(`http://localhost:3333/request/${id}`);
        return  data;
    }
    catch (error) {
        console.log('error in getRequestById', error);
    }
}

//post 
export const createRequest = async (newRequest :Request) => {
    try {
        const {data}= await axios.post('http://localhost:3333/request/', newRequest);
        console.log(data);
    }
    catch (error) {
        console.log('error in createRequest', error);
    }
}

//delete
export const deleteRequest = async (Id:string) => {
    try {
        await axios.delete(`http://localhost:3333/request/${Id}`);
    }
    catch (error) {
        console.log('error in deleteRequest', error);
    }
}

//put
export const updateRequest= async (Id:string, updates:Request) => {
    try {
         await axios.put(`http://localhost:3333/request/${Id}`, updates);
    }
    catch (error) {
        console.log('error in updateRequest',error);
    }
}