import React, { createContext } from 'react';

// import { createContext } from 'react';
// import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
// import app from '../firebase/firebase.config'
// import { useState } from 'react';
// import { useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentuser) => {
            console.log('user data', currentuser);
            setUser(currentuser)
        })
    }, [])

    const authinfo = { user, providerLogin }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;