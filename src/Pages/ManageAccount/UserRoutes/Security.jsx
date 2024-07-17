
const Security = () => {
    return (
        <div className="p-2 md:p-6"> 
            <div className="flex justify-between items-center py-2 pb-4">
                <div>
                    <h2 className="text-2x md:text-4xl font-semibold">Security</h2>
                    <h4 className="text-sm md:text-lg text-gray-500">Change your security settings, set up secure authentication or delete your account.</h4>
                </div>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Password</h3>
                <h4 className="col-span-6 text-gray-500 font-medium text-sm">Reset your password regularly to keep your account secure</h4>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Reset</p>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Two-factor authentication</h3>
                <div className="col-span-6">
                <h4 className=" text-gray-500 font-medium text-sm">Increase the security of your account by setting up two-factor authentication</h4>
                </div>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Set Up</p>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Active Sessions</h3>
                <h4 className="col-span-6 text-gray-500 font-medium text-sm">Seleting &apos;sign out&apos; will sign you out from all devices exept this one. The process can take upto 5 minutes </h4>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Sign Out</p>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Delete Account</h3>
                <h4 className="col-span-6 text-gray-500 font-medium text-sm">Permanently delete your wandergeniellm.com account</h4>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Delete Account</p>
            </div>
            <hr className="border"/>
        </div>
    );
};

export default Security;