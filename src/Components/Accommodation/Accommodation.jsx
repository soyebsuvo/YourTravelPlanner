import img from '../../assets/dubai-suite-skyline-view-bedroom.avif'
import img2 from '../../assets/jamaica-villa-canoe-cove-2021-header_medium.jpg'
import img3 from '../../assets/hostel-dorm-bedroom-two.jpg'
import img4 from '../../assets/CVB-Porch_1a74b273-5056-a36a-06184caa9b1a6896.webp'
import PropTypes from 'prop-types';
const Accommodation = ({value , setValue, accommodationScroll ,scrollHandler , transportationScroll}) => {
    return (
        <div ref={accommodationScroll} className="max-w-7xl mx-auto px-2 md:px-16 py-8">
            <div>
                <h2 className='text-2xl font-bold text-center my-3'> Where would you like to stay ? <span className='text-red-500'>*</span> </h2>
            </div>
            <div className="flex justify-center items-center gap-6 py-4">
                <div onClick={() => {setValue("Hotels") ; scrollHandler(transportationScroll)}} className={value === "Hotels" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="">
                        <img src={img} alt="Shoes" className="w-[300px] h-[160px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Hotels</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Vacation Rentals") ; scrollHandler(transportationScroll)}} className={value === "Vacation Rentals" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="">
                        <img src={img2} alt="Shoes" className="w-[300px] h-[160px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Vacation Rentals</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Hostels") ; scrollHandler(transportationScroll)}} className={value === "Hostels" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="">
                        <img src={img3} alt="Shoes" className="w-[300px] h-[160px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Hostels</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Bed and Breakfasts (B&Bs)") ; scrollHandler(transportationScroll)}} className={value === "Bed and Breakfasts (B&Bs)" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="">
                        <img src={img4} alt="Shoes" className="w-[300px] h-[160px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bed and Breakfasts</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accommodation;

Accommodation.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    accommodationScroll : PropTypes.object.isRequired,
    transportationScroll : PropTypes.object.isRequired,
    scrollHandler : PropTypes.func.isRequired,
}