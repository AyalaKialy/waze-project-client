import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { config } from './config/config';
import { Role } from "./models/user.model";

const app = initializeApp(config.firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

const signInWithGoogle = async () => {
  try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res.user.uid); 
      const user=res.user; 
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
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
    debugger;
  try {
      debugger;
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res.user);
    const user = res.user;
     await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      role: Role[0],
    });
  } catch (err:any) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email:string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
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