import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Your_travel__3_-removebg-preview (2).png"
import "./navbar.css";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context/Context";
import { IoIosNotifications } from "react-icons/io";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbMessageChatbot } from "react-icons/tb";
import { MdOutlineAttractions } from "react-icons/md";
import useCheckRole from "../../Hooks/useCheckRole";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "@/context/AuthContextProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shadecn/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/shadecn/ui/dialog";
import { cn } from "@/lib/utils";


const Navbar = ({ className="" }) => {

    const { user, logOut } = useAuth();

    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const { phone, otp, setOtp, confirmationResult } = useContext(MyContext)
    const [role, , refetch] = useCheckRole();
    
    const links = <>
        <NavLink to="/"><a>Home</a></NavLink>
        <span className="cursor-pointer" onClick={() => document.getElementById('coming_soon').showModal()}><a>Marketplace</a></span>
        {user ? role === "agent" || role === "admin" || <NavLink to="/my-trips"><a>My Trips</a></NavLink> : ""}
        {/* <NavLink to="/Honeymoon"><a>Honeymoon Gateways</a></NavLink> */}
        {role === "agent" && <NavLink to="/dashboard"><a>Vendor Dashboard</a></NavLink>}
        {role === "admin" && <NavLink to="/admin-dashboard"><a>Admin Dashboard</a></NavLink>}
        {user ? <NavLink to="/manage-account/profile"><a>Manage Account</a></NavLink> : <a onClick={() => document.getElementById('my_modal_3').showModal()} className="cursor-pointer">Manage Account</a>}
        {/* <li><a><BsThreeDots/></a></li> */}
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

    const handleOTPSubmit = async () => {
        try {
            const data = await confirmationResult?.confirm(otp);
            console.log(data);
            document.getElementById('OTP').close();
            navigate("/")

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      console.log(user)
    }, [])
    


    return (
        <div className={cn("absolute top-0 right-0 left-0 z-30", className)}>
            <nav className="max-w-7xl mx-auto px-2 md:px-16 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <div className="flex justify-start items-center">
                            <Link to="/"><img className="w-56" src={logo} alt="Logo" /></Link>
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
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        {user?.photoURL ? <img src={user?.photoURL} className="cursor-pointer w-9 h-9 rounded-full" /> : <FaRegUserCircle className="cursor-pointer text-3xl text-white" /> }
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="flex flex-col items-start justify-start min-w-52">
                                        {
                                            [
                                                { label : "Manage Account", link : "profile" },
                                                { label : "Trips", link : "my-trips" },
                                                { label : "Reviews", link : "reviews" },
                                                { label : "Saved", link : "saved" },
                                                { label : "Logout", link : "/" },
                                            ].map((link, index) => (
                                                <DropdownMenuItem key={index} className="w-full p-1">
                                                    <Link
                                                        onClick={() => link.label === "Logout" ? logout() : () => {}}
                                                        className="px-2 py-1 cursor-pointer"
                                                        to={`/manage-account/${link.link}`}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))
                                        }
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                :
                                <Dialog>
                                    <DialogTrigger className="px-4 py-1 rounded border border-white font-semibold cursor-pointer text-white">
                                        Login
                                    </DialogTrigger>
                                    <DialogContent className="bg-transparent p-0 border-none">
                                        {isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}
                                    </DialogContent>
                                </Dialog>
                            }
                                
                            <dialog id="OTP" className="modal w-1/3 mx-auto">
                                <div className="modal-box scrollbar-hide">
                                    <div>
                                        <h2 className="text-2xl font-semibold mt-3 mb-2 text-center">Enter OTP</h2>
                                        <p className="text-gray-500 text-center text-sm mb-5">OTP has been sent to {phone}</p>
                                        <div className="flex justify-center">
                                            <input onChange={(e) => setOtp(e.target.value)} placeholder="555-555" type="text" className="border-2 rounded p-2 focus:outline-none" maxLength={8} />
                                        </div>
                                        <div className="flex justify-center">
                                            <button onClick={handleOTPSubmit} className="px-6 py-2 bg-blue-600 text-white rounded mt-8">Continue</button>
                                        </div>
                                    </div>
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
                        <div className="my-4">
                            <form className="inline" method="dialog"><button className="bg-red-300 text-white px-4 py-1 rounded font-semibold mr-3 inline">Close</button></form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Navbar;