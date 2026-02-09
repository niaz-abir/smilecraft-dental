import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState()
    const [user,setUser]= useState(null);

    const googleProvider = new GoogleAuthProvider();

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{

        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const signWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)

    }

    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        })

        return()=>{
            unSubscribe()
        }
    })
    const authInfo = {
      loading,
      createUser,
      user,
      signInUser,
      signOutUser,
      signWithGoogle,
    };
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;