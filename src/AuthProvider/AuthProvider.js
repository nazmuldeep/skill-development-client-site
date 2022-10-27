import React, { createContext } from 'react';
import { getAuth, onAuthStateChanged, sendEmailVerification, signInWithPopup, signOut } from 'firebase/auth';
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
            setLoading(false)
        })
    }, [])
    const logOut = () => {
        return signOut(auth);

    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const [loading, setLoading] = useState(true);

    const authinfo = { user, providerLogin, logOut, verifyEmail, loading }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;