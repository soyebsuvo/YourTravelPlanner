import { useEffect, useState } from "react";
import './loader.css'
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
            <div className="content">
                <div className="text-loader hidden">
                    {currentFact ? (
                        <div className="flex flex-col justify-center items-center h-screen gap-3 bg-opacity-20">
                            <h3 className="text-5xl font-semibold text-white">{currentFact.title}</h3>
                            <p className="text-md w-[500px] text-center text-white">{currentFact.content}</p>
                        </div>
                    ) : <div className="flex flex-col justify-center items-center h-screen gap-3">
                    <h3 className="text-5xl font-semibold text-white">Global Wanderlust</h3>
                    <p className="text-md w-[500px] text-center text-white">Every minute, approximately 2,000 people board flights around the world. That&apos;s about 1.2 million people taking to the skies each day!</p>
                </div>}
                </div>
            </div>
        </div>
    );
};

export default Loader;
