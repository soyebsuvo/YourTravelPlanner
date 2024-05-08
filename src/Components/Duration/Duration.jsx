import PropTypes from 'prop-types';
import img from '../../assets/duration_option_1_0c9e8e2380.jpeg';
import img2 from '../../assets/duration_option_2_66500bfd72.jpeg';
import img3 from '../../assets/duration_option_3_ed7980d091.jpeg';
import img4 from '../../assets/duration_option_4_d91110b9e1.jpeg';
const Duration = ({ value, setValue , scrollHandler , membersScroll}) => {
    return (
        <div className="max-w-7xl mx-auto px-2 md:px-16 py-8">
            <div>
                <h2 className='text-2xl font-bold text-center my-3'>What is the length of your holiday?</h2>
            </div>
            <div className="flex justify-center items-center gap-6 py-4">
                <div onClick={() => {setValue("6-9 days"); scrollHandler(membersScroll)}} className={value === "6-9 days" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">6-9 days</h2>
                    </div>
                </div>
                <div onClick={() => setValue("10-12 days")} className={value === "10-12 days" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">10-12 days</h2>
                    </div>
                </div>
                <div onClick={() => setValue("13-15 days")} className={value === "13-15 days" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">13-15 days</h2>
                    </div>
                </div>
                <div onClick={() => setValue("15-20 days")} className={value === "15-20 days" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">15+ days</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Duration;

Duration.propTypes = {
    value : PropTypes.string.isRequired,
    setValue : PropTypes.func.isRequired,
    scrollHandler : PropTypes.func.isRequired,
    membersScroll : PropTypes.object.isRequired
}