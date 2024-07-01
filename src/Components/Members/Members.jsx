import img from '../../assets/vector-beautiful-love-hearts-bubbles-floating-in-air-on-red-bokeh-backg.jpg'
import img2 from '../../assets/familie-001.jpg'
import img3 from '../../assets/3dac3edc8faea23f056035fe9455ec3d.jpg'
import img4 from '../../assets/acccd570d748a9cacd708e699ff7d4ab.jpg'
import PropTypes from 'prop-types';
const Members = ({value , setValue , membersScroll , scrollHandler, budgetScroll}) => {
    return (
        <div ref={membersScroll} className="border border-blue-400 p-6 px-20 shadow-xl rounded-xl">
            <div>
                <h2 className='text-xl font-semibold text-center'>Who is travelling with you ? <span className='text-red-500'>*</span> </h2>
            </div>
            <div className="grid grid-cols-2 gap-6 py-4">
                <div onClick={() => {setValue("Couple"); scrollHandler(budgetScroll)}} className={value === "Couple" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 id='couples' className="card-title text-base">Couple</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Family"); scrollHandler(budgetScroll)}} className={value === "Family" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base">Family</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Friends"); scrollHandler(budgetScroll)}} className={value === "Friends" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base">Friends</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Solo"); scrollHandler(budgetScroll)}} className={value === "Solo" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
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
    value : PropTypes.string.isRequired,
    setValue : PropTypes.func.isRequired,
    membersScroll : PropTypes.object.isRequired,
    budgetScroll : PropTypes.object.isRequired,
    scrollHandler : PropTypes.func.isRequired,
}