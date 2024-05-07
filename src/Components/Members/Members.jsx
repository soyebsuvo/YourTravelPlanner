import img from '../../assets/travel_with_partner_de931cd6b9.png'
import img2 from '../../assets/travel_with_family_730ac41743.png'
import img3 from '../../assets/travel_with_friends_23d8a637c4.png'
import img4 from '../../assets/travel_with_myself_8f0e425b27.png'
import PropTypes from 'prop-types';
const Members = ({value , setValue , membersScroll , scrollHandler, budgetScroll}) => {
    return (
        <div ref={membersScroll} className="max-w-7xl mx-auto px-2 md:px-16 py-8">
            <div>
                <h2 className='text-2xl font-bold text-center'>Who is travelling with you ?</h2>
            </div>
            <div className="flex justify-center items-center gap-6 py-4">
                <div onClick={() => {setValue("Couple"); scrollHandler(budgetScroll)}} className={value === "Couple" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 id='couples' className="card-title">Couple</h2>
                    </div>
                </div>
                <div onClick={() => setValue("Family")} className={value === "Family" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Family</h2>
                    </div>
                </div>
                <div onClick={() => setValue("Friends")} className={value === "Friends" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Friends</h2>
                    </div>
                </div>
                <div onClick={() => setValue("Solo")} className={value === "Solo" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Solo</h2>
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