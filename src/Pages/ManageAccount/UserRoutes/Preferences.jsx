
const Preferences = () => {
    return (
        <div className="p-2 md:p-6"> 
            <div className="flex justify-between items-center py-2 pb-4">
                <div>
                    <h2 className="text-2xl md:text-4xl font-semibold">Preferences</h2>
                    <h4 className="text-sm md:text-lg text-gray-500">Change Your Language, currency and accessibility requirements</h4>
                </div>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Currency</h3>
                <h4 className="col-span-6 text-gray-500 font-medium text-sm">Bangladeshi TAKA (BDT)</h4>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Edit</p>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Language</h3>
                <div className="col-span-6">
                <h4 className=" text-gray-500 font-medium text-sm">Bangla</h4>
                </div>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Edit</p>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Accessibility Requirements</h3>
                <h4 className="col-span-6 text-gray-500 font-medium text-sm">Filter out properties that don&apos;t meet your needs</h4>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Edit</p>
            </div>
            <hr className="border"/>
        </div>
    );
};

export default Preferences;