import img from '../../assets/87531574 (1).jpg';
import img2 from '../../assets/wp3104916.jpg';
import img3 from '../../assets/wp8746186.jpg';
import img4 from '../../assets/what-is-a-gluten-free-diet-alt-1440x810.jpg';
import PropTypes from 'prop-types';
const Dietary = ({ value, setValue, dietaryScroll, scrollHandler ,travelPurposeScroll}) => {
    return (
        <div ref={dietaryScroll} className="max-w-7xl mx-auto px-2 md:px-16 py-8">
            <div>
                <h2 className='text-2xl font-bold text-center my-3'> Any specific food requirements?</h2>
            </div>
            <div className="flex justify-center items-center gap-6 py-4">
                <div onClick={() => { setValue("No restrictions"); scrollHandler(travelPurposeScroll) }} className={value === "No restrictions" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">No restrictions</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Vegetarian"); scrollHandler(travelPurposeScroll)}} className={value === "Vegetarian" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Vegetarian</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Vegan"); scrollHandler(travelPurposeScroll)}} className={value === "Vegan" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Vegan</h2>
                    </div>
                </div>
                <div onClick={() => {setValue("Gluten-Free"); scrollHandler(travelPurposeScroll)}} className={value === "Gluten-Free" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Gluten-Free</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dietary;

Dietary.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    dietaryScroll: PropTypes.object.isRequired,
    travelPurposeScroll: PropTypes.object.isRequired,
    scrollHandler: PropTypes.func.isRequired,
}