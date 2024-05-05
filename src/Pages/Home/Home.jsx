import Banner from "../../Components/Banner/Banner";
import Budget from "../../Components/Budget/Budget";
import Duration from "../../Components/Duration/Duration";
import Members from "../../Components/Members/Members";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from 'react';
import Selections from "../../Components/Selections/Selections";

const Home = () => {
    const [days, setDays] = useState("");
    const [members , setMembers ] = useState("")
    const [budget , setBudget ] = useState("")
    return (
        <div className="">
            <Navbar />
            <Banner />
            <div className="bg-[#F7F8FB]">
                <Selections days={days} members={members} budget={budget} setDays={setDays} setMembers={setMembers} setBudget={setBudget}/>
                <Duration value={days} setValue={setDays} />
                <Members value={members} setValue={setMembers} />
                <Budget value={budget} setValue={setBudget} />
            </div>
        </div>
    );
};

export default Home;