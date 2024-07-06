import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';


const HowItWorks = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            <Navbar />
            <div className="h-20 bg-blue-600"></div>
            <div className='max-w-6xl mx-auto md:px-16 my-4 mb-20'>
                <div>
                    <h2 className='text-3xl font-semibold my-8 text-gray-500'>How WanderGenie LLM Works</h2>
                    <div className='space-y-8 mb-8'>
                        <div className=''>
                            <h4 className='text-xl font-semibold my-2 text-gray-500'>Introduction</h4>
                            <p className='text-gray-500'>Planning a trip can often be overwhelming, but with WanderGenie LLM, it’s a breeze. Our platform simplifies the entire process, ensuring you spend more time enjoying your travels and less time stressing over the details. Here’s a step-by-step guide on how WanderGenie LLM works to make your travel dreams come true.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto p-6 text-gray-600">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="border rounded-lg p-4">
                            <h2 className="text-xl font-bold mb-4">Work Flow</h2>
                            <IncludedSection />
                        </div>
                        {/* <div className="border rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4">Excluded</h2>
                    <ExcludedSection />
                </div> */}
                    </div>
                </div>
                <div className='mb-8'>
                    <h4 className='text-xl font-semibold my-2 text-gray-500'>Conclusion</h4>
                    <p className='text-gray-500'>WanderGenie LLM is designed to make your travel planning effortless and enjoyable. From personalized itineraries and seamless bookings to competitive bidding and AI-powered assistance, every feature is crafted to enhance your travel experience. Start planning your next adventure with WanderGenie LLM today and discover a new way to travel smartly and stress-free.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const IncludedSection = () => {
    return (
        <>
            <Section title="Step 1: Sign Up and Set Up Your Profile">
                <BulletPoint text="Easy Registration: Create an account using your email or social media profiles." />
                <BulletPoint text="Personalize Your Profile: Provide details about your travel preferences, interests, budget, and travel history. This helps WanderGenie LLM tailor recommendations just for you." />
            </Section>

            <Section title="Step 2: Define Your Trip">
                <BulletPoint text="Trip Preferences: Specify your destination, travel dates, preferred activities, and any special requirements." />
                <BulletPoint text="Budget Management: Set your budget to get recommendations that align with your financial plan." />
            </Section>

            <Section title="Step 3: Get Personalized Itineraries">
                <BulletPoint text="AI-Powered Suggestions: Based on your inputs, WanderGenie LLM generates personalized itineraries that cater to your interests and preferences." />
                <BulletPoint text="Real-Time Updates: Our system continuously updates your itinerary with the latest information and options, ensuring you always have the best recommendations at your fingertips." />
            </Section>

            <Section title="Step 4: Book Your Trip">
                <BulletPoint text="Seamless Booking Process: WanderGenie LLM integrates with various booking platforms, allowing you to book flights, hotels, activities, and transportation directly through our platform." />
                <BulletPoint text="Secure Payments: We ensure your transactions are safe and secure, providing multiple payment options for your convenience." />
            </Section>
            <Section title="Step 5: Use the Travel Bidding Platform">
                <BulletPoint text="Submit Your Bid: Create a detailed plan of your desired trip and submit it as a bid on our auction board." />
                <BulletPoint text="Receive Offers: Travel agencies review your bid and compete to offer you the best package deals." />
                <BulletPoint text="Choose the Best Offer: Select the offer that best suits your needs and budget, ensuring you get the most value for your trip." />
            </Section>
            <Section title="Step 6: Enjoy AI-Powered Assistance">
                <BulletPoint text="Smart Recommendations: Throughout your trip, WanderGenie LLM&apos;s AI assistant offers real-time suggestions for restaurants, attractions, and activities based on your location and preferences." />
                <BulletPoint text="24/7 Support: Need help or have questions during your trip? Our AI assistant is available around the clock to provide instant support." />
            </Section>
            <Section title="Step 7: Share Your Experience">
                <BulletPoint text="Travel Diary: Keep a digital diary of your trip within the WanderGenie LLM app, documenting your experiences and memories." />
                <BulletPoint text="Community Reviews: Share reviews and tips with other travelers in the WanderGenie LLM community, helping them benefit from your insights." />
            </Section>
            {/* ---- */}

        </>
    );
};

const Section = ({ title, children, icon }) => {
    return (

        <div className="mb-4">
            <div className="collapse collapse-plus border-2">
                <input type="radio" name="my-accordion-3" />
                <h3 className="font-semibold collapse-title">{icon}{title}</h3>
                <div className="collapse-content">
                    <ul className="list-disc pl-5">{children}</ul>
                </div>
            </div>
        </div>
    );
};

const BulletPoint = ({ text }) => {
    return <li className="mb-1">{text}</li>;

};

export default HowItWorks;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string
}
BulletPoint.propTypes = {
    text: PropTypes.string
}