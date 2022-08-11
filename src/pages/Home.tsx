
import React, { useEffect, useState } from 'react';
import { auth ,logout} from '../firebase';
import {  useNavigate, useParams } from 'react-router-dom';
import { getUserByUid } from '../api/user';
import { useAuthState } from 'react-firebase-hooks/auth';


  export default function HomePage() {
    const navigate = useNavigate();
    const [userId,setUserId]=useState('');
    const {uid}=useParams();
      const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
      getUserByUidFromServer();
    },[]);
    
    const getUserByUidFromServer= async () => {
      const user=await getUserByUid(String(uid));
        setUserId(user._id);
    }

     useEffect(() => {
    if (loading) {
      return;
    }
    if (!user)  {
      console.log('if  not user');
      navigate('/');   
    }
   }, [user, loading]);

    return (
        <div>
            <p>Home Page (Protected by Firebase!)</p>
            <button type="button" onClick={e=> navigate(`/CreateSystem/${userId}`)}>Create System</button>
            <button type="button" onClick={e=> navigate(`/Systems/${userId}`)}>Systems</button>
            <button onClick={logout}>Sign out of Firebase</button>
        </div>
    );
};
