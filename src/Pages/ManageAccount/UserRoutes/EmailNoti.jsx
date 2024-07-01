import { useContext } from "react";
import { MyContext } from "../../../Components/Context/Context";

const EmailNoti = () => {
    const { user } = useContext(MyContext)
    return (
        <div className="p-6"> 
            <div className="flex justify-between items-center py-2 pb-4">
                <div>
                    <h2 className="text-4xl font-semibold">Email Notifications</h2>
                    <h4 className="text-lg text-gray-500">Decide what you want to be notified about, and unsubscribe from what you don&apos;t</h4>
                </div>
            </div>
            <hr className="border"/>

            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Email Preferences</h3>
                <div className="col-span-6">
                <h4 className=" text-gray-500 font-medium">{user?.email} <span className="bg-blue-500 text-white px-1 text-sm rounded">verified</span></h4>
                <p className="text-sm text-gray-500">This is the email address you use to sign in. It&apos;s also where we send your travel details</p>
                </div>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Edit</p>
            </div>
            <hr className="border"/>
        </div>
    );
};

export default EmailNoti;