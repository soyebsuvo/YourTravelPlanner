import { AccordianQuestion } from '../accordianQuestion/AccordianQuestion';
import { Heading } from '@chakra-ui/react';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const ACCORDIAN_QUESTIONS = [
    {
        label: 'Step 1: Sign Up and Set Up Your Profile',
        options : [
            "Easy Registration: Create an account using your email or social media profiles.",
            "Personalize Your Profile: Provide details about your travel preferences, interests, budget, and travel history. This helps WanderGenie LLM tailor recommendations just for you."
        ],
    },
    {
        label: 'Step 2: Define Your Trip',
        options : [
            "Trip Preferences: Specify your destination, travel dates, preferred activities, and any special requirements.",
            "Budget Management: Set your budget to get recommendations that align with your financial plan."
        ],
    },
    {
        label: 'Step 3: Get Personalized Itineraries',
        options : [
            "AI-Powered Suggestions: Based on your inputs, WanderGenie LLM generates personalized itineraries that cater to your interests and preferences.",
            "Real-Time Updates: Our system continuously updates your itinerary with the latest information and options, ensuring you always have the best recommendations at your fingertips."
        ],
    },
    {
        label: 'Step 4: Book Your Trip',
        options : [
            "Seamless Booking Process: WanderGenie LLM integrates with various booking platforms, allowing you to book flights, hotels, activities, and transportation directly through our platform.",
            "Secure Payments: We ensure your transactions are safe and secure, providing multiple payment options for your convenience."
        ],
    },
    {
        label: 'Step 5: Use the Travel Bidding Platform',
        options : [
            "Submit Your Bid: Create a detailed plan of your desired trip and submit it as a bid on our auction board.",
            "Receive Offers: Travel agencies review your bid and compete to offer you the best package deals.",
            "Choose the Best Offer: Select the offer that best suits your needs and budget, ensuring you get the most value for your trip."
        ],
    },
    {
        label: 'Step 6: Enjoy AI-Powered Assistance',
        options : [
            "Smart Recommendations: Throughout your trip, WanderGenie LLM&apos;s AI assistant offers real-time suggestions for restaurants, attractions, and activities based on your location and preferences.",
            "24/7 Support: Need help or have questions during your trip? Our AI assistant is available around the clock to provide instant support."
        ],
    },
    {
        label: 'Step 7: Share Your Experience',
        options : [
            "Travel Diary: Keep a digital diary of your trip within the WanderGenie LLM app, documenting your experiences and memories.",
            "Community Reviews: Share reviews and tips with other travelers in the WanderGenie LLM community, helping them benefit from your insights."
        ],
    }
]

const HowItWorks = () => {

    return (
        <div className='bg-theme-base pt-20'>
            <Navbar className='bg-theme-header' />
            <div className='max-w-6xl mx-auto md:px-16 my-4 mb-20 border border-theme-header rounded-2xl bg-theme-secondary'>
                <div>
                    <h2 className='text-3xl font-semibold my-8 text-black font-sans'>How WanderGenie LLM Works</h2>
                    <div className='space-y-8 mb-8'>
                        <div className=''>
                            <h4 className='text-xl font-semibold my-2 text-black'>Introduction</h4>
                            <p className='text-black'>Planning a trip can often be overwhelming, but with WanderGenie LLM, it’s a breeze. Our platform simplifies the entire process, ensuring you spend more time enjoying your travels and less time stressing over the details. Here’s a step-by-step guide on how WanderGenie LLM works to make your travel dreams come true.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto p-6 text-gray-600">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="rounded-xl p-4 bg-theme-tertiary border border-theme-header space-y-4">
                            <Heading className="text-xl font-bold mb-4">Work Flow</Heading>
                            <AccordianQuestion options={ACCORDIAN_QUESTIONS} />
                        </div>
                    </div>
                </div>
                <div className='mb-8'>
                    <h4 className='text-xl font-semibold my-2 text-black'>Conclusion</h4>
                    <p className='text-black'>WanderGenie LLM is designed to make your travel planning effortless and enjoyable. From personalized itineraries and seamless bookings to competitive bidding and AI-powered assistance, every feature is crafted to enhance your travel experience. Start planning your next adventure with WanderGenie LLM today and discover a new way to travel smartly and stress-free.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HowItWorks;