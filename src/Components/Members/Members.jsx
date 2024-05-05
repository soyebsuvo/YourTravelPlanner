import img from '../../assets/travel_with_partner_de931cd6b8.png'
import img2 from '../../assets/travel_with_family_730ac41742.png'
import img3 from '../../assets/travel_with_friends_23d8a637c3.png'
import img4 from '../../assets/travel_with_myself_8f0e425b26.png'
import PropTypes from 'prop-types';
const Members = ({value , setValue}) => {
    return (
        <div className="max-w-7xl mx-auto px-2 md:px-16 py-8">
            <div>
                <h2 className='text-2xl font-bold text-center'>Who is travelling with you ?</h2>
            </div>
            <div className="flex justify-center items-center gap-6 py-4">
                <div onClick={() => setValue("Couple")} className={value === "Couple" ? `card bg-base-100 shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card bg-base-100 shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Couple</h2>
                    </div>
                </div>
                <div onClick={() => setValue("Family")} className={value === "Family" ? `card bg-base-100 shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card bg-base-100 shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Family</h2>
                    </div>
                </div>
                <div onClick={() => setValue("Friends")} className={value === "Friends" ? `card bg-base-100 shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card bg-base-100 shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Friends</h2>
                    </div>
                </div>
                <div onClick={() => setValue("Solo")} className={value === "Solo" ? `card bg-base-100 shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card bg-base-100 shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full" />
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
    setValue : PropTypes.func.isRequired
}