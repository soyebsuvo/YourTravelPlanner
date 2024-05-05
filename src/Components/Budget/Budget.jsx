import img from '../../assets/normal.jpg'
import img2 from '../../assets/platinum.png'
import img3 from '../../assets/gold.jpg'
import img4 from '../../assets/diamond.jpg'
import PropTypes from 'prop-types';
const Budget = ({value , setValue}) => {
    return (
        <div className="max-w-7xl mx-auto px-2 md:px-16 py-8">
            <div>
                <h2 className='text-2xl font-bold text-center'>What is your budget ?</h2>
            </div>
            <div className="flex justify-center items-center gap-6 py-4">
                <div onClick={() => setValue("$100")} className={value === "$100" ? `card bg-base-100 shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card bg-base-100 shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">$100</h2>
                    </div>
                </div>
                <div onClick={() => setValue("$200")} className={value === "$200" ? `card bg-base-100 shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card bg-base-100 shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">$200</h2>
                    </div>
                </div>
                <div onClick={() => setValue("$300")} className={value === "$300" ? `card bg-base-100 shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card bg-base-100 shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">$300</h2>
                    </div>
                </div>
                <div onClick={() => setValue("$400")} className={value === "$400" ? `card bg-base-100 shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f]` : `card bg-base-100 shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">$400</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Budget;

Budget.propTypes = {
    value : PropTypes.string.isRequired,
    setValue : PropTypes.func.isRequired
}