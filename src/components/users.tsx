import React, { useEffect, useState } from 'react';
import {User} from '../models/user.model';
import{ getAllUsers } from '../api/user';


export default function Users() {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        try {
            const res = await getAllUsers();
            setUsers(res);
            console.log(res);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <>
            <div>hi for all the users</div>
            {users && users.map(user =>
                <div key={user._id}>{user._id}</div>
            )}
        </> 
    )
}