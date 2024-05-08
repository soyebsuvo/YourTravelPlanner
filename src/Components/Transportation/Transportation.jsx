import img from '../../assets/RTCbus-266007a5e33d434fb13a8252a8d13f65.jpg';
import img2 from '../../assets/Car-Rentals-in-India.jpg';
import img3 from '../../assets/WalkArlington_Walk-Bike-to-School-Day_2016_V1.jpg';
import img4 from '../../assets/private-transportation-company-3.jpg';
import PropTypes from 'prop-types';
const Transportation = ({value , setValue , scrollHandler , landmarksScroll , transportationScroll}) => {
    return (
        <div ref={transportationScroll} className="max-w-7xl mx-auto px-2 md:px-16 py-8">
            <div>
                <h2 className='text-2xl font-bold text-center my-3'>How do you plan to get around?</h2>
            </div>
            <div className="flex justify-center items-center gap-6 py-4">
                <div onClick={() => {setValue("Public Transportation"); scrollHandler(landmarksScroll)}} className={value === "Public Transportation" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Public Transportation</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Rental Car"); scrollHandler(landmarksScroll)}} className={value === "Rental Car" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Rental Car</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Walking/Biking"); scrollHandler(landmarksScroll)}} className={value === "Walking/Biking" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Walking/Biking</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Private/Prearranged"); scrollHandler(landmarksScroll)}} className={value === "Private/Prearranged" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title h-[30px]">Private/Prearranged</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transportation;

Transportation.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    transportationScroll : PropTypes.object.isRequired,
    landmarksScroll : PropTypes.object.isRequired,
    scrollHandler : PropTypes.func.isRequired,
}