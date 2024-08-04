import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';


const FAQs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Navbar />
            <div className="h-20 bg-blue-600"></div>
            <div className='max-w-6xl mx-auto md:px-16 my-4 mb-20 border-4 rounded-2xl'>
                <div>
                    <h2 className='text-3xl font-semibold my-8 text-gray-500'>WanderGenie LLM - FAQs</h2>
                    <div className='space-y-8 mb-8'>
                        <div className=''>
                            <p className='text-gray-500'>Welcome to the WanderGenie LLM FAQ page! Here you&apos;ll find answers to the most common questions about our travel package bidding platform. If you have any other queries, feel free to contact us directly.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto p-6 text-gray-600">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="border rounded-lg p-4">
                            <h2 className="text-xl font-bold mb-4">General Questions</h2>
                            <IncludedSection />
                        </div>
                        {/* <div className="border rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4">Excluded</h2>
                    <ExcludedSection />
                </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const IncludedSection = () => {
    return (
        <>
            <Section title="1. What is WanderGenie LLM?">
                <BulletPoint text="WanderGenie LLM is a travel package bidding platform that allows travelers to plan their trips and submit them as bids on an auction board. Travel agencies then compete to offer the best packages, ensuring travelers get the best deals." /><BulletPoint text="Personalize Your Profile: Provide details about your travel preferences, interests, budget, and travel history. This helps WanderGenie LLM tailor recommendations just for you." />
            </Section>

            <Section title="2. How does WanderGenie LLM work?">
                <BulletPoint text="Plan Your Trip: Travelers enter their trip details, including destination, dates, and preferences." />
                <BulletPoint text="Submit a Bid: The trip plan is posted as a bid on our auction board." />
                <BulletPoint text="Receive Offers: Travel agencies review the bid and submit their best offers." />
                <BulletPoint text="Choose the Best Deal: Travelers review the offers and select the one that best meets their needs and budget." />
            </Section>

            <Section title="3. Who can use WanderGenie LLM?">
                <BulletPoint text="WanderGenie LLM is for anyone looking to plan a trip and get the best possible deal from various travel agencies. Whether you're a solo traveler, a family planning a vacation, or a group organizing a trip, WanderGenie LLM can help you find the best offers." />
            </Section>

            <Section title="4. How is WanderGenie LLM different from other platforms?">
                <BulletPoint text="WanderGenie LLM stands out from other platforms by utilizing advanced AI technology to enhance the travel planning and bidding process. Our platform leverages machine learning models to provide personalized trip recommendations, optimize bid submissions for better matching with travel agencies, and streamline communication between travelers and agencies. This results in a more efficient, tailored, and user-friendly experience compared to traditional travel booking platforms." />
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

export default FAQs;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string
}
BulletPoint.propTypes = {
    text: PropTypes.string
}