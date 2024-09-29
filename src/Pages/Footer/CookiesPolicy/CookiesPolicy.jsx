import { AccordianQuestion } from "@/Components/accordianQuestion/AccordianQuestion";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

const ACCORDIAN_QUESTIONS = [
    {
        label: 'What Are Cookies?',
        options : [
            "Cookies are small text files that are stored on your device when you visit a website. They help the website remember your actions and preferences over time."
        ],
    },
    {
        label: 'Types of Cookies We Use?',
        options : [
            "Essential Cookies: These cookies are necessary for the website to function and cannot be switched off in our systems.",
            "Performance Cookies: These cookies collect information about how visitors use our website, such as which pages are visited most often.",
            "Functional Cookies: These cookies allow the website to remember choices you make and provide enhanced, personalized features.",
            "Targeting Cookies: These cookies are used to deliver ads more relevant to you and your interests."
        ],
    },
    {
        label: 'How We Use Cookies?',
        options : [
            "To Provide and Improve Our Services: We use cookies to enable core functionality, improve user experience, and analyze site usage.",
            "For Marketing: We use cookies to track your browsing habits and show you relevant advertisements based on your interests."
        ],
    },
    {
        label: '. Managing Cookies?',
        options : [
            "Browser Settings: You can manage your cookie preferences through your web browser settings. You can choose to block or delete cookies, but this may affect your experience on our website.",
            "Opt-Out Tools: Some cookies used for online advertising can be managed through opt-out tools provided by the Digital Advertising Alliance or the Network Advertising Initiative."
        ],
    },
    {
        label: 'Third-Party Cookies?',
        options : [
            "We may allow third-party service providers to place cookies on your device to collect information about your online activities. These providers may use this information to display ads that are relevant to your interests."
        ],
    },
    {
        label: 'Changes to the Cookie Policy?',
        options : [
            "We may update this Cookie Policy from time to time. We will notify you of any changes by posting the updated policy on our website. Your continued use of the Services after the changes have been posted constitutes your acceptance of the new policy."
        ],
    },
    {
        label: 'Contact Us',
        options : [
            "If you have any questions about this Cookie Policy, please contact us at support@wandergeniellm.com."
        ],
    },
]

export default function CookiesPolicy()
{
    return (
        <div className='bg-theme-base pt-20'>
            <Navbar className="bg-theme-header" />
            <div className='max-w-6xl mx-auto md:px-16 my-4 pb-10 rounded-2xl border border-theme-header'>
                <div>
                    <h2 className='text-3xl font-semibold my-8 text-black'>Cookie Policy</h2>
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
    )
}
