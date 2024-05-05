import background from "../../assets/desktop_1_min_1_9896841547.avif"
import { IoSearch } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-[490px]" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full relative">
                        <h1 className="mb-5 text-4xl font-bold">Plan a <span className="damion-regular text-[#AFFF53]">hassle-free</span> holiday</h1>
                        <input className="inpt text-black outline-none border-4 border-[#AFFF53] rounded-xl px-10 py-3 w-[340px]" type="text" name="" id="" placeholder="Search Countries, Cities" />
                        <span className="absolute bottom-[17px] left-[69px]"><IoSearch className="text-gray-500 text-[19px]" /></span>
                    </div>
                </div>
            </div>
            <div className="bg-[#000] py-3 flex justify-evenly items-center">
                <div className="flex justify-center items-center">
                    <FaFacebookF className="text-blue-500 bg-white p-1 rounded-full" />
                    <FcGoogle className=" bg-white p-[2px] rounded-full -ml-[7px]"/>
                    <span className="text-white mx-1">4.6</span>
                    <FaStar className="text-[#00C684]" />
                    <span className="text-white mx-1">rated</span>
                </div>
                <h3 className="flex justify-center items-center gap-1"><TiTick className="text-white bg-[#00C684] p-[2px] rounded-full"/><span className="text-white">100% Customised Trips</span></h3>
                <h3 className="flex justify-center items-center gap-1"><TiTick className="text-white bg-[#00C684] p-[2px] rounded-full"/><span className="text-white">95% Visa Success Rate</span></h3>
                <h3 className="flex justify-center items-center gap-1"><TiTick className="text-white bg-[#00C684] p-[2px] rounded-full"/><span className="text-white">24/7 Concierge</span></h3>
            </div>
        </div>
    );
};

export default Banner;