import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLoyout/MainLayout";
import Home from "../Pages/Home/Home";
import RecommendationPage from "../Pages/RecommendationPage/RecommendationPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ManageAccount from "../Pages/ManageAccount/ManageAccount";
import Profile from "../Pages/ManageAccount/UserRoutes/Profile";
import Preferences from "../Pages/ManageAccount/UserRoutes/Preferences";
import Security from "../Pages/ManageAccount/UserRoutes/Security";
import PaymentDetails from "../Pages/ManageAccount/UserRoutes/PaymentDetails";
import Privacy from "../Pages/ManageAccount/UserRoutes/Privacy";
import OtherTravellers from "../Pages/ManageAccount/UserRoutes/OtherTravellers/OtherTravellers";
import MyTrip from "../Pages/MyTrip/MyTrip";
import CitySelection from "../Pages/CitySelection/CitySelection";
import PrivateRoute from "./PrivateRoute";
import AgentDashboard from "../Pages/Dashboard/Agent/AgentDashboard";
import AgentRoute from "./AgentRoute";
import About from "../Components/About/About";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import FAQs from "../Components/FAQs/FAQs";
import TermsOfUse from "../Components/TermsOfUse/TermsOfUse";
import VerifyPhoneNumber from "../Components/VerifyPhoneNumber/VerifyPhoneNumber";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard";
import Marketplace from "../Pages/Marketplace/Marketplace";
import DestinationItinerary from "@/Pages/DestinationItinerary/DestinationItinerary";
import EmailNotification from "@/Pages/ManageAccount/UserRoutes/EmailNotification";
import EmailNotificationManage from "@/Pages/ManageAccount/UserRoutes/EmailNotificationManage/EmailNotificationManage";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout />,
        errorElement : <ErrorPage />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/recommendations",
                element : <RecommendationPage />
            },
            {
                path : "/sugesstedPlaces",
                element : <RecommendationPage />
            },
            {
                path : "/about-wandergenie",
                element : <About />
            },
            {
                path : "/how-it-works",
                element : <HowItWorks />
            },
            {
                path : "/frequently-asked-questions",
                element : <FAQs />
            },
            {
                path : "/terms-of-use",
                element : <TermsOfUse />
            },
            {
                path : "/verify",
                element : <VerifyPhoneNumber />
            },
            {
                path : "/marketplace",
                element : <Marketplace />
            },
            {
                path : "/marketplace/:id",
                element : <RecommendationPage />
            },
            {
                path : "/destinationItinerary/:country",
                element : <DestinationItinerary />
            }
        ]
    },
    {
        path : "/manage-account",
        element : <PrivateRoute><ManageAccount /></PrivateRoute>,
        children : [
            {
                path : "/manage-account/profile",
                element : <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path : "/manage-account/preferences",
                element : <PrivateRoute><Preferences /></PrivateRoute>
            },
            {
                path : "/manage-account/security",
                element : <PrivateRoute><Security /></PrivateRoute>
            },
            {
                path : "/manage-account/payment-methods",
                element : <PrivateRoute><PaymentDetails /></PrivateRoute>
            },
            {
                path : "/manage-account/privacy",
                element : <PrivateRoute><Privacy /></PrivateRoute>
            },
            {
                path : "/manage-account/email-notifications",
                element : <PrivateRoute><EmailNotification /></PrivateRoute>
            },
            {
                path : "/manage-account/other-travellers",
                element : <PrivateRoute><OtherTravellers /></PrivateRoute>
            }
        ]
    },
    {
        path : "/email-notifications/manager",
        element : <PrivateRoute><EmailNotificationManage /></PrivateRoute>
    },
    {
        path : '/my-trips',
        element : <PrivateRoute><MyTrip /></PrivateRoute>
    },
    {
        path : "/select-cities",
        element : <CitySelection />
    },
    {
        path : "/dashboard",
        element : <AgentRoute><AgentDashboard /></AgentRoute>
    },
    {
        path : "/admin-dashboard",
        element : <AdminDashboard />
    }
])