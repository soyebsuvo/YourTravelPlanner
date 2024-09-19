import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/shadecn/ui/dropdown-menu";
import './dashboard.css';
import { Box } from "@chakra-ui/react";

const ManageAccount = () => {
    
    const [tabName , setTabName] = useState("Notifications");

    const MANAGE_LINKS = [
        { label : "Personal Details", link : "profile" },
        { label : "Preferences", link : "preferences" },
        { label : "Security", link : "security" },
        { label : "Payment Methods", link : "payment-methods" },
        { label : "Privacy", link : "privacy" },
        { label : "Email Notifications", link : "email-notifications" },
        { label : "Other Travellers", link : "other-travellers" },
    ]

    return (
        <div>
            <Navbar />
            <div className="h-20 bg-blue-600"></div>
            <div className="max-w-7xl mx-auto px-2 md:px-14 grid grid-cols-12 min-h-screen max-h-[9999999vh]">
                <div className="col-span-3 border rounded-lg my-4 hidden md:block">
                    <ul className="dashboard-nav space-y-8">
                        {
                            MANAGE_LINKS.map((link, index) => (
                                <NavLink key={index} to={`/manage-account/${link.link}`}>
                                    <li className="p-3 border font-semibold cursor-pointer transition-all duration-200 hover:text-blue-500 rounded-tr-lg rounded-tl-lg">
                                        {link.label}
                                    </li>
                                </NavLink>
                            ))
                        }
                    </ul>
                </div>
                <div className="p-4 md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-full underline underline-offset-4 px-4">{tabName}</DropdownMenuTrigger>
                        <DropdownMenuContent className="ml-2 border">
                            {
                                MANAGE_LINKS.map((link, index) => (
                                    <NavLink onClick={() => setTabName(link.label)} key={index} to={`/manage-account/${link.link}`}>
                                        <li className="p-3 border font-semibold cursor-pointer transition-all duration-200 hover:text-blue-500 rounded-tr-lg rounded-tl-lg max-sm:text-xs">
                                            {link.label}
                                        </li>
                                    </NavLink>
                                ))
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Box className="col-span-12 md:col-span-9">
                    <Outlet />
                </Box>
            </div>
            <Footer />
        </div>
    );
};

export default ManageAccount;