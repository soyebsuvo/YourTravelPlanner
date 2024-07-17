import { MdOutlineMail } from "react-icons/md";
import logo from "../../assets/main-logo-black.png"
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className=" bg-base-200 text-gray-700">
            <footer className="footer items-end p-10 max-w-7xl mx-auto">
                <nav className="">
                    <div className="flex justify-start items-centerxs">
                        <img className="w-48" src={logo} alt="WanderGenie Logo" />
                    </div>
                    <Link to="http://localhost:5173/how-it-works" className="link link-hover h-[23px]">About us</Link>
                    <Link to="/how-it-works" className="link link-hover h-[23px]">How it works</Link>
                    <Link to="/frequently-asked-questions" className="link link-hover h-[23px]">FAQs</Link>
                    <a className="link link-hover h-[23px]">Testimonials</a>
                </nav>
                <nav>
                    <h6 className="footer-title h-[23px]">Connect With Us</h6>
                    <a href="mailto:info@wandergeniellm.com" className="link link-hover"><MdOutlineMail className="inline mb-[2px] text-[20px] mr-1"/> info@wandergeniellm.com</a>
                    <a href="tel:+919356853153" className="link link-hover"><IoCallOutline className="inline mb-[2px] text-[20px] mr-1"/> +91 93568 53153</a>
                    <a href="tel:+919356853153" className="link link-hover"><FaWhatsapp className="inline mb-[2px] text-[20px] mr-1"/> +91 93568 53153</a>
                    <a href="mailto:support@wandergeniellm.com" className="link link-hover"><MdOutlineMail className="inline mb-[2px] text-[20px] mr-1"/> support@wandergeniellm.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title h-[23px]">Social</h6>
                    <a href="https://www.instagram.com/wandergeniellm" target="_blank" className="link link-hover"><FaInstagram className="inline mb-[2px] text-[20px] mr-1"/> Instagram</a>
                    <a href="https://www.facebook.com/profile.php?id=61561816175519" target="_blank" className="link link-hover"><FiFacebook className="inline mb-[2px] text-[20px] pr-[2px] mr-1"/> Facebook</a>
                    <a className="link link-hover"><FiLinkedin className="inline mb-[2px] text-[20px] mr-1"/> Linkedin</a>
                    <a href="https://www.youtube.com/@WanderGenie" target="_blank" className="link link-hover"><FiYoutube className="inline mb-[2px] text-[20px] mr-1"/> Youtube</a>
                </nav>
                <nav>
                    <h6 className="footer-title h-[23px]">Policies</h6>
                    <Link to="/terms-of-use" className="link link-hover h-[23px]">Terms of use</Link>
                    <a href="/about-wandergenie" className="link link-hover h-[23px]">Privacy Policy</a>
                    <a className="link link-hover h-[23px]">Cookie Policy</a>
                    <a className="link link-hover h-[23px]">Cancellations</a>
                </nav>
                
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright &copy; 2024 - All right reserved by wandergeniellm.com</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;