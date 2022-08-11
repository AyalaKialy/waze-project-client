import axios from 'axios';
import { User } from '../models/user.model';

//getAllUsers
export const getAllUsers = async () => {
    try {
        const users = await axios.get(`http://localhost:3333/user`);
        return users.data;
    }
    catch (error) {
        console.log('error in getAllUsers', error);
    }
}

//getUserByEmail
export const getUserByEmail = async (email: string)=> {
    try {
        const user = await axios.get(`http://localhost:3333/user/getUserByEmail/${email}`);
        return user.data;
    }
    catch (error) {
        console.log('error in getAllUsers', error);
    }
}

//getUserByEmail
export const getUserByUid = async (uid: string)=> {
    try {
        const user = await axios.get(`http://localhost:3333/user/${uid}`);
        return user.data;
    }
    catch (error) {
        console.log('error in getUserByUid', error);
    }
}

//post 
export const createUser= async (newUser:User) => {
    debugger;
    try {
        const user= await axios.post('http://localhost:3333/user/', newUser);
        console.log(user.data);
         debugger;
    }
    catch (error) {
        console.log('error-createUser',error);
    }
}