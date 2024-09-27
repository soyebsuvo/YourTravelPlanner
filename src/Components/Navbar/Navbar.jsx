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
        <NavLink to="/" className="max-lg:text-sm text-neutral-200 hover:text-white">Home</NavLink>
        {user ? role === "agent" || role === "admin" || <NavLink to="/my-trips" className="max-lg:text-sm">My Trips</NavLink> : ""}
        {role === "agent" && <NavLink to="/dashboard" className="max-lg:text-sm">Vendor Dashboard</NavLink>}
        {role === "admin" && <NavLink to="/admin-dashboard" className="max-lg:text-sm">Admin Dashboard</NavLink>}
        <NavLink to="/marketplace" className="max-lg:text-sm">Marketplace</NavLink>
        {user ? <NavLink to="/manage-account/profile" className="max-lg:text-sm">Manage Account</NavLink> : <a onClick={() => document.getElementById('my_modal_3').showModal()} className="cursor-pointer">Manage Account</a>}
        <li><a><IoIosNotifications className="text-xl" /></a></li>
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
    
    return (
        <div className={cn("absolute top-0 right-0 left-0 z-30", className)}>
            <nav className="max-w-7xl mx-auto px-2 md:px-16 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full flex flex-col items-start justify-start space-y-2">
                                <DropdownMenuItem className="w-full cursor-pointer">
                                    <NavLink to="/" className="max-md:text-xs"><a>Home</a></NavLink>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="w-full cursor-pointer">
                                    {user ? role === "agent" || role === "admin" || <NavLink to="/my-trips" className="max-md:text-xs"><a>My Trips</a></NavLink> : ""}
                                </DropdownMenuItem>
                                {
                                    role === "admin" && (
                                        <DropdownMenuItem className="w-full cursor-pointer">
                                            <NavLink to="/admin-dashboard" className="max-md:text-xs"><a>Admin Dashboard</a></NavLink>
                                        </DropdownMenuItem>
                                    )
                                }
                                <DropdownMenuItem className="w-full cursor-pointer">
                                    <NavLink to="/marketplace" className="max-md:text-xs"><a>Marketplace</a></NavLink>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="w-full cursor-pointer">
                                    {user ? <NavLink to="/manage-account/profile" className="max-md:text-xs"><a>Manage Account</a></NavLink> : <a onClick={() => document.getElementById('my_modal_3').showModal()} className="cursor-pointer">Manage Account</a>}
                                </DropdownMenuItem>
                                <DropdownMenuItem className="w-full cursor-pointer">
                                    <a className="w-full flex flex-row items-center justify-between">Notification <IoIosNotifications className="text-lg" /></a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div className="flex justify-start items-center">
                            <Link to="/"><img className="w-56 max-lg:w-48" src={logo} alt="Logo" /></Link>
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-4 flex-1">
                        <div className="hidden md:flex">
                            <ul className="menu menu-horizontal px-1 text-white flex justify-center max-lg:gap-3 items-center gap-5">
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
                                                        className="px-2 py-1 cursor-pointer max-sm:text-sm"
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
        </div>
    )
}

// fffffffffffffffffffffffffffffffuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuux

export default Navbar;