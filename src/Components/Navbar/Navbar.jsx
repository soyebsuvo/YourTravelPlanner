import { Link, NavLink } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import logo from "../../assets/pickyourtrail-logo-white.png"
import "./navbar.css";
const Navbar = () => {
    const links = <>
        <NavLink to="/season"><a>Best of Seasion</a></NavLink>
        <NavLink to="/international"><a>International Holidays</a></NavLink>
        <NavLink to="/Honeymoon"><a>Honeymoon Gateways</a></NavLink>
        <NavLink to="/exclusive"><a>Exclusive Packages</a></NavLink>
        <li><a><BsThreeDots /></a></li>
        <li><a><TbWorld /></a></li>
    </>
    return (
        <div className="absolute top-0 right-0 left-0 bottom-0">
            <nav className="max-w-7xl mx-auto px-2 md:px-16 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <div className="flex justify-start items-center">
                            <Link to="/"><img className="w-48" src={logo} alt="Logo" /></Link>
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-4 flex-1">
                        <div className=" hidden md:flex">
                            <ul className="menu menu-horizontal px-1 text-white flex justify-center items-center gap-5">
                                {links}
                            </ul>
                        </div>
                        <div className="">
                            <a className="px-4 py-1 rounded border border-white font-semibold cursor-pointer text-white">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;