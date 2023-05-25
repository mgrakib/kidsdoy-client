import React, { useContext } from 'react';
import { AuthContextAPI } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContextAPI);
    const location = useLocation();
    if (loading) {
        return <p>Loading</p>
    } if (user){
        return children
    }
    return (
        <Navigate
            
			to='/login'
			state={{ from: location }}
			replace
		/>
	);
};

export default PrivateRoute;