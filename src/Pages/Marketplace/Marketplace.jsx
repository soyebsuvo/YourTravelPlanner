import SubBanner from "../../Components/Banner/SubBanner";
import Navbar from "../../Components/Navbar/Navbar";
import { TripFilter } from "./components/Filtering/TripFilter";

export default function Marketplace() {
    return (
        <div className="">
            <Navbar/>
            <SubBanner/>

            <TripFilter/>
        </div>
    )
}
