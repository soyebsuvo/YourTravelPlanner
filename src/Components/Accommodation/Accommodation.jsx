import img from '../../assets/hotel-room-2K-wallpaper-middle-size.jpg'
import img2 from '../../assets/jamaica-villa-canoe-cove-2021-header_medium.jpg'
import img3 from '../../assets/hostel-dorm-bedroom-two.jpg'
import img4 from '../../assets/bed_and_breakfast.jpg'
import PropTypes from 'prop-types';
const Accommodation = ({value , setValue, accommodationScroll ,scrollHandler , transportationScroll}) => {
    return (
        <div ref={accommodationScroll} className="border border-blue-400 p-6 px-20 shadow-xl rounded-xl">
            <div>
                <h2 className='text-xl font-semibold text-center'> Where would you like to stay ? <span className='text-red-500'>*</span> </h2>
            </div>
            <div className="grid grid-cols-2 gap-6 py-4">
                <div onClick={() => {setValue("Hotels") ; scrollHandler(transportationScroll)}} className={value === "Hotels" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base">Hotels</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Vacation Rentals") ; scrollHandler(transportationScroll)}} className={value === "Vacation Rentals" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base">Vacation Rentals</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Hostels") ; scrollHandler(transportationScroll)}} className={value === "Hostels" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base">Hostels</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Bed and Breakfasts (B&Bs)") ; scrollHandler(transportationScroll)}} className={value === "Bed and Breakfasts (B&Bs)" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base">Bed and Breakfasts</h2>
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