import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'


export interface ILoginPageProps { }
const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signInWithGoogle = async () => {
        setAuthing(true);
        try {
            const res = await signInWithPopup(auth, new GoogleAuthProvider())
            console.log(res.user.email);
            navigate(`/HomePage/${res.user.email}`);
        }
        catch (err) {
            console.log(err);
            setAuthing(false);
        };
    };
    const signInWithPassword = async () => {
        setAuthing(true);
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res.user.uid);
            
            navigate(`/`);
        } catch (err) {
            console.log(err);
            setAuthing(false);
        }
    }

    return (
        <form className='auth-inner' onSubmit={signInWithPassword}>
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
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
                    />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
            </div>            
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
            </div>
              <div className="mb-3">
                <button type="button" className="login-with-google-btn" onClick={() => signInWithGoogle()}>
                 Sign in with Google
             </button>
              </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
};

export default LoginPage;
