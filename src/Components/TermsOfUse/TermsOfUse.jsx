import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';


const TermsOfUse = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Navbar />
            <div className="h-20 bg-blue-600"></div>
            <div className='max-w-6xl mx-auto md:px-16 my-4 mb-20'>
                <div>
                    <h2 className='text-3xl font-semibold my-8 text-gray-500'>Terms of Use</h2>
                    <div className='space-y-8 mb-8'>
                        <div className=''>
                            <h4 className='text-xl font-semibold my-2 text-gray-500'>Introduction</h4>
                            <p className='text-gray-500'>Welcome to WanderGenie LLM! These terms of use (&quot;Terms&quot;) govern your use of our website and services (&quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto p-6 text-gray-600">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="border rounded-lg p-4">
                            {/* <h2 className="text-xl font-bold mb-4">General Questions</h2> */}
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
            <Section title="1. Acceptance of Terms">
                <BulletPoint text="By accessing and using WanderGenie LLM, you accept and agree to be bound by these Terms and any amendments we may make. If you do not agree with these Terms, please do not use our Services." />
            </Section>

            <Section title="2. Description of Services">
                <BulletPoint text="WanderGenie LLM provides travel planning services, including personalized itineraries, booking assistance, and a travel bidding platform. We aim to enhance your travel experience by offering tailored recommendations and support." />
            </Section>

            <Section title="3. User Responsibilities">
                <BulletPoint text="Eligibility: You must be at least 18 years old to use our Services." />
                <BulletPoint text="Account Security: You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account." />
                <BulletPoint text="Prohibited Conduct: You agree not to use our Services for any unlawful purpose or in a way that could harm WanderGenie LLM or its users." />
            </Section>

            <Section title="4. Content">
                <BulletPoint text="User Content: You retain ownership of any content you submit to WanderGenie LLM but grant us a license to use, display, and distribute such content." />
                <BulletPoint text="Prohibited Content: You may not post content that is offensive, illegal, or infringes on the rights of others." />
            </Section>
            <Section title="5. Intellectual Property">
                <BulletPoint text="All content and materials on WanderGenie LLM, including text, graphics, logos, and software, are the property of WanderGenie LLM or its licensors and are protected by copyright and other intellectual property laws." />
            </Section>
            <Section title="6. Disclaimers and Limitation of Liability">
                <BulletPoint text="Disclaimers: WanderGenie LLM provides its Services on an &quot;as is&quot; and &quot;as available&quot; basis. We do not warrant that our Services will be uninterrupted or error-free." />
                <BulletPoint text="Limitation of Liability: WanderGenie LLM will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our Services." />
            </Section>
            <Section title="7. Changes to the Terms">
                <BulletPoint text="We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our website. Your continued use of the Services after the changes have been posted constitutes your acceptance of the new Terms." />
            </Section>
            <Section title="8. Governing Law">
                <BulletPoint text="These Terms are governed by and construed in accordance with the laws of the jurisdiction where WanderGenie LLM is based, without regard to its conflict of law principles." />
            </Section>
            <Section title="9. Contact Us">
                <BulletPoint text="If you have any questions about these Terms, please contact us at support@wandergeniellm.com." />
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

export default TermsOfUse;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string
}
BulletPoint.propTypes = {
    text: PropTypes.string
}