import Banner from "../../Components/Banner/Banner";
import Budget from "../../Components/Budget/Budget";
import Duration from "../../Components/Duration/Duration";
import Members from "../../Components/Members/Members";
import Navbar from "../../Components/Navbar/Navbar";
import { useRef, useState } from 'react';
import Selections from "../../Components/Selections/Selections";
import Submit from "../../Components/Submit/Submit";
import Accommodation from "../../Components/Accommodation/Accommodation";
import Transportation from "../../Components/Transportation/Transportation";
import Dietary from "../../Components/Dietary/Dietary";
import TravelPurpose from "../../Components/TravelPurpose/TravelPurpose";
import Landmarks from "../../Components/Landmarks/Landmarks";
import Special from "../../Components/Special/Special";
import Index from "../../Components/Index";

const Home = () => {
    const [days, setDays] = useState("");
    const [members, setMembers] = useState("")
    const [budget, setBudget] = useState("")
    const [accommodation, setAccommodation] = useState("")
    const [transportation, setTransportation] = useState("")
    const [dietary, setDietary] = useState("")
    const [travelPurpose, setTravelPurpose] = useState("")
    const [landmarks, setLandmarks] = useState("")
    const [special, setSpecial] = useState("")
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
    const transportationScroll = useRef();
    const dietaryScroll = useRef();
    const travelPurposeScroll = useRef();
    const landmarksScroll = useRef();
    const specialScroll = useRef();



    const scrollHandler = (element) => {
        window.scrollTo({
            top: element.current.offsetTop - 80, behavior: "smooth"
        })
    }

    return (
        <div className="">
            <Navbar />
            <Banner />
            <Index />
            <div className="bg-[#F7F8FB]">
                <Selections days={days} setDays={setDays} members={members} setMembers={setMembers} budget={budget} setBudget={setBudget} accommodation={accommodation} setAccommodation={setAccommodation} dietary={dietary} setDietary={setDietary} travelPurpose={travelPurpose} setTravelPurpose={setTravelPurpose} transportation={transportation} setTransportation={setTransportation} landmarks={landmarks} setLandmarks={setLandmarks} special={special} setSpecial={setSpecial} />
                <Duration value={days} setValue={setDays} scrollHandler={scrollHandler} membersScroll={membersScroll} />
                <Members value={members} setValue={setMembers} membersScroll={membersScroll} scrollHandler={scrollHandler} budgetScroll={budgetScroll} />
                <Budget value={budget} setValue={setBudget} budgetScroll={budgetScroll} accommodationScroll={accommodationScroll} scrollHandler={scrollHandler} />
                <Accommodation value={accommodation} setValue={setAccommodation} accommodationScroll={accommodationScroll} transportationScroll={transportationScroll} scrollHandler={scrollHandler}/>
                <Transportation value={transportation} setValue={setTransportation} dietaryScroll={dietaryScroll} scrollHandler={scrollHandler} transportationScroll={transportationScroll}/>
                <Dietary value={dietary} setValue={setDietary} dietaryScroll={dietaryScroll} scrollHandler={scrollHandler} travelPurposeScroll={travelPurposeScroll}/>
                <TravelPurpose value={travelPurpose} setValue={setTravelPurpose} travelPurposeScroll={travelPurposeScroll} scrollHandler={scrollHandler} landmarksScroll={landmarksScroll}/>                
                <Landmarks value={landmarks} setValue={setLandmarks} landmarksScroll={landmarksScroll} scrollHandler={scrollHandler} specialScroll={specialScroll}/>
                <Special value={special} setValue={setSpecial} dietaryScroll={dietaryScroll} specialScroll={specialScroll}/>
                <Submit days={days} members={members} budget={budget} accommodation={accommodation} dietary={dietary} travelPurpose={travelPurpose} transportation={transportation} landmarks={landmarks} special={special} />
            </div>
        </div>
    );
};

export default Home;