import React, { createContext } from 'react';
import useFirebase from '../Authentication/Hooks/useFirebase';

export const  AuthContext=createContext();
const AuthProvider = ({children}) => {
    
    const context=useFirebase();
    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;