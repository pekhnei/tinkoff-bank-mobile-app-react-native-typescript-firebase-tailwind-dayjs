import {initializeApp} from 'firebase/app'
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
initializeApp(firebaseConfig)

export const auth = getAuth()

export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)

export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()