import { RxCrossCircled } from "react-icons/rx";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { MyContext } from "../Context/Context";
const Selections = ({ days, members, budget, accommodation, transportation, setDays, setMembers, setBudget, setAccommodation, setTransportation }) => {
    // const place = 'Dhaka';
    const { place , setPlace } = useContext(MyContext)
    
    const itemStyleSelect = `flex justify-start items-center gap-2 text-xs md:text-sm border-2 px-2 py-1 bg-[#003B95] text-white rounded-md md:my-2 mx-1 w-fit font-semibold rounded-[8px]`;
    const itemStyleNoSelect = `flex justify-start items-center gap-2 text-xs md:text-sm border-2 px-2 py-1 bg-theme-fifth rounded-md md:my-2 mx-1 w-fit font-semibold rounded-[8px]`;

    return (
        <div className="sticky top-0 bg-theme-secondary z-30">
            <div className="max-w-7xl mx-auto md:h-[120px] h-auto pb-2 px-4">
                <h3 className="text-gray-500 text-base md:text-xl font-semibold pt-6 mb-3">LET&apos;S PLAN YOUR NEXT ADVENTURE...</h3>
                <div className="flex flex-wrap gap-2 items-center">
                    <p className={place ? itemStyleSelect : itemStyleNoSelect}>{place || 'Destination'} {place ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setPlace("")} /> : undefined} </p>
                    <p className={days ? itemStyleSelect : itemStyleNoSelect}>{days || 'Days'} {days ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setDays("")} /> : undefined} </p>
                    <p className={members ? itemStyleSelect : itemStyleNoSelect}>{members || 'Members'} {members ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setMembers("")} /> : undefined} </p>
                    <p className={budget ? itemStyleSelect : itemStyleNoSelect}>{budget || "Budget"} {budget ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setBudget("")} /> : undefined} </p>
                    <p className={accommodation ? itemStyleSelect : itemStyleNoSelect}>{accommodation || 'Accommodation'} {accommodation ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setAccommodation("")} /> : undefined} </p>
                    <p className={transportation ? itemStyleSelect : itemStyleNoSelect}>{transportation || 'Transportation'} {transportation ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setTransportation("")} /> : undefined} </p>
                </div>
            </div>
        </div>
    );
};

export default Selections;

Selections.propTypes = {
    days: PropTypes.string.isRequired,
    members: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    accommodation: PropTypes.string.isRequired,
    transportation: PropTypes.string.isRequired,
    setDays: PropTypes.func.isRequired,
    setMembers: PropTypes.func.isRequired,
    setBudget: PropTypes.func.isRequired,
    setAccommodation: PropTypes.func.isRequired,
    setTransportation: PropTypes.func.isRequired
}