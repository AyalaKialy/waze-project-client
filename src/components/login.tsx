import React, { useState,useEffect } from 'react';
import { auth, logInWithEmailAndPassword, signInWithGoogle, sendPasswordReset} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from 'react-router-dom';
import '../css/login.css'
import userStore from '../stores/userStore';
import { observer } from 'mobx-react';
import { getUserByUid } from '../api/user';
import NavBar from '../components/navBar';

 const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const {systemId}=useParams();
    const [userId, setUserId] = useState('');

   useEffect(() => {
      console.log('useEffect');
    if (loading) {
      return;
    }
    if (user)  {
      console.log('if user');
      console.log(user);
      //get token
      user.getIdToken().then((value=>{
      const token=value;
      userStore.setToken(token);
    }));
  const path='https://files.slack.com/files-pri/T03KMPWTK0A-F0421S4H872/images.png'
   userStore.setPotoUrl(String(user.photoURL|| path));
      //
      const getUserByUidFromServer = async () => {
      const data = await getUserByUid(String(user.uid));
      setUserId(data._id);
      console.log(userId);
      userStore.setUser(data);
    if(systemId){
    console.log(userId);
    //request
    navigate(`/Request/${data._id}`); 
   }else{
    //admin
      navigate(`/HomePage`);  
   }
    }
    getUserByUidFromServer();
    }
   }, [user, loading]);

   const navigateTo= () => {
     navigate(`/signUp`); 
   }

    return (
              <><NavBar></NavBar>
        <div className='auth-inner' >
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
          />
        </div>           
        <div className="d-grid">
          <button type="button" className="btn btn-primary"
            onClick={() => logInWithEmailAndPassword(email, password)}>
            Submit
          </button>
        </div>
         <div className="mb-3">
              <div className="d-grid">
              <button type="button" className="login-with-google-btn"
              onClick={signInWithGoogle} >
                Sign in with Google
             </button>
          </div>
          </div>
        {/* <p className="forgot-password text-right"> */}
          {/* Forgot  */}
          {/* <a href="#">password?</a> */}
          {/* <span onClick={()=>sendPasswordReset(email)}> password?</span> */}
        {/* </p> */}
        
        <p className="forgot-password text-right">
          Already registered 
          {/* <a href="/signUp">Sign Up</a> */}
        <span onClick={navigateTo}> Sign Up</span>
        </p>
      </div>
      </>
    );
};

export default observer(LoginPage);
