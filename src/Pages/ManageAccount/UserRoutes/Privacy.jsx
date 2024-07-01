import { useContext } from "react";
import { MyContext } from "../../../Components/Context/Context";

const Privacy = () => {
    const { user } = useContext(MyContext)
    return (
        <div className="p-6"> 
            <div className="flex justify-between items-center py-2 pb-4">
                <div>
                    <h2 className="text-4xl font-semibold">Privacy</h2>
                    <h4 className="text-lg text-gray-500">Exercise your privacy rights and control how your data is used</h4>
                </div>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Privacy Settings</h3>
                <div className="col-span-6">
                <h4 className=" text-gray-500 font-medium">{user?.email} </h4>
                <p className="text-sm text-gray-500">Select &apos;Manage&apos; to change your privacy settings and exercise your rights using our request form</p>
                </div>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Manage</p>
            </div>
            <hr className="border"/>
        </div>
    );
};

export default Privacy;