import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import './dashboard.css'
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
const ManageAccount = () => {
    const [tabOpen, setTabOpen] = useState(false);
    const [tabName , setTabName] = useState("Notifications");
// const tab = 2;
    return (
        <div>
            <Navbar />
            <div className="h-20 bg-blue-600"></div>
            <div className="max-w-7xl mx-auto px-2 md:px-14 grid grid-cols-12">
                <div className="col-span-3 border rounded-lg my-4 hidden md:block">
                    {/* navitems */}
                    <ul className="dashboard-nav">
                        <NavLink to="/manage-account/profile"><li className="p-3 border font-semibold cursor-pointer transition-all duration-200 hover:text-blue-500 rounded-tr-lg rounded-tl-lg">Personal Details</li></NavLink>
                        <NavLink to="/manage-account/preferences"><li className="p-3 border font-semibold cursor-pointer transition-all duration-200 hover:text-blue-500">Preferences</li></NavLink>
                        <NavLink to="/manage-account/security"><li className="p-3 border font-semibold cursor-pointer transition-all duration-200 hover:text-blue-500">Security</li></NavLink>
                        <NavLink to="/manage-account/payment-methods"><li className="p-3 border font-semibold cursor-pointer transition-all duration-200 hover:text-blue-500">Payment Details</li></NavLink>
                        <NavLink to="/manage-account/privacy"><li className="p-3 border font-semibold cursor-pointer transition-all duration-200 hover:text-blue-500">Privacy</li></NavLink>
                        <NavLink to="/manage-account/email-notifications"><li className="p-3 border font-semibold cursor-pointer transition-all duration-200 hover:text-blue-500">Email Notifications</li></NavLink>
                        <NavLink to="/manage-account/other-travellers"><li className="p-3 border font-semibold cursor-pointer transition-all duration-200 hover:text-blue-500 rounded-bl-lg rounded-br-lg">Other Travellers</li></NavLink>
                    </ul>
                </div>
                <div className="p-4 relative md:hidden">
                    <button onClick={() => setTabOpen(!tabOpen)} className="border-2 py-1 px-2 w-[200px] rounded cursor-pointer"><span className="font-semibold">{tabName}</span> <FaAngleDown className="inline mb-1 ml-1" /></button>
                    <ul className={`absolute top-[52px] bg-white z-40 border-2 border-t-0 w-[200px] ${tabOpen ? '' : 'hidden'}`}>
                        <NavLink onClick={() => {setTabOpen(false); setTabName("Profile")}} to="/manage-account/profile"><li className={`font-semibold uppercase cursor-pointer border-b p-2 text-sm text-center ${tabName === "Profile" ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>Personal Details</li></NavLink>
                        <NavLink onClick={() => {setTabOpen(false); setTabName("Preferences")}} to="/manage-account/preferences"><li className={`font-semibold uppercase cursor-pointer border-b p-2 text-sm text-center ${tabName === "Preferences" ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>Preferences</li></NavLink>
                        <NavLink onClick={() => {setTabOpen(false); setTabName("Security")}} to="/manage-account/security"><li className={`font-semibold uppercase cursor-pointer border-b p-2 text-sm text-center ${tabName === "Security" ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>Security</li></NavLink>
                        <NavLink onClick={() => {setTabOpen(false); setTabName("Peyment")}} to="/manage-account/payment-methods"><li className={`font-semibold uppercase cursor-pointer border-b p-2 text-sm text-center ${tabName === "Peyment" ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>Payment Details</li></NavLink>
                        <NavLink onClick={() => {setTabOpen(false); setTabName("Privacy")}} to="/manage-account/privacy"><li className={`font-semibold uppercase cursor-pointer border-b p-2 text-sm text-center ${tabName === "Privacy" ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>Privacy</li></NavLink>
                        <NavLink onClick={() => {setTabOpen(false); setTabName("Notifications")}} to="/manage-account/email-notifications"><li className={`font-semibold uppercase cursor-pointer border-b p-2 text-sm text-center ${tabName === "Notifications" ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>Email Notifications</li></NavLink>
                        <NavLink onClick={() => {setTabOpen(false); setTabName("Travellers")}} to="/manage-account/other-travellers"><li className={`font-semibold uppercase cursor-pointer border-b p-2 text-sm text-center ${tabName === "Travellers" ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>Other Travellers</li></NavLink>
                        {/* <li onClick={() => { setTab(1); setTabOpen(false); setTabName("Saved") }} className={}>Saved</li>
                        <li onClick={() => { setTab(2); setTabOpen(false); setTabName("Request Sent") }} className={}>Request Sent</li>
                        <li onClick={() => { setTab(3); setTabOpen(false); setTabName("Upcoming") }} className={}>Upcoming</li>
                        <li onClick={() => { setTab(4); setTabOpen(false); setTabName("Cancelled") }} className={}>Cancelled</li>
                        <li onClick={() => { setTab(5); setTabOpen(false); setTabName("Completed") }} className={}>Completed</li> */}
                    </ul>
                </div>
                <div className="col-span-12 md:col-span-9">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ManageAccount;