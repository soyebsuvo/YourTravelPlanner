import { RxCrossCircled } from "react-icons/rx";
import PropTypes from 'prop-types';
const Selections = ({ days, members, budget, accommodation, dietary, travelPurpose, transportation, landmarks, special, setDays, setMembers, setBudget, setAccommodation, setDietary, setTravelPurpose, setTransportation, setLandmarks, setSpecial }) => {
    return (
        <div className="sticky top-0 bg-[#F7F8FB] z-40">
            <div className="max-w-7xl mx-auto h-[120px] px-4">
                <h3 className="text-gray-500 font-semibold pt-6 mb-1">NOW PLANNING YOUR HOLIDAY TO</h3>
                <div className="flex gap-2 items-center">
                    <p className={days ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit` : `flex justify-start items-center gap-2 text-sm`}>{days} {days ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setDays("")} /> : undefined} </p>
                    <p className={members ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit` : `flex justify-start items-center gap-2 text-sm`}>{members} {members ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setMembers("")} /> : undefined} </p>
                    <p className={budget ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit` : `flex justify-start items-center gap-2 text-sm`}>{budget} {budget ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setBudget("")} /> : undefined} </p>
                    <p className={accommodation ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit` : `flex justify-start items-center gap-2 text-sm`}>{accommodation} {accommodation ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setAccommodation("")} /> : undefined} </p>
                    <p className={transportation ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit` : `flex justify-start items-center gap-2 text-sm`}>{transportation} {transportation ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setTransportation("")} /> : undefined} </p>
                    <p className={dietary ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit` : `flex justify-start items-center gap-2 text-sm`}>{dietary} {dietary ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setDietary("")} /> : undefined} </p>
                    <p className={travelPurpose ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit` : `flex justify-start items-center gap-2 text-sm`}>{travelPurpose} {travelPurpose ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setTravelPurpose("")} /> : undefined} </p>
                    <p className={landmarks ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit` : `flex justify-start items-center gap-2 text-sm`}>{landmarks} {landmarks ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setLandmarks("")} /> : undefined} </p>
                    <p className={special ? `flex justify-start items-center gap-2 text-sm border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit` : `flex justify-start items-center gap-2 text-sm`}>{special} {special ? <RxCrossCircled className="tex-xl cursor-pointer" onClick={() => setSpecial("")} /> : undefined} </p>
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
    dietary: PropTypes.string.isRequired,
    travelPurpose: PropTypes.string.isRequired,
    transportation: PropTypes.string.isRequired,
    landmarks: PropTypes.string.isRequired,
    special: PropTypes.string.isRequired,
    setDays: PropTypes.func.isRequired,
    setMembers: PropTypes.func.isRequired,
    setBudget: PropTypes.func.isRequired,
    setAccommodation: PropTypes.func.isRequired,
    setDietary: PropTypes.func.isRequired,
    setTravelPurpose: PropTypes.func.isRequired,
    setTransportation: PropTypes.func.isRequired,
    setLandmarks: PropTypes.func.isRequired,
    setSpecial: PropTypes.func.isRequired,
}