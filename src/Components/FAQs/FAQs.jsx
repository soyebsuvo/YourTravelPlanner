import { Heading } from '@chakra-ui/react';
import { AccordianQuestion } from '../accordianQuestion/AccordianQuestion';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const ACCORDIAN_QUESTIONS = [
    {
        label: '1. What is WanderGenie LLM?',
        options : [
            "WanderGenie LLM is a travel package bidding platform that allows travelers to plan their trips and submit them as bids on an auction board. Travel agencies then compete to offer the best packages, ensuring travelers get the best deals."
        ],
    },
    {
        label: '2. How does WanderGenie LLM work?',
        options : [
            "Plan Your Trip: Travelers enter their trip details, including destination, dates, and preferences.",
            "Submit a Bid: The trip plan is posted as a bid on our auction board.",
            "Receive Offers: Travel agencies review the bid and submit their best offers.",
            "Choose the Best Deal: Travelers review the offers and select the one that best meets their needs and budget.",
        ],
    },
    {
        label: '3. Who can use WanderGenie LLM?',
        options : [
            "WanderGenie LLM is for anyone looking to plan a trip and get the best possible deal from various travel agencies. Whether you're a solo traveler, a family planning a vacation, or a group organizing a trip, WanderGenie LLM can help you find the best offers."
        ],
    },
    {
        label: '4. How is WanderGenie LLM different from other platforms?',
        options : [
            "WanderGenie LLM stands out from other platforms by utilizing advanced AI technology to enhance the travel planning and bidding process. Our platform leverages machine learning models to provide personalized trip recommendations, optimize bid submissions for better matching with travel agencies, and streamline communication between travelers and agencies. This results in a more efficient, tailored, and user-friendly experience compared to traditional travel booking platforms."
        ],
    },
]

export default function FAQs ()
{
    return (
        <div className='bg-theme-base pt-20'>
            <Navbar className='bg-theme-header' />
            <div className='max-w-6xl mx-auto md:px-16 my-4 mb-20 pb-10 border border-theme-header rounded-2xl bg-theme-secondary'>
                <div>
                    <h2 className='text-3xl font-semibold my-8 text-black'>WanderGenie LLM - FAQs</h2>
                    <div className='space-y-8 mb-8'>
                        <div className=''>
                            <p className='text-black'>Welcome to the WanderGenie LLM FAQ page! Here you&apos;ll find answers to the most common questions about our travel package bidding platform. If you have any other queries, feel free to contact us directly.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto p-6 text-gray-600 border border-theme-header rounded-xl bg-theme-tertiary">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="border rounded-lg p-4">
                            <Heading className="text-xl font-bold mb-4">General Questions</Heading>
                            <AccordianQuestion options={ACCORDIAN_QUESTIONS} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
