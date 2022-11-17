
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import userStore from '../stores/userStore';
import {  useNavigate, useParams } from 'react-router-dom';
import { getUserByUid } from '../api/user';
import { useAuthState } from 'react-firebase-hooks/auth';
import { observer } from 'mobx-react';
import Systems from '../components/systems';
import systemsStore from '../stores/systemsStore';
import NavBar from '../components/navBar';

  const HomePage = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
      console.log(userStore.user)
      userStore.setNumSystems(String(userStore.user._id));
       getAll();
    },[]);

        const getAll = async () => {
        try {
          debugger;
          console.log(userStore.user._id);
           await systemsStore.loudsystems(String(userStore.user._id));
            // setSystems(systemsStore.systems);
        } catch (err) {
            console.log(err)
        }
    };

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
      <NavBar></NavBar>
            <p> </p>
          <>
            <button className='btn' type="button" onClick={e => navigate(`/CreateSystem/${userStore.user._id}`)}>Create System</button>
           </> 
          {systemsStore.systems.length>0?
            <button className='btn' type="button" onClick={e => navigate(`/Systems/${userStore.user._id}`)}>Systems</button> : <h1> </h1>
          }
        </div>
    );
};

export default observer(HomePage);
