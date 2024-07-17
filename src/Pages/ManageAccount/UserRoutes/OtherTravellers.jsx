
const OtherTravellers = () => {
    return (
        <div className="p-2 md:p-6"> 
            <div className="flex justify-between items-center py-2 pb-4">
                <div>
                    <h2 className="text-2xl md:text-4xl font-semibold">Other Travellers</h2>
                    <h4 className="text-sm md:text-lg text-gray-500">Add or edit information about the people you are travelling with.</h4>
                </div>
            </div>
            <hr className="border"/>
            {/* <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Email Address</h3>
                <div className="col-span-6">
                <h4 className=" text-gray-500 font-medium">abcd@gmail.com <span className="bg-blue-500 text-white px-1 text-sm rounded">verified</span></h4>
                <p className="text-sm text-gray-500">This is the email address you use to sign in. It&apos;s also where we send your travel details</p>
                </div>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Edit</p>
            </div>
            <hr className="border"/> */}
            <div className="flex justify-end py-6">
                <button className="bg-blue-500 py-2 px-5 text-white font-semibold rounded-md">+ Add New Traveller</button>
            </div>
        </div>
    );
};

export default OtherTravellers;