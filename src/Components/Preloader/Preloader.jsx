import Lottie from "lottie-react";
import animationData from '../../../public/Animation-1719756021611.json';

const Preloader = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Lottie animationData={animationData} style={{ width: 300, height: 300 }} />
        </div>
    );
};

export default Preloader;