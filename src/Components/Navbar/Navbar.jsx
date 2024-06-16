import { Link, NavLink } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../assets/Your_travel__3_-removebg-preview (1).png"
import "./navbar.css";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import { useContext, useState } from "react";
import { MyContext } from "../Context/Context";
const Navbar = () => {
    const [ menu , setMenu ] = useState(false)
    const [isLogin, setIsLogin] = useState(true);
    const { user, logOut } = useContext(MyContext)
    const links = <>
        <NavLink to="/marketplace"><a>Marketplace</a></NavLink>
        <NavLink to="/international"><a>International Holidays</a></NavLink>
        <NavLink to="/Honeymoon"><a>Honeymoon Gateways</a></NavLink>
        <NavLink to="/dashboard"><a>Dashboard</a></NavLink>
        <li><a><BsThreeDots /></a></li>
        <li><a><TbWorld /></a></li>
    </>
    const logout = () => {
        logOut().then(() => {
            console.log("logged out")
        }).catch(error => {
            console.log(error)
        })
    }
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
                            {user ?
                                <div className="">
                                    <div><FaRegUserCircle onClick={() => setMenu(!menu)} className="text-white text-2xl cursor-pointer"/> </div>
                                    <ul className={`${menu ? 'absolute' : 'hidden'} p-2 w-auto shadow duration-300 ease-in transition-all bg-white rounded right-32 top-16`}>
                                        <li className="px-2 py-1 cursor-pointer"><a>Dashboard</a></li>
                                        <li className="px-2 py-1 cursor-pointer" onClick={() => logout()} ><a>Logout</a></li>
                                    </ul>
                                </div>
                                : <button onClick={() => document.getElementById('my_modal_3').showModal()} className="px-4 py-1 rounded border border-white font-semibold cursor-pointer text-white">Login</button>}
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box scrollbar-hide">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    {/* <Login /> */}
                                    {isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;