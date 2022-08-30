
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import userStore from '../stores/userStore';
import {  useNavigate, useParams } from 'react-router-dom';
import { getUserByUid } from '../api/user';
import { useAuthState } from 'react-firebase-hooks/auth';
import  NavBar  from '../components/navBar';

  export default function HomePage() {
    const navigate = useNavigate();
    const [userId,setUserId] = useState('');
    const {uid} = useParams();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
      //אולי בלוגין לטעון בעצם תיוזר שנכנס?
      //אולי כאן אין צורך בכל זה בכלל
      const h = async () => {
            await userStore.loudUser(String(uid));
            console.log(userStore.user.email);
      };
      h();
      getUserByUidFromServer();

    },[]);
    
    const getUserByUidFromServer = async () => {
      const user = await getUserByUid(String(uid));
        setUserId(user._id);
    }
    ////////

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
        <NavBar/>
            <p>Home Page (Protected by Firebase!)</p>
            <button type="button" onClick={e => navigate(`/CreateSystem/${userId}`)}>Create System</button>
            <button type="button" onClick={e => navigate(`/Systems/${userId}`)}>Systems</button>
        </div>
    );
};
