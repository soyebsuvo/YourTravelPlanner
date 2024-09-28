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
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState([]);
    const [images, setImages] = useState();
    const [place, setPlace] = useState();
    const [days, setDays] = useState("");
    const [members, setMembers] = useState("")
    const [budget, setBudget] = useState("")
    const [sourceDestination, setSourceDestination] = useState("");
    const [accommodation, setAccommodation] = useState("")
    const [transportation, setTransportation] = useState("")
    const [filteredContinent, setFilteredContinent] = useState(null);
    const [selectedCities, setSelectedCities] = useState([]);
    const [nextCity, setNextCity] = useState();
    const [phone, setPhone] = useState();    
    const [otp, setOtp] = useState();    
    const [confirmationResult, setConfirmationResult] = useState(null);

    // const navigate = useNavigate();
    const handleSubmit = async (userInput, datas, navigate, selectedCities) => {

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
        } else if (!place || !days || !members || !budget || !accommodation || !transportation) {
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
            body: JSON.stringify({ prompt: userInput, selectedCities: selectedCities })
        });

        const data = await responses.json();
        console.log(data)
        const responseData = await data?.response;
        const mainData = await JSON.parse(responseData);
        // console.log(mainData)
        setResponse(mainData)
        // console.log(response)
        // } catch (error) {
        // console.log("Error : ", error)
        // }

        const distructuredImages = await data?.imageResponse;
        // const mainImages = await JSON.parse(distructuredImages);
        setImages(distructuredImages)
        // console.log(distructuredImages)
        // console.log(images)

        // const messageElement = document.createElement('div');
        // messageElement.textContent = `User: ${userInput}\nChatGPT: ${responseData}`;
        // chatHistory.appendChild(messageElement);
    }
    const googleLogin = () => {
        // setLoading(true); 
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
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
        setUser,
        loading,
        handleSubmit,
        response,
        setResponse,
        images,
        setImages,
        googleLogin,
        logOut,
        createUser,
        login,
        place,
        setPlace,
        days,
        members,
        budget,
        accommodation,
        transportation,
        setDays,
        setMembers,
        setBudget,
        setAccommodation,
        setTransportation,
        filteredContinent,
        setFilteredContinent,
        selectedCities,
        setSelectedCities,
        nextCity,
        setNextCity,
        phone,
        setPhone,
        otp,
        setOtp,
        confirmationResult,
        setConfirmationResult,
        sourceDestination,
        setSourceDestination
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