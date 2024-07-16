import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from 'firebase/auth'
import {auth,db} from '../Services/firebaseConfig'

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({});

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe;
    }
    },[])
 
    function signUp(email,password) {
        createUserWithEmailAndPassword(auth,email,password)
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        return signOut(auth)
    }

  return (
    <AuthContext.Provider value={{signUp,logIn,logOut}}>
            {children}
    </AuthContext.Provider>

  )
}

export default AuthContextProvider 

 export function UserAuth(){
    return useContext(AuthContext);
}