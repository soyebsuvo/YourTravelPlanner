import { Link, NavLink, useNavigate } from "react-router-dom";
// import { BsThreeDots } from "react-icons/bs";
// import { TbWorld } from "react-icons/tb";s
// import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../assets/Your_travel__3_-removebg-preview (1).png"
import "./navbar.css";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import { useContext, useState } from "react";
import { MyContext } from "../Context/Context";
import { IoIosNotifications } from "react-icons/io";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbMessageChatbot } from "react-icons/tb";
import { MdOutlineAttractions } from "react-icons/md";
import useCheckRole from "../../Hooks/useCheckRole";


const Navbar = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false)
    const [isLogin, setIsLogin] = useState(true);
    const { user, logOut } = useContext(MyContext)
    const [role, , refetch] = useCheckRole();
    const links = <>
        <NavLink to="/"><a>Home</a></NavLink>
        <span className="cursor-pointer" onClick={() => document.getElementById('coming_soon').showModal()}><a>Marketplace</a></span>
        {user ? <NavLink to="/my-trips"><a>My Trips</a></NavLink> : <a onClick={() => document.getElementById('my_modal_3').showModal()} className="cursor-pointer">My Trips</a>}
        {/* <NavLink to="/Honeymoon"><a>Honeymoon Gateways</a></NavLink> */}
        {user ? <NavLink to="/manage-account/profile"><a>Manage Account</a></NavLink> : <a onClick={() => document.getElementById('my_modal_3').showModal()} className="cursor-pointer">Manage Account</a>}
        {/* <li><a><BsThreeDots/></a></li> */}
        {role === "agent" && <NavLink to="/dashboard"><a>Vendor Dashboards</a></NavLink>}
        <li><a><IoIosNotifications className="text-2xl" /></a></li>
    </>
    const logout = () => {
        logOut().then(() => {
            refetch();
            navigate("/")
            console.log("logged out")
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="absolute top-0 right-0 left-0">
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
                                <div className="relative">
                                    <div><img src={user?.photoURL} onClick={() => setMenu(!menu)} className="cursor-pointer w-9 h-9 rounded-full" /> </div>
                                    {/* <div><FaRegUserCircle onClick={() => setMenu(!menu)} className="text-white text-2xl cursor-pointer"/> </div> */}
                                    <ul className={`${menu ? 'absolute' : 'hidden'} p-2 w-40 shadow duration-300 ease-in transition-all bg-white rounded right-6 top-8`}>
                                        <Link to="/manage-account/profile"><li className="px-2 py-1 cursor-pointer"><a>Manage Account</a></li></Link>
                                        <Link to="/my-trips"><li className="px-2 py-1 cursor-pointer"><a>Trips</a></li></Link>
                                        <li className="px-2 py-1 cursor-pointer"><a>Reviews</a></li>
                                        <li className="px-2 py-1 cursor-pointer"><a>Saved</a></li>
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
            <dialog id="coming_soon" className="modal">
                <div className="modal-box scrollbar-hide">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div>
                        <h2 className="text-2xl font-bold">New Features coming soon!!!</h2>
                        <div className="p-3">
                            <ul className="space-y-2">
                                <li className="text-gray-500"><TbMessageChatbot className="inline mb-1 mr-2" />Integrated Chatbot for enhanced trip planning</li>
                                <li className="text-gray-500"><MdOutlineAttractions className="inline mb-1 mr-2" />Attractions Catalog with 1000+ Activities</li>
                                <li className="text-gray-500"><GiTakeMyMoney className="inline mb-1 mr-2" />Cheapest deal of the season</li>
                            </ul>
                        </div>
                        {/* <div className="flex justify-center items-center h-48 w-full border rounded-2xl my-3">
                            video
                        </div> */}
                        <div className="my-4">
                            {/* <button className="bg-blue-500 text-white px-4 py-1 rounded font-semibold mr-3 inline">Save</button> */}
                            <form className="inline" method="dialog"><button className="bg-red-300 text-white px-4 py-1 rounded font-semibold mr-3 inline">Close</button></form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Navbar;