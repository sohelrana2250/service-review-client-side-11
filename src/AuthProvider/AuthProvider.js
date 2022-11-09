import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'




export const AuthContext = createContext();
const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);




    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateProfileInfo = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const login = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

        })

        return () => { return unsubscribe() }

    }, [])


    const GoogleLogin = () => {
        setLoading(true);

        return signInWithPopup(auth, GoogleProvider);


    }

    const logOut = () => {
        localStorage.removeItem('token');

        return signOut(auth);
    }

    const info = { display: 'Sohel Rana' }

    const authInfo = { info, loading, user, createUser, updateProfileInfo, login, GoogleLogin, logOut };

    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>


        </div>
    );
};

export default AuthProvider;