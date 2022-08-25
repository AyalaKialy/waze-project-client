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

//getSystemByUrlName
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
    const token='eyJhbGciOiJSUzI1NiIsImtpZCI6ImE4YmZhNzU2NDk4ZmRjNTZlNmVmODQ4YWY5NTI5ZThiZWZkZDM3NDUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2F6ZS1wcm9qZWN0LWI4NDZmIiwiYXVkIjoid2F6ZS1wcm9qZWN0LWI4NDZmIiwiYXV0aF90aW1lIjoxNjYxMzQxNDc0LCJ1c2VyX2lkIjoib3BZY3FuTDR3Mk1LYmRPeGE3UDhRVE1QbkgyMiIsInN1YiI6Im9wWWNxbkw0dzJNS2JkT3hhN1A4UVRNUG5IMjIiLCJpYXQiOjE2NjEzNDE0NzQsImV4cCI6MTY2MTM0NTA3NCwiZW1haWwiOiJkb3ZpQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJkb3ZpQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A7QgDK5mF4FvbB-iPbnmSN3LrhWFggJbCX2xHPVLaFHYdT6AQKzTLvtQLtOrpFNFuN1vJfOFYVh1xw57b274Nhvu9QPWep8Rhz8Wsl6znOLwR3MppQkC9geSUhNtvJ9nIJiYi2c8qowzSf2gc5-kXOCzWjL9FhePJHEh9Mmf9T7QPF_yLMMAl44WdakGxOBzj2e5yps42Zkdr9g0ZLx0xnOiAQ_LKZvclT5sYyPg-eyk9iLnQU3ITQptopBrwgfdCYcVQpNPcFjnSCdC3BgioWv4IORjtmgvRWb5GuvNYcXUx033GcQQH-PUGkeEuPydTTG87y422H8owBL4Mv9ViQ';
try {
const res=  await axios.post('http://localhost:3333/system/', system ,{headers: {Authorization: 'Bearer ' + token}});
console.log(res);
return res;
}
    catch (err) { console.log(err); }
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
export const deleteSystem = async (systemId:string) => {
    try {
        await axios.delete(`http://localhost:3333/system/${systemId}`);
    }
    catch (error) {
        console.log('error - deleteSystem', error);
    }
}