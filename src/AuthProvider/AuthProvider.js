import React, { createContext } from 'react';
//import app from '../firebase/firebase.config'




export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const info = { display: 'Sohel Rana' }

    const authInfo = { info };

    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>


        </div>
    );
};

export default AuthProvider;