import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AccordianQuestion } from '../accordianQuestion/AccordianQuestion';



const ACCORDIAN_QUESTIONS = [
    {
        label: '1. Acceptance of Terms',
        options : [
            "By accessing and using WanderGenie LLM, you accept and agree to be bound by these Terms and any amendments we may make. If you do not agree with these Terms, please do not use our Services."
        ],
    },
    {
        label: '2. Description of Services',
        options : [
            "WanderGenie LLM provides travel planning services, including personalized itineraries, booking assistance, and a travel bidding platform. We aim to enhance your travel experience by offering tailored recommendations and support."
        ],
    },
    {
        label: '3. User Responsibilities',
        options : [
            "Eligibility: You must be at least 18 years old to use our Services.",
            "Account Security: You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
            "Prohibited Conduct: You agree not to use our Services for any unlawful purpose or in a way that could harm WanderGenie LLM or its users."
        ],
    },
    {
        label: '4. Content',
        options : [
            "User Content: You retain ownership of any content you submit to WanderGenie LLM but grant us a license to use, display, and distribute such content.",
            "Prohibited Content: You may not post content that is offensive, illegal, or infringes on the rights of others."
        ],
    },
    {
        label: '5. Intellectual Property',
        options : [
            "All content and materials on WanderGenie LLM, including text, graphics, logos, and software, are the property of WanderGenie LLM or its licensors and are protected by copyright and other intellectual property laws."
        ],
    },
    {
        label: '6. Disclaimers and Limitation of Liability',
        options : [
            "Disclaimers: WanderGenie LLM provides its Services on an &quot;as is&quot; and &quot;as available&quot; basis. We do not warrant that our Services will be uninterrupted or error-free.",
            "Limitation of Liability: WanderGenie LLM will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our Services."
        ],
    },
    {
        label: '7. Changes to the Terms',
        options : [
            "We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our website. Your continued use of the Services after the changes have been posted constitutes your acceptance of the new Terms."
        ],
    },
    {
        label: '8. Governing Law',
        options : [
            "These Terms are governed by and construed in accordance with the laws of the jurisdiction where WanderGenie LLM is based, without regard to its conflict of law principles."
        ],
    },
    {
        label: '9. Contact Us',
        options : [
            "If you have any questions about these Terms, please contact us at support@wandergeniellm.com."
        ],
    },
]

const TermsOfUse = () => {
    return (
        <div className='bg-theme-base pt-20'>
            <Navbar className='bg-theme-header' />
            <div className='max-w-6xl mx-auto md:px-16 my-4 pb-10 mb-20 rounded-2xl border border-theme-header bg-theme-secondary'>
                <div>
                    <h2 className='text-3xl font-semibold my-8 text-black'>Terms of Use</h2>
                    <div className='space-y-8 mb-8'>
                        <div className=''>
                            <h4 className='text-xl font-semibold my-2 text-black'>Introduction</h4>
                            <p className='text-black'>Welcome to WanderGenie LLM! These terms of use (&quot;Terms&quot;) govern your use of our website and services (&quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto p-6 text-gray-600 rounded-xl border border-theme-header bg-theme-tertiary">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="border rounded-lg p-4">
                            <AccordianQuestion options={ACCORDIAN_QUESTIONS} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
};


export default TermsOfUse;