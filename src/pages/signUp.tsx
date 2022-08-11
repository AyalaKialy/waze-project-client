import React, { useState,useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword,signInWithGoogle } from "../firebase";

import {Role} from '../models/user.model';
import { createUser} from '../api/user';
  
 export default function SignUpPage() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
    if (loading) {
      return;
    }
      if (user) {
          createInMongo();
         navigate(`/HomePage/${user.uid}`);   
      };
    }, [user, loading]);
  
  //   const signUpWithPassword = async () => {
  //     debugger;
  //     //יצירה עם פיירבייס
  //     await registerWithEmailAndPassword(firstName+' '+lastName,email, password);
  //    debugger;
  //    console.log("create");
  //    console.log(user);
  //     //יצירה עם מונגו
  //     createInMongo();
  // }

  const createInMongo=async()=>{
      const newUser = {
        uid: String(user?.uid),
        role: Role.admin,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email
            }
            try{
      await createUser(newUser);
            }catch{
console.log("create failed");
            }
  }
      const signInGoogle = () => {
        signInWithGoogle();
  };
  
    return (
       <form  className='auth-inner' 
       onSubmit={()=>registerWithEmailAndPassword(firstName+' '+lastName,email, password)}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text"
           className="form-control" 
           placeholder="Last name" 
           onChange={(e) => setLastName(e.target.value)}/>
        </div>
           <div className="mb-3">
          <label>Phone</label>
          <input
            type="string"
            className="form-control"
            placeholder="Enter phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email </label>
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
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
          <div className="mb-3">
              <div className="d-grid">
                <button type="button" className="login-with-google-btn" onClick={() => signInGoogle()}>
                 Sign Up with Google
             </button>
          </div>
          </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    )
}

