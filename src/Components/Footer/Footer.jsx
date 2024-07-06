import { MdOutlineMail } from "react-icons/md";
import logo from "../../assets/main-logo-black.png"
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className=" bg-base-200 text-base-content">
            <footer className="footer p-10 max-w-7xl mx-auto">
                <nav>
                    <div className="flex justify-start items-center">
                        <img className="w-48" src={logo} alt="WanderGenie Logo" />
                    </div>
                    <Link to="/about-wandergenie" className="link link-hover">About us</Link>
                    <Link to="/how-it-works" className="link link-hover">How it works</Link>
                    <Link to="/frequently-asked-questions" className="link link-hover">FAQs</Link>
                    <a className="link link-hover">Testimonials</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact With Us</h6>
                    <a href="mailto:info@wandergeniellm.com" className="link link-hover"><MdOutlineMail className="inline mb-[2px] text-[20px] mr-1"/> info@wandergeniellm.com</a>
                    <a href="tel:+919356853153" className="link link-hover"><IoCallOutline className="inline mb-[2px] text-[20px] mr-1"/> +91 93568 53153</a>
                    <a href="tel:+919356853153" className="link link-hover"><FaWhatsapp className="inline mb-[2px] text-[20px] mr-1"/> +91 93568 53153</a>
                    <a href="mailto:support@wandergeniellm.com" className="link link-hover"><MdOutlineMail className="inline mb-[2px] text-[20px] mr-1"/> support@wandergeniellm.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover"><FaInstagram className="inline mb-[2px] text-[20px] mr-1"/> Instagram</a>
                    <a className="link link-hover"><CiFacebook className="inline mb-[2px] text-[20px] mr-1"/> Facebook</a>
                    <a className="link link-hover"><CiLinkedin className="inline mb-[2px] text-[20px] mr-1"/> Linkedin</a>
                    <a className="link link-hover"><FiYoutube className="inline mb-[2px] text-[20px] mr-1"/> Youtube</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Policies</h6>
                    <Link to="/terms-of-use" className="link link-hover">Terms of use</Link>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                    <a className="link link-hover">Cancellations</a>
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