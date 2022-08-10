
import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import Users from '../components/users'
import { useNavigate, useParams } from 'react-router-dom';
import { getUserByEmail } from '../api/user';


  export default function HomePage() {
    const auth = getAuth();
    const navigate = useNavigate();
    const {managerEmail}=useParams();
    const [managerId,setManagerId]=useState('');

    useEffect(() => {
      getUserByEmailFromServer();
    },[]);
    
    const getUserByEmailFromServer= async () => {
      const user=await getUserByEmail(String(managerEmail));
        setManagerId(user._id);
    }
    return (
        <div>
            <p>Home Page (Protected by Firebase!)</p>
            <button type="button" onClick={e=> navigate(`/CreateSystem/${managerId}}`)}>Create System</button>
            <button type="button" onClick={e=> navigate(`/Systems/${managerId}`)}>Systems</button>
            <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
        </div>
    );
};
