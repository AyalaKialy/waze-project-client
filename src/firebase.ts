import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword,
createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { config } from './config/config';
import { Role } from "./models/manager.model";

const app = initializeApp(config.firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res.user.uid); 
  } catch (err:any) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email:string, password:string) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res.user);
  } catch (err:any) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name:string,email:string, password:string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res.user);
  } catch (err:any) {
    alert(err.message);
  }
};
const sendPasswordReset = async (email:string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err:any) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};

