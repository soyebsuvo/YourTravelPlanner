import img from '../../assets/th (1).jpeg';
import img2 from '../../assets/th (2).jpeg';
import img3 from '../../assets/f4e77360fb1b4f516dfc0b5fd92d9075.jpg';
import img4 from '../../assets/th (3).jpeg';
import PropTypes from 'prop-types';
const Special = ({value , setValue ,  specialScroll}) => {
    return (
        <div ref={specialScroll} className="max-w-7xl mx-auto px-2 md:px-16 py-8">
            <div>
                <h2 className='text-2xl font-bold text-center my-3'>Any particular needs?</h2>
            </div>
            <div className="flex justify-center items-center gap-6 py-4">
                <div onClick={() => setValue("Medical Needs")} className={value === "Medical Needs" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f] h-[360px]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f] h-[360px]`}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Medical Needs</h2>
                    </div>
                </div>
                <div onClick={() => setValue("Language Preferences")} className={value === "Language Preferences" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f] h-[360px]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f] h-[360px]`}>
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Language Preferences</h2>
                    </div>
                </div>
                <div onClick={() => setValue("Cultural Considerations")} className={value === "Cultural Considerations" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f] h-[360px]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f] h-[360px]`}>
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cultural Considerations</h2>
                    </div>
                </div>
                <div onClick={() => setValue("Transportation Assistance")} className={value === "Transportation Assistance" ? `card shadow-xl border duration-150 border-[#00B277] bg-[#00b2771f] h-[360px]` : `card shadow-xl border duration-150 hover:border hover:-mt-4 hover:border-[#00B277] hover:bg-[#00b2771f] h-[360px]`}>
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Transportation Assistance</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Special;

Special.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    specialScroll : PropTypes.object.isRequired
}