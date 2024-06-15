import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
// import axios from "axios";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
const googleProvider = new GoogleAuthProvider();
// import { useNavigate } from "react-router-dom";


export const MyContext = createContext({});

function Context({ children }) {
    // const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState()
    const [response, setResponse] = useState();
    // const [images, setImages] = useState();

    // const navigate = useNavigate();
    const handleSubmit = async (userInput, datas, navigate) => {

        // const chatHistory = document.getElementById('chat-history');
        const { days, members, budget, accommodation, transportation } = datas;
        if (!user) {
            document.getElementById('my_modal_3').showModal()
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "You must login to continue",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        } else if (!days || !members || !budget || !accommodation || !transportation) {
            return Swal.fire({
                title: "Oops!",
                text: "Please answer all the mandatory questions",
                icon: "error"
            });
        }
        setResponse(null)
        navigate("/recommendations");
        // try {
            const responses = await fetch('https://server.wandergeniellm.com/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: userInput })
            });

            const data = await responses.json();
            console.log(data)
            const responseData = await data?.response;
            const mainData = await JSON.parse(responseData);
            console.log(mainData)
            setResponse(mainData)
            console.log(response)
        // } catch (error) {
            // console.log("Error : ", error)
        // }

        // const distructuredImages = await data?.imageResponse;
        // setImages(distructuredImages)

        // const messageElement = document.createElement('div');
        // messageElement.textContent = `User: ${userInput}\nChatGPT: ${responseData}`;
        // chatHistory.appendChild(messageElement);
    }
    const googleLogin = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            return unSubscribe();
        }
    }, [])

    const logOut = () => {
        // setLoading(true)
        return signOut(auth);
    }
    const info = {
        user,
        handleSubmit,
        response,
        // images,
        googleLogin,
        logOut,
        createUser,
        login
    }
    return (
        <MyContext.Provider value={info}>
            {children}
        </MyContext.Provider>
    );
}

export default Context;

Context.propTypes = {
    children: PropTypes.node
}