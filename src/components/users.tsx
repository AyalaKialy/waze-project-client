import React, { useEffect, useState } from 'react';
import axios from 'axios';

type User = {
    _id: number,
    name: string,
    email: string
}

export interface IUsers { }

const Users: React.FunctionComponent<IUsers> = (props) => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        try {
            const res = await axios.get(`http://localhost:3333/user`);
            setUsers(res.data);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <>
            <div>hi for all the users</div>
            {users && users.map(user =>
                <div key={user._id}>{user.name}</div>
            )}
        </>
    )
}

export default Users;