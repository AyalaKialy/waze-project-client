import axios from 'axios';
import { User } from '../models/user.model';

export const getAllUsers = async () => {
    try {
        const users = await axios.get(`http://localhost:3333/user`);
        return users.data;
    }
    catch (error) {
        console.log('error in getAllUsers', error);
    }
}


export const getUserByEmail = async (email: string)=> {
    try {
        const user = await axios.get(`http://localhost:3333/user/getUserByEmail/${email}`);
        return user.data;
    }
    catch (error) {
        console.log('error in getAllUsers', error);
    }
}


export const getUserByUid = async (uid: string) => {
    try {
        const user = await axios.get(`http://localhost:3333/user/${uid}`);
        return user.data;
    }
    catch (error) {
        console.log('error in getUserByUid', error);
    }
}

 
export const createUser = async (newUser:User) => {
    try {
        const user= await axios.post('http://localhost:3333/user/', newUser);
        console.log(user.data);
           return user.data;
    }
    catch (error) {
        console.log('error in createUser',error);
    }
}

export const deleteUser = async (Id:string) => {
    try {
        await axios.delete(`http://localhost:3333/user/${Id}`);
    }
    catch (error) {
        console.log('error in deleteUser', error);
    }
}

export const updateUser= async (Id:string, updates:User) => {
    try {
         await axios.put(`http://localhost:3333/user/${Id}`, updates);
    }
    catch (error) {
        console.log('error in updateUser',error);
    }
}