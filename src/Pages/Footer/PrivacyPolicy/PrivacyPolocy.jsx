import { AccordianQuestion } from "@/Components/accordianQuestion/AccordianQuestion";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

const ACCORDIAN_QUESTIONS = [
    {
        label: 'Information We Collect',
        options : [
            "Personal Information: We collect information you provide to us, such as your name, email address, phone number, and payment information.",
            "Usage Information: We collect information about your interactions with our Services, including IP address, browser type, and usage data.",
            "Cookies and Tracking Technologies: We use cookies and similar technologies to collect information about your use of our Services."
        ],
    },
    {
        label: 'How We Use Your Information',
        options: [
            "To Provide Services: We use your personal information to provide and improve our Services, process transactions, and communicate with you.",
            "For Marketing: With your consent, we may use your information to send you promotional materials and updates about our Services.",
            "For Research and Development: We use usage information to understand how our Services are used and to improve them."
        ]
    },
    {
        label: 'Sharing Your Information',
        options: [
            "With Service Providers: We may share your information with third-party service providers who help us operate our Services.",
            "For Legal Reasons: We may disclose your information if required by law or if we believe it is necessary to protect our rights or the safety of others.",
            "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner."
        ]
    },
    {
        label: 'Your Rights and Choices',
        options: [
            "Access and Correction: You have the right to access and correct your personal information.",
            "Opt-Out: You can opt out of receiving marketing communications from us at any time.",
            "Data Deletion: You can request the deletion of your personal information, subject to certain legal obligations."
        ]
    },
    {
        label: 'Data Security',
        options: [
            "We implement reasonable security measures to protect your personal information from unauthorized access and use. However, no security system is impenetrable, and we cannot guarantee the absolute security of your data."
        ]
    },
    {
        label: 'International Transfers',
        options: [
            "Your personal information may be transferred to and processed in countries other than your own. We ensure that appropriate safeguards are in place to protect your information."
        ]
    },
    {
        label: 'Changes to the Privacy Policy',
        options: [
            "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on our website. Your continued use of the Services after the changes have been posted constitutes your acceptance of the new policy."
        ]
    },
    {
        label: 'Contact Us',
        options: [
            "If you have any questions about this Privacy Policy, please contact us at support@wandergeniellm.com"
        ]
    },
]

const PrivacyPolicy = () => {
    
    return (
        <div className='bg-theme-base pt-20'>
            <Navbar className="bg-theme-header" />
            <div className='max-w-6xl mx-auto md:px-16 my-4 pb-10 rounded-2xl border border-theme-header'>
                <div>
                    <h2 className='text-3xl font-semibold my-8 text-black'>Privacy Policy</h2>
                    <div className='space-y-8 mb-8'>
                        <div className=''>
                            <h4 className='text-xl font-semibold my-2 text-black'>Introduction</h4>
                            <p className='text-black'>WanderGenie LLM is your ultimate travel companion, transforming the way you explore the world. Our mission is to make travel planning seamless, personalized, and exciting. Whether you&apos;re a seasoned traveler or embarking on your first adventure, WanderGenie LLM is designed to cater to all your travel needs, ensuring you have the most enriching and hassle-free experience possible.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto p-6 text-gray-600 border border-theme-header rounded-xl">
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

export default PrivacyPolicy;
