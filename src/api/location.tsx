import axios from 'axios';
import { Location } from '../models/location.model';

//getAllLocations
export const getAlllocations = async () => {
    try {
        const {data} = await axios.get(`http://localhost:3333/location/`);
        return data;
    }
    catch (error) {
        console.log('error in getAlllocations: ', error);
    }
}

//getLocationsByManagerId
export const getLocationsBySystemId = async (systemId: string) => {
    try {
        const {data} = await axios.get(`http://localhost:3333/location/${systemId}`);
        return data;
    }
    catch (error) {
        console.log('error in getLocationsBySystemId: ', error);
    }
}

//post 
export const createLocation = async (newLocation :Location) => {
    debugger;
    try {
        const {data} = await axios.post('http://localhost:3333/location/', newLocation);
        console.log(data);
    }
    catch (error) {
        console.log('error in createLocation: ', error);
    }
}

//delete
export const deleteLocation = async (locationId:string) => {
    try {
        await axios.delete(`http://localhost:3333/location/${locationId}`);
    }
    catch (error) {
        console.log('error in deleteLocation: ', error);
    }
}

//put
export const updateLocation = async (locationId:string, updates:Location) => {
    try {
         await axios.put(`http://localhost:3333/location/${locationId}`, updates);
    }
    catch (error) {
        console.log('error in updateLocation: ',error);
    }
}