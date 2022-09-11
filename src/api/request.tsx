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
export const getRequestsBySystemId= async (systemId: string) => {
    try {
        const {data} = await axios.get(`http://localhost:3333/request/${systemId}`);
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
        return data;
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

// export const Mail = async (word:string) => {
//     try {
//         await axios.post('https://api.sendgrid.com/v3/mail/send',
//          {headers: {Authorization: 'Bearer ' + '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'}}
//         );
//     }
//     catch (error) {
//         console.log('error in Mail', error);
//     }
// }
