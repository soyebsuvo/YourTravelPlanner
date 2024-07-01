import { RxCrossCircled } from "react-icons/rx";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { MyContext } from "../Context/Context";
const Selections = ({ days, members, budget, accommodation, transportation, setDays, setMembers, setBudget, setAccommodation, setTransportation }) => {
    // const place = 'Dhaka';
    const { place , setPlace } = useContext(MyContext)
    return (
        <div className="sticky top-0 bg-[#F7F8FB] z-30">
            <div className="max-w-7xl mx-auto h-[120px] px-4">
                <h3 className="text-gray-500 text-xl font-semibold pt-6 mb-3">LET&apos;S PLAN YOUR NEXT ADVENTURE...</h3>
                <div className="flex gap-2 items-center">
                    <p className={place ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-blue-600 text-white rounded-md my-2 mx-1 w-fit font-semibold` : `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit font-semibold`}>{place || 'Destination'} {place ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setPlace("")} /> : undefined} </p>
                    <p className={days ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-blue-600 text-white rounded-md my-2 mx-1 w-fit font-semibold` : `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit font-semibold`}>{days || 'Days'} {days ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setDays("")} /> : undefined} </p>
                    <p className={members ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-blue-600 text-white rounded-md my-2 mx-1 w-fit font-semibold` : `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit font-semibold`}>{members || 'Members'} {members ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setMembers("")} /> : undefined} </p>
                    <p className={budget ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-blue-600 text-white rounded-md my-2 mx-1 w-fit font-semibold` : `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit font-semibold`}>{budget || "Budget"} {budget ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setBudget("")} /> : undefined} </p>
                    <p className={accommodation ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-blue-600 text-white rounded-md my-2 mx-1 w-fit font-semibold` : `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit font-semibold`}>{accommodation || 'Accommodation'} {accommodation ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setAccommodation("")} /> : undefined} </p>
                    <p className={transportation ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-blue-600 text-white rounded-md my-2 mx-1 w-fit font-semibold` : `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit font-semibold`}>{transportation || 'Transportation'} {transportation ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setTransportation("")} /> : undefined} </p>
                    {/* <p className={dietary ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit font-semibold` : `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit font-semibold`}>{dietary} {dietary ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setDietary("")} /> : undefined} </p>
                    <p className={travelPurpose ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit font-semibold` : `flex justify-start items-center gap-2 text-sm`}>{travelPurpose} {travelPurpose ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setTravelPurpose("")} /> : undefined} </p>
                    <p className={landmarks ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit font-semibold` : `flex justify-start items-center gap-2 text-sm`}>{landmarks} {landmarks ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setLandmarks("")} /> : undefined} </p>
                    <p className={special ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit font-semibold` : `flex justify-start items-center gap-2 text-sm`}>{special} {special ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setSpecial("")} /> : undefined} </p> */}
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