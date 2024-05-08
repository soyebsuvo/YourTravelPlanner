import img from '../../assets/travel-4813658_1920.jpg';
import img2 from '../../assets/shutterstock_360314183-1.jpg';
import img3 from '../../assets/th.jpeg';
import img4 from '../../assets/2201180.jpg';
import PropTypes from 'prop-types';
const Landmarks = ({value , setValue , scrollHandler , specialScroll, landmarksScroll}) => {
    return (
        <div ref={landmarksScroll} className="max-w-7xl mx-auto px-2 md:px-16 py-8">
            <div>
                <h2 className='text-2xl font-bold text-center my-3'> Any must-visit places? </h2>
            </div>
            <div className="flex justify-center items-center gap-6 py-4">
                <div onClick={() => { setValue("Historical Sites/Cultural Landmarks"); scrollHandler(specialScroll) }} className={value === "Historical Sites/Cultural Landmarks" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f] h-[360px]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f] h-[360px]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Historical Sites / Cultural Landmarks</h2>
                    </div>
                </div>
                <div onClick={() => setValue("Natural Attractions/Scenic Spots")} className={value === "Natural Attractions/Scenic Spots" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f] h-[360px]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f] h-[360px]`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Natural Attractions / Scenic Spots</h2>
                    </div>
                </div>
                <div onClick={() => setValue("City Highlights/Urban Landmarks")} className={value === "City Highlights/Urban Landmarks" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f] h-[360px]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f] h-[360px]`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">City Highlights / Urban Landmarks</h2>
                    </div>
                </div>
                <div onClick={() => setValue("Specific Landmarks or Attractions")} className={value === "Specific Landmarks or Attractions" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f] h-[360px]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f] h-[360px]`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Specific Landmarks or Attractions</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landmarks;

Landmarks.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    landmarksScroll : PropTypes.object.isRequired,
    specialScroll : PropTypes.object.isRequired,
    scrollHandler : PropTypes.func.isRequired,
}