import Banner from "../../Components/Banner/Banner";
import Duration from "../../Components/Duration/Duration";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
    return (
        <div className="">
            <Navbar />
            <Banner />
            <div className="bg-[#F7F8FB]">
                <Duration />
            </div>
        </div>
    );
};

export default Home;