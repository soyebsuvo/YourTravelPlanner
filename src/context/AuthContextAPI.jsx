import { createContext, useContext, useEffect, useState } from "react";

import { auth } from "@/Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const value = {
        user,
        loading,
        login: (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
        },
        register: (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password);
        },
        logout: () => {
            return signOut(auth);
        },
        googleLogin: () => {
            //return signInWithPopup(auth, googleProvider);
        },
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
