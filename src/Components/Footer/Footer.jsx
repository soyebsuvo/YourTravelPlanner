import { MdOutlineMail } from "react-icons/md";
import logo from "../../assets/main-logo-blackk.png"
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
const Footer = () => {
    return (
        <div className="bg-[#F8F9FA] text-gray-700">
            <footer className="footer items-end p-10 max-w-7xl mx-auto">
                <nav className="">
                    <div className="flex justify-start items-centerxs">
                        <Link to="/"><img className="w-48" src={logo} alt="WanderGenie Logo" /></Link>
                    </div>
                    <Link to="/how-it-works" className="link no-underline hover:text-blue-600 hover:font-semibold max-sm:text-xs duration-200 h-[23px]">About us</Link>
                    <Link to="/how-it-works" className="link no-underline hover:text-blue-600 hover:font-semibold max-sm:text-xs duration-200 h-[23px]">How it works</Link>
                    <Link to="/frequently-asked-questions" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 max-sm:text-xs h-[23px]">FAQs</Link>
                    <a className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 max-sm:text-xs h-[23px]">Testimonials</a>
                </nav>
                <nav>
                    <h6 className="footer-title h-[23px]">Connect With Us</h6>
                    <a href="mailto:info@wandergeniellm.com" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 max-sm:text-xs"><MdOutlineMail className="inline mb-[2px] text-[20px] mr-1"/> info@wandergeniellm.com</a>
                    <a href="tel:+919356853153" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 max-sm:text-xs"><IoCallOutline className="inline mb-[2px] text-[20px] mr-1"/>+91 9699481138</a>
                    {/* <a href="https://wa.me/+919356853153" target="_blank" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200"><FaWhatsapp className="inline mb-[2px] text-[20px] mr-1"/> +91 93568 53153</a> */}
                    <a href="http://api.whatsapp.com/send/?phone=919356853153&text=Hey+WanderGenie%2C+Help+me+plan+my+next+travel+adventure&type=phone_number&app_absent=0" target="_blank" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 max-sm:text-xs"><FaWhatsapp className="inline mb-[2px] text-[20px] mr-1"/>+91 9699481138</a>
                    <a href="mailto:support@wandergeniellm.com" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200"><MdOutlineMail className="inline mb-[2px] text-[20px] max-sm:text-xs mr-1"/> support@wandergeniellm.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title h-[23px]">Social</h6>
                    <a href="https://www.instagram.com/wandergeniellm" target="_blank" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 max-sm:text-xs"><FaInstagram className="inline mb-[2px] text-[20px] mr-1"/> Instagram</a>
                    <a href="https://www.facebook.com/profile.php?id=61561816175519" target="_blank" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 max-sm:text-xs"><FiFacebook className="inline mb-[2px] text-[20px] pr-[2px] mr-1"/> Facebook</a>
                    <a href="https://www.linkedin.com/company/wandergeniellm" target="_blank" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 max-sm:text-xs"><FiLinkedin className="inline mb-[2px] text-[20px] mr-1"/> Linkedin</a>
                    <a href="https://www.youtube.com/@WanderGenie" target="_blank" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 max-sm:text-xs"><FiYoutube className="inline mb-[2px] text-[20px] mr-1"/> Youtube</a>
                </nav>
                <nav>
                    <h6 className="footer-title h-[23px]">Policies</h6>
                    <Link to="/terms-of-use" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 h-[23px] max-sm:text-xs">Terms of use</Link>
                    <Link to="/privacy-policy" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 h-[23px] max-sm:text-xs">Privacy Policy</Link>
                    <Link to="/cookies-policy" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 h-[23px] max-sm:text-xs">Cookie Policy</Link>
                    <Link to="/cancellations" className="link no-underline hover:text-blue-600 hover:font-semibold duration-200 h-[23px] max-sm:text-xs">Cancellations</Link>
                </nav>
            </footer>
            <div className="w-full flex flex-col items-center justify-center py-4">
                <h6 className="footer-title h-[23px] max-sm:text-xs">WanderGenie LLM</h6>
                <Text className="text-center max-sm:text-xs">
                    S. No. 63, Plot No. 44, Narayan Annaji Shinde Road, 
                    Nanak Society, Salunkhe Vihar Society, 
                    Kondhwa, Pune, Maharashtra 411048
                </Text>
            </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content max-sm:text-xs">
                <aside>
                    <p>Copyright &copy; 2024 - All right reserved by wandergeniellm.com</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;