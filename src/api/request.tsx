import axios from 'axios';
import { Request, Status } from '../models/request.model';

export const getAllRequests = async () => {
    try {
        const {data} = await axios.get(`http://localhost:3333/request`);
        return data;
    }
    catch (error) {
        console.log('error in getAllRequests', error);
    }
}

export const getRequestById = async (id: string) => {
    try {
        const {data} = await axios.get(`http://localhost:3333/request/${id}`);
        return  data;
    }
    catch (error) {
        console.log('error in getRequestById', error);
    }
}

export const getRequestsBySystemId= async (systemId: string) => {
    try {
        const {data} = await axios.get(`http://localhost:3333/request/${systemId}`);
        return  data;
    }
    catch (error) {
        console.log('error in getRequestById', error);
    }
}

export const createRequest = async (newRequest:Request) => {
    try {
        const data = await axios.post('http://localhost:3333/request/', newRequest);
        console.log(data.data);
        return data.data;
    }
    catch (error) {
        console.log('error in createRequest', error);
    }
}

export const deleteRequest = async (Id:string) => {
    try {
        await axios.delete(`http://localhost:3333/request/${Id}`);
    }
    catch (error) {
        console.log('error in deleteRequest', error);
    }
}


export const updateRequest= async (Id:string, updates:Request) => {
    try {
         await axios.put(`http://localhost:3333/request/${Id}`, updates);
    }
    catch (error) {
        console.log('error in updateRequest',error);
    }
}

export const updateStatus= async (Id:string) => {
    try {
         await axios.patch(`http://localhost:3333/request/${Id}`);
    }
    catch (error) {
        console.log('error in updateRequest',error);
    }
}

export const sendEmailConfirm = async (userMail:string) => {
    console.log(userMail);
    try {
        const res = await axios.post(`http://localhost:3333/mail/confirm/?email=${userMail}`);
        let tempList = await res.data;
        if (tempList !== "")
            return tempList;
        throw new Error(`Could not send email`)
    }
    catch (error) { console.log(error); }
}