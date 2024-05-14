import { useContext, useState } from "react";
import { MyContext } from "../../Components/Context/Context";
import { SlCalender } from "react-icons/sl";
import { MdOutlineDateRange } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { LuPanelBottomInactive } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { LuPlusCircle } from "react-icons/lu";
import logo from '../../assets/profile-logo.png'
import message from '../../assets/facebook-messenger.svg'
// import { useEffect, useState } from "react";
import normal from "../../assets/2201180.jpg"
import { FaMinus } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import Loader from "../../Components/Loader/Loader";
const RecommendationPage = () => {
    
    const [open, setOpen] = useState(false)
    const messages = {
        _id: 0,         // MongoDB generated unique identifier for the chat
        participants: [
            "user_id_1",
            "user_id_2"
        ],
        messages: [            // Array of messages exchanged in the chat
            {
                _id: 1,     // MongoDB generated unique identifier for the message
                sender: "222", // User ID of the message sender
                content: "Hello!", // Content of the message
                timestamp: "no" // Timestamp of the message
            },
            {
                _id: 2,
                sender: "333",
                content: "Hi there!",
                timestamp: "no"
            },
            {
                _id: 3,
                sender: "222",
                content: "How Are You",
                timestamp: "no"
            },
            {
                _id: 4,
                sender: "333",
                content: "Fine Thank You",
                timestamp: "no"
            },
            {
                _id: 4,
                sender: "222",
                content: "i am aslo Fine Thank You. What are you doing",
                timestamp: "no"
            },
            {
                _id: 4,
                sender: "333",
                content: "i am aslo Fine Thank You. What are you doing",
                timestamp: "no"
            },
            {
                _id: 4,
                sender: "222",
                content: "i am aslo Fine Thank You. What are you doing",
                timestamp: "no"
            },
            {
                _id: 4,
                sender: "333",
                content: "i am aslo Fine Thank You. What are you doing",
                timestamp: "no"
            },
            {
                _id: 4,
                sender: "222",
                content: "i am aslo Fine Thank You. What are you doing",
                timestamp: "no"
            },
            {
                _id: 4,
                sender: "333",
                content: "i am aslo Fine Thank You. What are you doing",
                timestamp: "no"
            },
        ]
    }
    const { response } = useContext(MyContext);

    if (!response) {
        return <Loader/> // Display loading message while response is being fetched
    }



    try {
        const parsedData = JSON.parse(response);
        console.log(JSON.parse(parsedData?.message?.content))
        const actualData = JSON.parse(parsedData?.message?.content)
        return (
            <div className="max-w-7xl mx-auto px-3 md:px-14 py-4 relative">
                <div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="text-green-500 flex flex-col justify-center cursor-pointer items-center gap-1 border-b-2 border-green-500 w-[130px] pb-3">
                                <SlCalender className="text-2xl" />
                                <h3 className="text-xl font-semibold">Day by Day</h3>
                            </div>
                            <div className="text-gray-500 flex flex-col justify-center cursor-pointer items-center gap-1 w-[130px] pb-3">
                                <MdOutlineDateRange className="text-2xl" />
                                <h3 className="text-xl font-semibold">Stays (3)</h3>
                            </div>
                            <div className="text-gray-500 flex flex-col justify-center cursor-pointer items-center gap-1 w-[140px] pb-3">
                                <FaCarSide className="text-2xl" />
                                <h3 className="text-xl font-semibold">Transfers(6)</h3>
                            </div>
                            <div className="text-gray-500 flex flex-col justify-center cursor-pointer items-center gap-1 w-[140px] pb-3">
                                <LuPanelBottomInactive className="text-2xl" />
                                <h3 className="text-xl font-semibold">Activities(5)</h3>
                            </div>
                            <div className="text-gray-500 flex flex-col justify-center cursor-pointer items-center gap-1 w-[140px] pb-3">
                                <BsThreeDots className="text-2xl" />
                                <h3 className="text-xl font-semibold">More</h3>
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#652cb3] p-6 text-white font-bold">Book Now</button>
                        </div>
                    </div>
                </div>

                <div className="py-8">
                    <div className="flex">
                        <div className="w-full p-4">
                            {/* table .\ */}
                            {
                                actualData?.itinerary.map((city, index) => {
                                    return <div key={index} className="forChild flex items-center gap-5 justify-between mb-20 h-auto">
                                        <div className="main border-2 rounded w-[55%] h-full">
                                            {/* header  */}
                                            <div className="flex justify-between items-center p-3">
                                                <div className="font-bold">{city?.destination}<span className="ml-5 text-gray-500 font-semibold">{city?.travelDates?.start} to {city?.travelDates?.end}</span></div>

                                                <div className="font-bold">{city?.destination} Trip Roadmap</div>
                                            </div>
                                            {/* row  */}
                                            {
                                                city?.dailyActivities.map((item, index) => {
                                                    return <div key={index} className="flex justify-between items-center">
                                                        <div className="border min-w-[90px] h-[140px] flex justify-center items-center text-gray-500 font-bold">{item?.day}</div>
                                                        {
                                                            item?.activities.map((item, index) => {
                                                                return <div key={index} className="border w-full h-[140px] p-3 overflow-hidden">
                                                                    <h2 className="text-gray-500 font-bold">{item?.time}</h2>
                                                                    <p className="text-gray-500">{item?.activity}</p>
                                                                </div>
                                                            })
                                                        }

                                                    </div>
                                                })
                                            }
                                        </div>
                                        <div className="w-[45%] h-full">
                                            <img className="p-5" src={normal} alt="" />
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        {/* <div className="col-span-5 p-4">
                            <img className="p-4" src={normal} alt="" />
                        </div> */}
                    </div>
                </div>
                {/* chatbot */}
                <div className={`flex justify-end`}>
                    <div className={`fixed duration-500 transition-all ease-in ${open ? 'bottom-10' : '-bottom-[500px]' }`}>
                        <div className="relative w-[370px] h-calc-100vh-140px bg-white-300 border-2 inset-4 bg-gray-300 rounded-2xl">
                            <div className="flex justify-between items-center gap-2 p-3 border-b-4">
                                <div className="flex gap-2">
                                    <img className="w-12 h-12 rounded-full" src={logo} alt="" />
                                    <div>
                                        <h2 className="text-xl font-semibold">Your Travel Planner</h2>
                                        <p className="text-sm">Online</p>
                                    </div>
                                </div>
                                <h3 onClick={() => setOpen(false)} className="mr-4 text-xl cursor-pointer" title="Close"><FaMinus /></h3>
                            </div>

                            <div className="py-3 overflow-y-scroll scrollbar-hide h-calc-100vh-278px">
                                {messages?.messages?.map((item, index) => {
                                    return <div className={` ${item?.sender === "222" ? 'flex justify-end px-3 py-1 ml-12' : 'px-3 py-1 mr-12'}`} key={index}><p className={`font-bold text-gray-500 border-2 border-gray-400 p-1 rounded w-fit`}>{item?.content}</p></div>
                                })}
                            </div>

                            <div className="absolute bottom-2 w-full flex items-center justify-between gap-2 px-4">
                                <LuPlusCircle className="font-bold text-4xl cursor-pointer" />
                                <input className="outline-none w-full mx-auto bg-gray-200 rounded-lg px-3 py-2" placeholder="Type..." type="text" />
                                <BsFillSendFill className="font-bold text-4xl cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* icon  */}
                    <div onClick={() => setOpen(true)} className={`${open ? 'hidden' : 'fixed'} right-8 bottom-8 cursor-pointer`}>
                        <img className="w-12 h-12 rounded-full" src={message} alt="" />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return <p>Error: Invalid response format</p>; // Display error message if JSON parsing fails
    }
};

export default RecommendationPage;