import { useContext, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { MyContext } from "../../Components/Context/Context";
import Preloader from "../../Components/Preloader/Preloader";

const MyTrip = () => {
    const { user } = useContext(MyContext);
    const [tab, setTab] = useState(1);
    const axiosPublic = useAxiosPublic();
    // const [itineraries, setItineraries] = useState();
    const { data : itineraries, isPending , refetch } = useQuery({
        queryKey : ['itinerary'],
        queryFn : async () => {
            const res = await axiosPublic.get(`/saved?email=${user?.email}`);
            const res2 = await axiosPublic.get(`/requested?email=${user?.email}`);
            return [res.data , res2.data];
        }
    })
    // console.log(itineraries[0])
    // console.log(itineraries?.map((item) => console.log(item?.response?.itinerary?.map(item => console.log(item?.destination)))))
    // console.log(itineraries[itineraries.length - 1].response.itinerary[itineraries[itineraries.length - 1].response.itinerary.length - 1].dailyActivities[itineraries[itineraries.length - 1].response.itinerary[itineraries[itineraries.length - 1].response.itinerary.length - 1].dailyActivities.length - 1].day)
    const handleDeleteRequestedItinerary = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/requested/${id}`)
                console.log(res.data)
                if (res.data.deletedCount) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your request has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
    const handleDeleteSavedItinerary = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/saved/${id}`)
                console.log(res.data)
                if (res.data.deletedCount) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your request has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }

    const handleSendToRequested = async () => {
        console.log('requested')
    }


    if(isPending){
        return <Preloader />
    }
    return (
        <div>
            <Navbar />
            <div className="h-20 bg-blue-600"></div>
            <div className="bg-blue-200 h-56">
                <h2 className="text-2xl font-semibold p-8 ps-20">My Trip</h2>
            </div>
            <div className="-mt-52">
                <div className="bg-white m-20 shadow-2xl min-h-screen rounded-xl">
                    <div className="flex gap-2 items-center p-6 pb-8 shadow">
                        <h4 onClick={() => setTab(1)} className={`text-xl font-bold uppercase cursor-pointer mx-4 border-b-4 pb-2 ${tab === 1 ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>Saved</h4>
                        <h4 onClick={() => setTab(2)} className={`text-xl font-bold uppercase cursor-pointer mx-4 border-b-4 pb-2 ${tab === 2 ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>Request Sent</h4>
                        <h4 onClick={() => setTab(3)} className={`text-xl font-bold uppercase cursor-pointer mx-4 border-b-4 pb-2 ${tab === 3 ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>Upcoming</h4>
                        <h4 onClick={() => setTab(4)} className={`text-xl font-bold uppercase cursor-pointer mx-4 border-b-4 pb-2 ${tab === 4 ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>Cancelled</h4>
                        <h4 onClick={() => setTab(5)} className={`text-xl font-bold uppercase cursor-pointer mx-4 border-b-4 pb-2 ${tab === 5 ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>Completed</h4>
                    </div>
                    <div className="p-6">
                        {/* content */}
                        <div>
                            {tab === 1 && <div>
                                <div className="overflow-x-auto">
                                    <table className="table table-zebra">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Destinations</th>
                                                <th>Travel Days</th>
                                                <th>Group Size</th>
                                                <th>Accommodation</th>
                                                <th>Transportation</th>
                                                <th>Special Requirements</th>
                                                <th>Request</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* rows */}
                                            {
                                                itineraries[0]?.map((oneItinerary, index) => {
                                                    const lastItinerary = oneItinerary?.response?.itinerary?.[oneItinerary?.response?.itinerary?.length - 1];
                                                    const lastDay = lastItinerary?.dailyActivities?.[lastItinerary?.dailyActivities?.length - 1]?.day;
                                                    const group = lastItinerary?.groupSize;
                                                    const accommodation = lastItinerary?.accommodation?.type;
                                                    const transportation = lastItinerary?.transportation;
                                                    return <tr key={index}>
                                                        <th className="text-gray-500">{index + 1}</th>
                                                        <td>{
                                                            oneItinerary?.response?.itinerary?.map((item, idx, arr) => {
                                                                return <span className="mr-1 font-semibold text-gray-500" key={idx + 1}>{item?.destination}{idx === arr?.length - 1 ? "" : ","}</span>
                                                            })
                                                        }</td>
                                                        <td>
                                                            {lastDay.split(" ")[1]} {lastDay.split(" ")[0]}s
                                                        </td>
                                                        <td>{
                                                            group
                                                        }</td>
                                                        <td>{accommodation}</td>
                                                        <td>{transportation}</td>
                                                        <td>N/A</td>
                                                        <td>{oneItinerary?.request ? "Already Requested" : <button onClick={handleSendToRequested} className="bg-blue-500 px-2 py-1 text-white text-sm rounded font-semibold">Send Request</button> }</td>
                                                        <td onClick={() => handleDeleteSavedItinerary(oneItinerary._id)} className="text-center flex justify-center items-center cursor-pointer"><FaTrash className="text-red-500 text-xl" /></td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>}
                        </div>
                        <div>
                            {tab === 2 && <div>
                                <div className="overflow-x-auto">
                                    <table className="table table-zebra">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Destinations</th>
                                                <th>Travel Days</th>
                                                <th>Group Size</th>
                                                <th>Accommodation</th>
                                                <th>Transportation</th>
                                                <th>Special Requirements</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* rows */}
                                            {
                                                itineraries[1]?.map((oneItinerary, index) => {
                                                    const lastItinerary = oneItinerary?.response?.itinerary?.[oneItinerary?.response?.itinerary?.length - 1];
                                                    const lastDay = lastItinerary?.dailyActivities?.[lastItinerary?.dailyActivities?.length - 1]?.day;
                                                    const group = lastItinerary?.groupSize;
                                                    const accommodation = lastItinerary?.accommodation?.type;
                                                    const transportation = lastItinerary?.transportation;
                                                    return <tr key={index}>
                                                        <th className="text-gray-500">{index + 1}</th>
                                                        <td>{
                                                            oneItinerary?.response?.itinerary?.map((item, idx, arr) => {
                                                                return <span className="mr-1 font-semibold text-gray-500" key={idx + 1}>{item?.destination}{idx === arr?.length - 1 ? "" : ","}</span>
                                                            })
                                                        }</td>
                                                        <td>
                                                            {lastDay}
                                                        </td>
                                                        <td>{
                                                            group
                                                        }</td>
                                                        <td>{accommodation}</td>
                                                        <td>{transportation}</td>
                                                        <td>N/A</td>
                                                        <td>{oneItinerary?.status}</td>
                                                        <td onClick={() => handleDeleteRequestedItinerary(oneItinerary._id)} className="text-center flex justify-center items-center cursor-pointer"><FaTrash className="text-red-500 text-xl" /></td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTrip;