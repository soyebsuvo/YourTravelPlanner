import { RxCrossCircled } from "react-icons/rx";
import PropTypes from 'prop-types';
const Selections = ({days,members,budget,setDays,setMembers,setBudget}) => {
    return (
        <div className="sticky top-0 bg-[#F7F8FB] z-40">
            <div className="max-w-7xl mx-auto h-[120px]">
                <h3 className="text-gray-500 font-semibold pt-6 mb-1">NOW PLANNING YOUR HOLIDAY TO</h3>
                <div className="flex gap-3 items-center">
                    <p className={ days ? `flex justify-start items-center gap-2 border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit` :`flex justify-start items-center gap-2` }>{days} { days ? <RxCrossCircled className="tex-xl" onClick={() => setDays("")}/> : undefined} </p>
                    <p className={ members ? `flex justify-start items-center gap-2 border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit` :`flex justify-start items-center gap-2` }>{members} { members ? <RxCrossCircled className="tex-xl" onClick={() => setMembers("")}/> : undefined} </p>
                    <p className={ budget ? `flex justify-start items-center gap-2 border-2 px-2 py-1 bg-white rounded-md my-2 mx-1 w-fit` :`flex justify-start items-center gap-2` }>{budget} { budget ? <RxCrossCircled className="tex-xl" onClick={() => setBudget("")}/> : undefined} </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Selections;

Selections.propTypes = {
    days: PropTypes.string.isRequired,
    members : PropTypes.string.isRequired,
    budget : PropTypes.string.isRequired,
    setDays : PropTypes.func.isRequired,
    setMembers: PropTypes.func.isRequired,
    setBudget: PropTypes.func.isRequired
}