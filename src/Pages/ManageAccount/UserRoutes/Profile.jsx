import { useContext } from "react";
import { MyContext } from "../../../Components/Context/Context";

const Profile = () => {
    const { user } = useContext(MyContext)
    console.log(user)
    return (
        <div className="p-6"> 
            <div className="flex justify-between items-center py-2 pb-4">
                <div>
                    <h2 className="text-4xl font-semibold">Personal Details</h2>
                    <h4 className="text-lg text-gray-500">Update your information and find how it&apos;s used</h4>
                </div>
                <div>
                    <img src={user?.photoURL} alt="Profile" className="w-16 h-16 rounded-full border" />                    
                </div>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Name</h3>
                <h4 className="col-span-6 text-gray-500 font-medium">{user?.displayName}</h4>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Edit</p>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Email Address</h3>
                <div className="col-span-6">
                <h4 className=" text-gray-500 font-medium">{user?.email} <span className="bg-blue-500 text-white px-1 text-sm rounded">verified</span></h4>
                <p className="text-sm text-gray-500">This is the email address you use to sign in. It&apos;s also where we send your travel details</p>
                </div>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Edit</p>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Phone</h3>
                <h4 className="col-span-6 text-gray-500 font-medium">Add your phone number</h4>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Edit</p>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Date of birth</h3>
                <h4 className="col-span-6 text-gray-500 font-medium">Add your date of birth</h4>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Edit</p>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Nationality</h3>
                <h4 className="col-span-6 text-gray-500 font-medium">Your nationality</h4>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Edit</p>
            </div>
            <hr className="border"/>

        </div>
    );
};

export default Profile;