import Banner from "../../Components/Banner/Banner";
import Budget from "../../Components/Budget/Budget";
import Duration from "../../Components/Duration/Duration";
import Members from "../../Components/Members/Members";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext, useRef } from 'react';
import Selections from "../../Components/Selections/Selections";
// import Submit from "../../Components/Submit/Submit";
import Accommodation from "../../Components/Accommodation/Accommodation";
import Transportation from "../../Components/Transportation/Transportation";
import Index from "../../Components/Index";
import Footer from "../../Components/Footer/Footer";
import { MyContext } from "../../Components/Context/Context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Preloader from "../../Components/Preloader/Preloader";
// import useCheckRole from "../../Hooks/useCheckRole";

const Home = () => {
    // const [ , isRolePending ] = useCheckRole();
    const navigate = useNavigate();
    const {user , loading ,days,
        members,
        budget,
        accommodation,
        transportation,
        setDays,
        setMembers,
        setBudget,
        setAccommodation,
        setTransportation,
        place } = useContext(MyContext);
    // const [dietary, setDietary] = useState("")
    window.addEventListener('load', () => {
        // Scroll to the top of the page with smooth behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // const durationScroll = useRef();
    const durationScroll = useRef();
    const membersScroll = useRef();
    const budgetScroll = useRef();
    const accommodationScroll = useRef();
    const transportationScroll = useRef();
    // const dietaryScroll = useRef();
    // const travelPurposeScroll = useRef();
    // const landmarksScroll = useRef();
    // const specialScroll = useRef();



    const scrollHandler = (element) => {
        window.scrollTo({
            top: element.current.offsetTop - 120, behavior: "smooth"
        })
    }

    const handleGoToSelectCities = () => {
        if(!place || !days || !members || !budget || !accommodation || !transportation){
            return Swal.fire({
                title: "Oops!",
                text: "Please answer all the mandatory questions",
                icon: "error"
            });
        } else if(!user){
            document.getElementById('my_modal_3').showModal()
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "You must login to continue",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        navigate("/select-cities")
    }

    if(loading){
        return <Preloader />
    }

    return (
        <div className="">
            <Navbar />
            <Banner scrollHandler={scrollHandler} durationScroll={durationScroll} />
            <Index />
            <div className="bg-[#F7F8FB] border-4 rounded-2xl p-5 max-w-7xl mx-auto my-4 md:px-2">
                <Selections days={days} setDays={setDays} members={members} setMembers={setMembers} budget={budget} setBudget={setBudget} accommodation={accommodation} setAccommodation={setAccommodation} transportation={transportation} setTransportation={setTransportation} />
                <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-2 md:px-16 py-8 gap-32">
                    <Duration value={days} setValue={setDays} scrollHandler={scrollHandler} membersScroll={membersScroll} durationScroll={durationScroll} />
                    <Members value={members} setValue={setMembers} membersScroll={membersScroll} scrollHandler={scrollHandler} budgetScroll={budgetScroll} />
                </div>
                <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-2 md:px-16 py-8 gap-32">
                    <Budget value={budget} setValue={setBudget} budgetScroll={budgetScroll} accommodationScroll={accommodationScroll} scrollHandler={scrollHandler} />
                    <Accommodation value={accommodation} setValue={setAccommodation} accommodationScroll={accommodationScroll} transportationScroll={transportationScroll} scrollHandler={scrollHandler} />
                </div>
                <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-2 md:px-16 py-8 gap-32">
                    <Transportation value={transportation} setValue={setTransportation} transportationScroll={transportationScroll} />
                    <div className="md:w-1/2">
                        <div>
                            <h2 className='text-md md:text-2xl font-bold text-center my-3'>Any Specific Need ? (Optional)</h2>
                            <textarea name="specificNeed" id="specificNeed" cols="30" rows="5" maxLength="99" className="w-full text-2xl p-5 resize-none shadow focus:outline-none my-5 rounded" placeholder="Wrtie Down Your Need..."></textarea>
                            <div className="flex justify-center items-center pt-8 w-full">
                                <button onClick={handleGoToSelectCities} className={`bg-blue-600 py-1 pb-2 px-6 rounded text-white text-xl w-full`}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Dietary value={dietary} setValue={setDietary} dietaryScroll={dietaryScroll} scrollHandler={scrollHandler} travelPurposeScroll={travelPurposeScroll} />
                <TravelPurpose value={travelPurpose} setValue={setTravelPurpose} travelPurposeScroll={travelPurposeScroll} scrollHandler={scrollHandler} landmarksScroll={landmarksScroll} />
                <Landmarks value={landmarks} setValue={setLandmarks} landmarksScroll={landmarksScroll} scrollHandler={scrollHandler} specialScroll={specialScroll} />
                <Special value={special} setValue={setSpecial} dietaryScroll={dietaryScroll} specialScroll={specialScroll} /> */}
            </div>
            <Footer />
        </div>
    );
};

export default Home;