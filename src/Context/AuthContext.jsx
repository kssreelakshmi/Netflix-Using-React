import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from 'firebase/auth'
import {auth,db} from '../Services/firebaseConfig'
import {doc,setDoc} from 'firebase/firestore'

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({});

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return ()=> unsubscribe;
   
    },[])
 
   async function signUp(email,password) {
       await createUserWithEmailAndPassword(auth,email,password)
        await setDoc(doc(db,'users',email),{
            favShows : []
        })
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut(){
        return signOut(auth);
    }

  return (
    <AuthContext.Provider value={{ user,signUp, logIn, logOut }}>
            {children}
    </AuthContext.Provider>

  )
}

export default AuthContextProvider 

 export function UserAuth(){
    return useContext(AuthContext);
}

