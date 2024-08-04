import PropTypes from 'prop-types';
import { CiChat1 } from 'react-icons/ci';
import { GiWavyItinerary } from "react-icons/gi";
import { IoIosOptions } from 'react-icons/io';
import { MdOutlineTour } from 'react-icons/md';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';


const About = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            <Navbar />
            <div className="h-20 bg-blue-600"></div>
            <div className='max-w-6xl mx-auto md:px-16 my-4 border-4 rounded-2xl'>
                <div>
                    <h2 className='text-3xl font-semibold my-8 text-gray-500'>About WanderGenie LLM</h2>
                    <div className='space-y-8 mb-8'>
                        <div className=''>
                            <h4 className='text-xl font-semibold my-2 text-gray-500'>Introduction</h4>
                            <p className='text-gray-500'>WanderGenie LLM is your ultimate travel companion, transforming the way you explore the world. Our mission is to make travel planning seamless, personalized, and exciting. Whether you&apos;re a seasoned traveler or embarking on your first adventure, WanderGenie LLM is designed to cater to all your travel needs, ensuring you have the most enriching and hassle-free experience possible.</p>
                        </div>
                        <div className=''>
                            <h4 className='text-xl font-semibold my-2 text-gray-500'>Our Vision</h4>
                            <p className='text-gray-500'>We envision a world where travel is not just a dream but an accessible reality for everyone. By leveraging cutting-edge technology and a deep understanding of travel dynamics, WanderGenie LLM aims to eliminate the stress of planning and allow you to focus on the joy of discovery. Our goal is to be the go-to platform for travel enthusiasts seeking tailored experiences and unforgettable memories.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto p-6 text-gray-600">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="border rounded-lg p-4">
                            <h2 className="text-xl font-bold mb-4">What we offer</h2>
                            <IncludedSection />
                        </div>
                        {/* <div className="border rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4">Excluded</h2>
                    <ExcludedSection />
                </div> */}
                    </div>
                </div>
                <div className='my-8 text-gray-500'>
                    <h3 className='text-xl font-semibold my-6'>Why Choose WanderGenie LLM?</h3>
                    <ul className='list-disc ml-16'>
                        <li>Expertise and Experience: Our team comprises seasoned travelers and industry experts who understand the nuances of travel planning.</li>
                        <li>Innovative Technology: We harness the power of AI and data analytics to provide you with the most relevant and efficient travel solutions.</li>
                        <li>Customer-Centric Approach: Your satisfaction is our priority. We continuously refine our services based on your feedback to ensure an exceptional travel experience.</li>
                    </ul>
                </div>
                <div className='mb-8'>
                    <h4 className='text-xl font-semibold my-2 text-gray-500'>Join the WanderGenie LLM Community</h4>
                    <p className='text-gray-500'>At WanderGenie LLM, we believe in the transformative power of travel. Join our community of explorers and let us help you discover the world in a way you&apos;ve never experienced before. Sign up today and embark on your next adventure with confidence and ease.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const IncludedSection = () => {
    return (
        <>
            <Section title="Personalized Travel Itineraries" icon={<GiWavyItinerary className='inline mr-1' />}>
                <BulletPoint text="Tailored Recommendations: Based on your preferences, WanderGenie LLM crafts itineraries that reflect your unique interests, whether it's cultural immersion, adventure, relaxation, or culinary exploration." />
                <BulletPoint text="Real-Time Adjustments: Plans change, and so do our itineraries. Our platform adapts to real-time changes, ensuring your travel plans stay relevant and exciting." />
            </Section>

            <Section title="Comprehensive Travel Planning" icon={<MdOutlineTour className='inline mr-1 mb-1' />}>
                <BulletPoint text="End-to-End Services: From booking flights and accommodations to arranging local transportation and activities, WanderGenie LLM covers every aspect of your trip." />
                <BulletPoint text="User-Friendly Interface: Our intuitive platform makes it easy to plan, book, and manage all your travel details in one place." />
            </Section>

            <Section title="Travel Bidding Platform" icon={<IoIosOptions className='inline mr-1 mb-1' />}>
                <BulletPoint text="Unique Bidding System: Travelers can submit their planned trips as bids on our auction board, allowing travel agencies to compete and offer the best deals." />
                <BulletPoint text="Cost-Effective Travel: By encouraging competitive bidding, WanderGenie LLM ensures you get the most value for your money." />
            </Section>

            <Section title="AI-Powered Assistance" icon={<CiChat1 className='inline mr-1 mb-1' />}>
                <BulletPoint text="Smart Recommendations: Our AI-driven system learns from your preferences and past travels to offer highly personalized suggestions." />
                <BulletPoint text="24/7 Support: WanderGenie LLM's AI assistant is always available to answer your queries, provide travel tips, and offer real-time support during your trip." />
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

export default About;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string
}
BulletPoint.propTypes = {
    text: PropTypes.string
}