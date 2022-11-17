import axios from 'axios';
import { connectFirestoreEmulator } from 'firebase/firestore';
import { Location } from '../models/location.model';
import userStore from '../stores/userStore';

export const getAlllocations = async () => {
    try {
        const {data} = await axios.get(`http://localhost:3333/location/`);
        return data;
    }
    catch (error) {
        console.log('error in getAlllocations: ', error);
    }
}


export const getLocationsBySystemId = async (systemId: string) => {
    try {
        const {data} = await axios.get(`http://localhost:3333/location/${systemId}`);
        return data;
    }
    catch (error) {
        console.log('error in getLocationsBySystemId: ', error);
    }
}

export const getLocationsByLocationId = async (locationId: string) => {
    try {
        const {data} = await axios.get(`http://localhost:3333/location/getByLocationId/${locationId}`);
        console.log(data);
        return data;
    }
    catch (error) {
        console.log('error in getLocationsByLocationId: ', error);
    }
}
 
export const createLocation = async (newLocation :Location) => {
    try {
        const {data} = await axios.post('http://localhost:3333/location/', newLocation);
        console.log(data);
        return data;
    }
    catch (error) {
        console.log('error in createLocation: ', error);
    }
}

export const deleteLocation = async (locationId:string) => {
    try {
        await axios.delete(`http://localhost:3333/location/${locationId}`);
    }
    catch (error) {
        console.log('error in deleteLocation: ', error);
    }
}

export const updateLocation = async (locationId:string, updates:Location) => {
    console.log(updates);
    try {
         await axios.put(`http://localhost:3333/location/${locationId}`, updates);
         
    }
    catch (error) {
        console.log('error in updateLocation: ',error);
    }
}