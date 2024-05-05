import Banner from "../../Components/Banner/Banner";
import Duration from "../../Components/Duration/Duration";
import Members from "../../Components/Members/Members";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from 'react';

const Home = () => {
    const [days, setDays] = useState("");
    const [members , setMembers ] = useState("")
    const [budget , setBudget ] = useState("")
    return (
        <div className="">
            <Navbar />
            <Banner />
            <div className="bg-[#F7F8FB]">
                <Duration value={days} setValue={setDays} />
                <Members value={members} setValue={setMembers} />
            </div>
        </div>
    );
};

export default Home;