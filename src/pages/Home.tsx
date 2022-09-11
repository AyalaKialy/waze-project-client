
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import userStore from '../stores/userStore';
import {  useNavigate, useParams } from 'react-router-dom';
import { getUserByUid } from '../api/user';
import { useAuthState } from 'react-firebase-hooks/auth';
import  NavBar  from '../components/navBar';
import { observer } from 'mobx-react';
import Systems from '../components/systems';

  const HomePage = () => {
    const navigate = useNavigate();
    const [userId,setUserId] = useState('');
    const {uid} = useParams();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
      //אולי בלוגין לטעון בעצם תיוזר שנכנס?
      //אולי כאן אין צורך בכל זה בכלל
      const h = async () => {
            await userStore.setUser(String(uid));
            console.log(userStore.user.email);
      };
      h();
      getUserByUidFromServer();
    },[]);
    
    const getUserByUidFromServer = async () => {
      const user = await getUserByUid(String(uid));
        setUserId(user._id);
        userStore.setNumSystems(user._id);
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
        {/* <NavBar/> */}

            <p> </p>
            {/* Home Page (Protected by Firebase!) */}
            {/* <Systems></Systems> */}
          {(Number(userStore.numSystems)<3) ?
          <>
            <button type="button" onClick={e => navigate(`/CreateSystem/${userId}`)}>Create System</button>
           </> 
          : <div> alert('you created the max num of systems you can...')</div>
          }
          <p> </p>
            <button type="button" onClick={e => navigate(`/Systems/${userId}`)}>Systems</button>
        </div>
    );
};

export default observer(HomePage);
