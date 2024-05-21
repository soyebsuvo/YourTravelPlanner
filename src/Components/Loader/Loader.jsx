import { useEffect, useState } from "react";

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
        <div className="text-loader">
            {currentFact && (
                <div className="flex flex-col justify-center items-center h-screen gap-3">
                    <h3 className="text-5xl font-semibold">{currentFact.title}</h3>
                    <p className="text-md w-[500px] text-center">{currentFact.content}</p>
                </div>
            )}
        </div>
    );
};

export default Loader;
