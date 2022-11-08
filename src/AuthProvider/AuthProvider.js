import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'




export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);




    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateProfileInfo = (profile) => {

        return updateProfile(auth.currentUser, profile);
    }

    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

        })

        return () => { return unsubscribe() }

    }, [])

    const logOut = () => {

        return signOut(auth);
    }

    const info = { display: 'Sohel Rana' }

    const authInfo = { info, loading, user, createUser, updateProfileInfo, login, logOut };

    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>


        </div>
    );
};

export default AuthProvider;