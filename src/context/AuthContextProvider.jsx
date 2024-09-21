import { createContext, useContext, useEffect, useState } from "react";

import { auth } from "@/Firebase/firebase.config";
import { 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    sendEmailVerification,
    sendPasswordResetEmail 
} from "firebase/auth";
import Swal from "sweetalert2";
import { redirect, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const navigate = redirect();

    const createUser = async (email, password) => {
        try {
            if(!email || !password) {
                Swal.fire({
                    icon: 'error',
                    title: 'Email Or Password Missing',
                    text: 'Please enter email and password',
                })
            }
            await createUserWithEmailAndPassword(auth, email, password)   
        }
        catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })    
        }
    }

    const updateUserDisplayName = async (name) => {
        try {

            if(!name || name === auth.currentUser.displayName) return;

            if(name == "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Provide Name',
                    text: 'Name cannot be empty',
                })
                return;
            }

            await updateProfile(auth.currentUser, {
                displayName: name
            });
            
            setUser({ ...user, displayName: name });
            console.log("name updated")
        }
        catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    const verifyEmail = async () => {
        try {
            if(!user) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! while verifyieng email',
                })
                return;
            }

            await sendEmailVerification(user)
        }
        catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })    
        }
    }

    const updatePhoneNumber = async (phoneNumber) => {
        try {

            if(phoneNumber && user && user.uid) {
                await updateProfile(user.uid, { phoneNumber });
                console.log("phone number updated")
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! while updating phone number',
                })
            }
        } catch (error) {
            console.error('Error updating phone number:', error);
        }
    }

    const resetPassword = async () => {
        try {
            if(!user || !user.email) {
                Swal.fire({
                    icon: 'error',
                    title: 'Email Missing',
                    text: 'Please enter email',
                })
                return;
            }
            await sendPasswordResetEmail(auth, user.email)
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: `Password Reset Email Sent To : ${user.email}`,
                        text: 'Please check your email',
                    })
                })
                .catch((error) => {
                    console.error(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Could not send mail to your gmail account',
                        text: 'Please Try Again',
                    })    
                });
        }
        catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Could not reset your password',
                text: 'Please Try Again',
            })    
        }
    }

    const logIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);   
        }
        catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
            redirect('/');
            navigate('/');
        }
        catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }
    const googleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        }
        catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }
    
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

        createUser,
        updateUserDisplayName,
        logIn,
        logOut,
        googleLogin,
        verifyEmail,
        updatePhoneNumber,
        resetPassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
