import axios from 'axios';
import { System } from '../models/system.model';
import userStore from '../stores/userStore';


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
    // console.log(token);
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
// getSystemBySearchWord
export const getSystemsBySearchWord = async (searchWord: String) => {
    try {
        const { data } = await axios.get(`http://localhost:3333/system/getSystemBySearchWord/${searchWord}`);
        return data;
    }
    catch (error) {
        console.log('error in getSystemsBySearchWord', error); 
    }
}
//getSystemByUrlName
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
//post 
export const createSystem = async (system:System) => {
try {
const res =  await axios.post('http://localhost:3333/system/', system );
console.log(res);
return res;
}
    catch (err) { console.log(err); }
}

//put
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

//delete
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