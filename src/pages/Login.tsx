import React, { useState,useEffect } from 'react';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import '../css/login.css'


export interface ILoginPageProps { }

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

    const signInGoogle = () => {
        setAuthing(true);
        signInWithGoogle()
    };
  
  const signInWithPassword = () => { 
            setAuthing(true);
    logInWithEmailAndPassword(email, password);
  }
    return (
        <form className='auth-inner' onSubmit = {signInWithPassword}>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
         <div className="mb-3">
              <div className="d-grid">
                <button type="button" className="login-with-google-btn" onClick={() => signInGoogle()}>
                 Sign in with Google
             </button>
          </div>
          </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p className="forgot-password text-right">
          Already registered <a href="/signUp">Sign Up</a>
        </p>
      </form>
    );
};

export default LoginPage;
