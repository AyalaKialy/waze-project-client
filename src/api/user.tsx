import axios from 'axios';

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
        const user = await axios.get(`http://localhost:3333/user/${email}`);
        return user.data;
    }
    catch (error) {
        console.log('error in getAllUsers', error);
    }
}