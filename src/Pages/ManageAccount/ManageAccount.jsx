import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import './dashboard.css'
const ManageAccount = () => {
    return (
        <div>
            <Navbar />
            <div className="h-20 bg-blue-600"></div>
            <div className="max-w-7xl mx-auto px-14 grid grid-cols-12">
                <div className="col-span-3 border rounded-lg my-4">
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
                <div className="col-span-9">
                    <Outlet /> 
                </div>
            </div>
        </div>
    );
};

export default ManageAccount;