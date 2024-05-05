import img from '../../assets/duration_option_1_0c9e8e2380.avif'
import img2 from '../../assets/duration_option_2_66500bfd72.avif'
import img3 from '../../assets/duration_option_3_ed7980d091.avif'
import img4 from '../../assets/duration_option_4_d91110b9e1.avif'
const Duration = () => {
    return (
        <div className="max-w-7xl mx-auto px-2 md:px-16 py-8">
            <div>
                <h2 className='text-2xl font-bold text-center'>What&apos;s the duration of your holiday?</h2>
            </div>
            <div className="flex justify-center items-center gap-6 py-4">
                <div className="card bg-base-100 shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">6-9 days</h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">10-12 days</h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">13-15 days</h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">15-20 days</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Duration;