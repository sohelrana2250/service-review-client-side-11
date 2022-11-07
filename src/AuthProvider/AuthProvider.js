import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'




export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {




    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateProfileInfo = (profile) => {

        return updateProfile(auth.currentUser, profile);
    }

    const info = { display: 'Sohel Rana' }

    const authInfo = { info, createUser, updateProfileInfo };

    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>


        </div>
    );
};

export default AuthProvider;