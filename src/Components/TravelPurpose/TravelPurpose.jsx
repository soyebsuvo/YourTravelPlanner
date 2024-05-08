import img from '../../assets/landscape_nature_beach_sea_relaxation_relaxing_couple_men-64280.jpg';
import img2 from '../../assets/2017_02_14_21561_1487072120._large.jpg';
import img3 from '../../assets/7-must-do-adventure-activities-in-iceland-1.jpg';
import img4 from '../../assets/negombo.jpg';
import PropTypes from 'prop-types';
const TravelPurpose = ({value , setValue , travelPurposeScroll , scrollHandler ,transportationScroll}) => {
    return (
        <div ref={travelPurposeScroll} className="max-w-7xl mx-auto px-2 md:px-16 py-8">
            <div>
                <h2 className='text-2xl font-bold text-center my-3'>What is the main focus of your trip?</h2>
            </div>
            <div className="flex justify-center items-center gap-6 py-4">
                <div onClick={() => { setValue("Leisure/Vacation"); scrollHandler(transportationScroll) }} className={value === "Leisure/Vacation" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Leisure/Vacation</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Business"); scrollHandler(transportationScroll)}} className={value === "Business" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Business</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Adventure/Outdoor Activities"); scrollHandler(transportationScroll)}} className={value === "Adventure/Outdoor Activities" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title h-[30px]">Adventure/Outdoor Activities</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Cultural Exploration"); scrollHandler(transportationScroll)}} className={value === "$400" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cultural Exploration</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelPurpose;

TravelPurpose.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    transportationScroll : PropTypes.object.isRequired,
    travelPurposeScroll : PropTypes.object.isRequired,
    scrollHandler : PropTypes.func.isRequired,
}