import { useEffect, useState } from "react";
import './loader.css'
import Lottie from "lottie-react";
import animationData from '../../../public/Buffuring_flight.json';

const Loader = () => {
    const [currentFact, setCurrentFact] = useState(null);
    const [data, setData] = useState()
    useEffect(() => {
        fetch("loaderText.json").then(res => res.json()).then(data => setData(data));
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            // Pick a random fact from the data array
            const randomIndex = Math.floor(Math.random() * data.length);
            setCurrentFact(data[randomIndex]);
        }, 5000); // Change text every 5 seconds

        // Clean up the interval
        return () => clearInterval(interval);
    }, [data]);

    return (

        <div className="background-video-container">
            <video autoPlay loop muted className="background-video">
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content backdrop-blur-md bg-opacity-30 relative">

                <div className="text-loader">
                    <div className="absolute left-20 top-44">
                        <Lottie animationData={animationData} style={{ width: 400, height: 400 }} />
                    </div>
                    <div className="h-screen absolute right-20 top-44">
                        <Lottie animationData={animationData} style={{ width: 400, height: 400 }} />
                    </div>
                    {currentFact ? (
                        <div className="flex flex-col justify-center items-center h-screen gap-3 bg-opacity-20">
                            <h3 className="text-6xl font-semibold text-white">{currentFact.title}</h3>
                            <p className="text-xl w-[700px] text-center text-white">&apos;&apos;{currentFact.content}&apos;&apos;</p>
                        </div>
                    ) : <div className="flex flex-col justify-center items-center h-screen gap-3">
                        <h3 className="text-6xl font-semibold text-white">Global Wanderlust</h3>
                        <p className="text-xl w-[700px] text-center text-white">&apos;Every minute, approximately 2,000 people board flights around the world. That&apos;s about 1.2 million people taking to the skies each day!&apos;</p>
                    </div>}
                    
                </div>
            </div>
        </div>
    );
};

export default Loader;
