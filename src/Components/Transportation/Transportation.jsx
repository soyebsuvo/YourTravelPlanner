import img from '../../assets/RTCbus-266007a5e33d434fb13a8252a8d13f65.jpg';
import img4 from '../../assets/private-transportation-company-3.jpg';
import PropTypes from 'prop-types';
const Transportation = ({value , setValue , transportationScroll}) => {
    return (
        <div ref={transportationScroll} className="md:w-1/2 border border-blue-400 p-2 md:p-6 px-4 md:px-20 shadow-xl rounded-xl">
            <div>
                <h2 className='text-md md:text-xl font-semibold text-center'>How do you plan to get around?<span className='text-red-500'>*</span> </h2>
            </div>
            <div className="grid grid-cols-2 gap-6 py-4">
                <div onClick={() => {setValue("Public Transportation"); }} className={value === "Public Transportation" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base">Public Transportation</h2>
                    </div>
                </div>
                
                <div onClick={() => {setValue("Private / Prearranged");}} className={value === "Private / Prearranged" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base h-[30px]">Private / Prearranged</h2>
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
    transportationScroll : PropTypes.object.isRequired
}