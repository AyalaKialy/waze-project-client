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
    debugger;
    const token='eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyZmEwZjE2NmJmZjZiODU5N2FjMGFlMDRlNTllZmYxOTk1N2MyYmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2F6ZS1wcm9qZWN0LWI4NDZmIiwiYXVkIjoid2F6ZS1wcm9qZWN0LWI4NDZmIiwiYXV0aF90aW1lIjoxNjYxOTU4NTk2LCJ1c2VyX2lkIjoiTG93ZjZnSU5UOFFHbHpyRENYOHE2U0lNTGw5MyIsInN1YiI6Ikxvd2Y2Z0lOVDhRR2x6ckRDWDhxNlNJTUxsOTMiLCJpYXQiOjE2NjE5NTg1OTYsImV4cCI6MTY2MTk2MjE5NiwiZW1haWwiOiJkb3JvbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZG9yb25AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.qs3l21TGo4as_cfKXQRPfHW9mPP5nrc5fngaH-56oNA7ePmXM4gbXoLgOFSmLZtWRwrkg2nVlkcykDzlFmMUnjzfSgzcyXU75Yh1BnTor07eWWgFnc-lyt32bH4HDMSn-ZgGY_4WNpDRntsqCy9LhF1ctayawDUWrVEzbCic85DTBJwErWV4yOuElAeyoXSff3yQvRU_8eqKwVEi3BT2NvnHtM9T37hr8eqTMirkHTpFMX7US8_Otm-dMBhFLleV1g1xO75BMzKkK_RwOhEslx7pIvWx5LAPLCVpYR2qe4GpHzXe29q3ccN03AhYbyBnUi4Y1fQr61kWLuPMH5Hntg';
try {
const res=  await axios.post('http://localhost:3333/system/', system ,{headers: {Authorization: 'Bearer ' + token}});
console.log(res);
return res;
}
    catch (err) { console.log(err); }
}

//put
export const updateSystem = async (systemId:string, updates:System) => {
    console.log("updateSystem");
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