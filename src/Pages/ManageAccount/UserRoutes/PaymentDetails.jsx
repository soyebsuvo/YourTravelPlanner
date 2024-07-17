
const PaymentDetails = () => {
    return (
        <div className="p-2 md:p-6"> 
            <div className="flex justify-between items-center py-2 pb-4">
                <div>
                    <h2 className="text-2xl md:text-4xl font-semibold">Payment Details</h2>
                    <h4 className="text-sm md:text-lg text-gray-500">Securely add or remove payment methods to make it esasier when you plan a trip</h4>
                </div>
            </div>
            <hr className="border"/>
            <div className="grid grid-cols-12 py-5">
                <h3 className="col-span-3 font-semibold">Payment Cards</h3>
                <h4 className="col-span-6 text-gray-500 font-medium">Pay with new card</h4>
                <p className="col-span-3 text-end text-blue-500 font-bold cursor-pointer">Add Card</p>
            </div>
            <hr className="border"/>
        </div>
    );
};

export default PaymentDetails;