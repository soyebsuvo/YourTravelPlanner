import Banner from "../../Components/Banner/Banner";
import Budget from "../../Components/Budget/Budget";
import Duration from "../../Components/Duration/Duration";
import Members from "../../Components/Members/Members";
import Navbar from "../../Components/Navbar/Navbar";
import { useRef, useState } from 'react';
import Selections from "../../Components/Selections/Selections";
import Submit from "../../Components/Submit/Submit";
import Accommodation from "../../Components/Accommodation/Accommodation";
import Dietary from "../../Components/Dietary/Dietary";
import TravelPurpose from "../../Components/TravelPurpose/TravelPurpose";
import Transportation from "../../Components/Transportation/Transportation";
import Landmarks from "../../Components/Landmarks/Landmarks";

const Home = () => {
    const [days, setDays] = useState("");
    const [members, setMembers] = useState("")
    const [budget, setBudget] = useState("")
    const [accommodation, setAccommodation] = useState("")
    const [dietary, setDietary] = useState("")
    const [travelPurpose, setTravelPurpose] = useState("")
    const [transportation, setTransportation] = useState("")
    const [landmarks, setLandmarks] = useState("")
    window.addEventListener('load', () => {
        // Scroll to the top of the page with smooth behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // const durationScroll = useRef();
    const membersScroll = useRef();
    const budgetScroll = useRef();
    const accommodationScroll = useRef();
    const dietaryScroll = useRef();
    const travelPurposeScroll = useRef();
    const transportationScroll = useRef();
    const landmarksScroll = useRef();



    const scrollHandler = (element) => {
        window.scrollTo({
            top: element.current.offsetTop - 80, behavior: "smooth"
        })
    }

    return (
        <div className="">
            <Navbar />
            <Banner />
            <div className="bg-[#F7F8FB]">
                <Selections days={days} members={members} budget={budget} setDays={setDays} setMembers={setMembers} setBudget={setBudget} accommodation={accommodation} setAccommodation={setAccommodation} dietary={dietary} setDietary={setDietary}/>
                <Duration value={days} setValue={setDays} scrollHandler={scrollHandler} membersScroll={membersScroll} />
                <Members value={members} setValue={setMembers} membersScroll={membersScroll} scrollHandler={scrollHandler} budgetScroll={budgetScroll} />
                <Budget value={budget} setValue={setBudget} budgetScroll={budgetScroll} accommodationScroll={accommodationScroll} scrollHandler={scrollHandler} />
                <Accommodation value={accommodation} setValue={setAccommodation} accommodationScroll={accommodationScroll} dietaryScroll={dietaryScroll} scrollHandler={scrollHandler}/>
                <Dietary value={dietary} setValue={setDietary} dietaryScroll={dietaryScroll} scrollHandler={scrollHandler} travelPurposeScroll={travelPurposeScroll}/>
                <TravelPurpose value={travelPurpose} setValue={setTravelPurpose} dietaryScroll={dietaryScroll} scrollHandler={scrollHandler} travelPurposeScroll={travelPurposeScroll}/>
                <Transportation value={transportation} setValue={setTransportation} dietaryScroll={dietaryScroll} scrollHandler={scrollHandler} transportationScroll={transportationScroll}/>
                <Landmarks value={landmarks} setValue={setLandmarks} dietaryScroll={dietaryScroll} scrollHandler={scrollHandler} landmarksScroll={landmarksScroll}/>
                <Submit days={days} members={members} budget={budget} />
            </div>
        </div>
    );
};

export default Home;