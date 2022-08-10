import React, { useState,useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword,signInWithGoogle } from "../firebase";

export interface ISignUpPageProps { }
  
const SignUpPage: React.FunctionComponent<ISignUpPageProps> = (props) => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState(null);
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
    if (loading) {
      return;
    }
      if (user) {
        navigate("/")
      };
  }, [user, loading]);
    const signUpWithPassword = async () => {
        registerWithEmailAndPassword(firstName+lastName,email, password);
  }
      const signInGoogle = () => {
        signInWithGoogle();
  };
  
    return (
       <form  className='auth-inner' onSubmit={signUpWithPassword}>
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
          <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
        </div>
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

export default SignUpPage;
