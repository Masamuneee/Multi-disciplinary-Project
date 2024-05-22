import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, User, signOut, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJ0xAZsdQxFr3MygRLbcGtx2ddBU6XWFE",
  authDomain: "smart-home-app-9a4e6.firebaseapp.com",
  projectId: "smart-home-app-9a4e6",
  storageBucket: "smart-home-app-9a4e6.appspot.com",
  messagingSenderId: "955155191453",
  appId: "1:955155191453:web:27d408c28ce6f27b54a674",
  measurementId: "G-J1KYNQRZWH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signIn = async (email: string, password: string): Promise<User | null> => {
  if (!email || !password) {
    return null;
  }
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const signUp = async (email: string, password: string): Promise<User | null> => {
  if (!email || !password) {
    return null;
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
}
