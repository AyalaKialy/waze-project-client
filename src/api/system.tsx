import axios from 'axios';
import { System } from '../models/system.model';
import userStore from '../stores/userStore';


export const getAllSystems = async () => {
    try {
        const {data} = await axios.get(`http://localhost:3333/system`);
        return data;
    }
    catch (error) {
        console.log('error in getAllSystems', error);
    }
}

export const getSystemByManagerId = async (managerId: string) => {
    console.log("getSystemByManagerId");
    try {
        const { data } = await axios.get(`http://localhost:3333/system/${managerId}`,
// {headers: {Authorization: 'Bearer ' + userStore.token}}
);
        console.log(data);
        return data;
    }
    catch (error) {
        console.log('error-getSystemByManagerId',error);
    }
}

export const getSystemsBySearchWord = async (searchWord: String) => {
    try {
        const { data } = await axios.get(`http://localhost:3333/system/getSystemBySearchWord/${searchWord}`);
        return data;
    }
    catch (error) {
        console.log('error in getSystemsBySearchWord', error); 
    }
}

export const getSystemByUrlName = async (urlName: string) => {
    console.log("getSystemByurlName");
    console.log(urlName);
    try {
        const { data } = await axios.get(`http://localhost:3333/system/getSystemByurlName/${urlName}`);
        console.log(data);
        return data;
    }
    catch (error) {
        console.log('error-getSystemByurlName',error);
    }
}
 
export const createSystem = async (system:System) => {
try {
    debugger
const res =  await axios.post('http://localhost:3333/system/', system );
console.log(res);
return res;
}
    catch (err) { console.log(err); }
}

export const updateSystem = async (systemId:string, updates:System) => {
    console.log("updateSystem");
    try {
 await axios.put(`http://localhost:3333/system/${systemId}`, updates
//  ,
//  {headers: {Authorization: 'Bearer ' + userStore.token}}
 );
    }
    catch (error) {
        console.log('error - updateSystem',error);
    }
}


export const deleteSystem = async (systemId:string) => {
    try {
        await axios.delete(`http://localhost:3333/system/${systemId}`
        //  {headers: {Authorization: 'Bearer ' + userStore.token}}
         );
    }
    catch (error) {
        console.log('error - deleteSystem', error);
    }
}