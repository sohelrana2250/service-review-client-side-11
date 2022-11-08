import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();


    if (loading) {
        return <h1>Loading</h1>
    }

    if (user) {
        return children

    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

};

export default PrivateRoute;