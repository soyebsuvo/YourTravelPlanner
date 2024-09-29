import img from '../../assets/vector-beautiful-love-hearts-bubbles-floating-in-air-on-red-bokeh-backg.jpg'
import img2 from '../../assets/familie-001.jpg'
import img3 from '../../assets/3dac3edc8faea23f056035fe9455ec3d.jpg'
import img4 from '../../assets/acccd570d748a9cacd708e699ff7d4ab.jpg'
import PropTypes from 'prop-types';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useState } from 'react';
const Members = ({ value, setValue, membersScroll, scrollHandler, budgetScroll }) => {
    const [ adults, setAdults ] = useState(2);
    const [ child, setChild ] = useState(0);
    const [ friends, setFriends ] = useState(3);


    const hanlePlusAdults = () => {
        if(adults < 2) {
            return 
        }
        setAdults(adults - 1)
    }
    const hanlePlusChild = () => {
        if(child < 1) {
            return 
        }
        setChild(child - 1)
    }
    const hanlePlusFriends = () => {
        if(friends < 1) {
            return 
        }
        setFriends(friends - 1)
    }
    const handleConfitmFamily = () => {
        scrollHandler(budgetScroll);
        document.getElementById("family_modal").close()
        setValue(`Family`)
    }
    const handleConfitmFriends = () => {
        scrollHandler(budgetScroll);
        document.getElementById("friends_modal").close()
        setValue(`Friends`)
    }
    return (
        <div ref={membersScroll} className="border-[1px] border-theme-header bg-theme-tertiary p-2 md:p-6 px-4 md:px-20 shadow-xl rounded-xl">
            <div>
                <h2 className='text-md md:text-xl font-semibold text-center'>Who is travelling with you?<span className='text-red-500'>*</span> </h2>
            </div>
            <div className="grid grid-cols-2 gap-6 py-4">
                <div onClick={() => { setValue("Couple"); scrollHandler(budgetScroll) }} className={value === "Couple" ? `card shadow-xl border duration-150 border-theme-header bg-theme-fourth cursor-pointer` : `bg-[#D2ECF4] card shadow-xl border duration-150 hover:bg-theme-fourth cursor-pointer`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 id='couples' className="card-title text-base">Couple</h2>
                    </div>
                </div>
                <div onClick={() => { setValue(""); document.getElementById('family_modal').showModal() }} className={value.includes("Family") ? `card shadow-xl border duration-150 border-theme-header bg-theme-fourth cursor-pointer` : `bg-[#D2ECF4] card shadow-xl border duration-150 hover:bg-theme-fourth cursor-pointer`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base">Family</h2>
                    </div>
                </div>
                <dialog id="family_modal" className="modal">
                    <div className="modal-box scrollbar-hide">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="w-full">
                            <h2 className="text-xl font-bold my-2">How many members are with you ?</h2>
                            <div className='border rounded-2xl p-3 '>
                                <div className='flex justify-between items-center'>
                                    <h3 className='font-semibold my-2'>Adults</h3>
                                    <div className='flex items-center gap-4'>
                                        <FaMinus onClick={hanlePlusAdults} className='border-2 p-1 text-xl rounded-full border-black cursor-pointer'/> <p className='font-bold'>{adults}</p> <FaPlus onClick={() => setAdults(adults + 1)} className='border-2 p-1 text-xl rounded-full border-black cursor-pointer'/>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <h3 className='font-semibold my-2'>Adults</h3>
                                    <div className='flex items-center gap-4'>
                                        <FaMinus onClick={hanlePlusChild} className='border-2 p-1 text-xl rounded-full border-black cursor-pointer'/> <p className='font-bold'>{child}</p> <FaPlus onClick={() => setChild(child + 1)} className='border-2 p-1 text-xl rounded-full border-black cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button onClick={handleConfitmFamily} className="bg-blue-500 text-white px-4 py-1 rounded font-semibold mr-3 inline">Confirm</button>
                                {/* <button className="bg-red-300 text-white px-4 py-1 rounded font-semibold mr-3 inline">Save for later</button> */}
                            </div>
                        </div>
                    </div>
                </dialog>
                <div onClick={() => { setValue(""); document.getElementById('friends_modal').showModal() }} className={value.includes("Friends") ? `card shadow-xl border duration-150 border-theme-header bg-theme-fourth cursor-pointer` : `bg-[#D2ECF4] card shadow-xl border duration-150 hover:bg-theme-fourth cursor-pointer`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base">Friends</h2>
                    </div>
                </div>
                <dialog id="friends_modal" className="modal">
                    <div className="modal-box scrollbar-hide">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="w-full">
                            <h2 className="text-xl font-bold my-2">How many members are with you ?</h2>
                            <div className='border rounded-2xl p-3 '>
                                <div className='flex justify-between items-center'>
                                    <h3 className='font-semibold my-2'>Friends</h3>
                                    <div className='flex items-center gap-4'>
                                        <FaMinus onClick={hanlePlusFriends} className='border-2 p-1 text-xl rounded-full border-black cursor-pointer'/> <p className='font-bold'>{friends}</p> <FaPlus onClick={() => setFriends(friends + 1)} className='border-2 p-1 text-xl rounded-full border-black cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button onClick={handleConfitmFriends} className="bg-blue-500 text-white px-4 py-1 rounded font-semibold mr-3 inline">Confirm</button>
                                {/* <button className="bg-red-300 text-white px-4 py-1 rounded font-semibold mr-3 inline">Save for later</button> */}
                            </div>
                        </div>
                    </div>
                </dialog>
                <div onClick={() => { setValue("Solo"); scrollHandler(budgetScroll) }} className={value === "Solo" ? `card shadow-xl border duration-150 border-theme-header bg-theme-fourth cursor-pointer` : `bg-[#D2ECF4] card shadow-xl border duration-150 hover:bg-theme-fourth cursor-pointer`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base">Solo</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Members;

Members.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    membersScroll: PropTypes.object.isRequired,
    budgetScroll: PropTypes.object.isRequired,
    scrollHandler: PropTypes.func.isRequired,
}