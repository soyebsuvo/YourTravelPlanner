import { useContext, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { MyContext } from "../../Components/Context/Context";
import Preloader from "../../Components/Preloader/Preloader";
import { TiTick } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";
import { useNavigate } from "react-router-dom";




const MyTrip = () => {
    const { user, setResponse, setImages } = useContext(MyContext);
    const navigate = useNavigate();
    const [tab, setTab] = useState(1);
    const axiosPublic = useAxiosPublic();
    // const [itineraries, setItineraries] = useState();
    const { data: itineraries, isPending, refetch } = useQuery({
        queryKey: ['itinerary'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/saved?email=${user?.email}`);
            const res2 = await axiosPublic.get(`/requested?email=${user?.email}`);
            return [res.data, res2.data];
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
        }).then(async (result) => {
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
        }).then(async (result) => {
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

    const handleSendToRequested = async (itinerary) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Send Request!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                // const travellerInfo = { name: user?.displayName, email: user?.email, photo: user?.photoURL }
                // const itinerary = { response: response, images: images, traveller: travellerInfo, status: "pending", request: true }
                const res = await axiosPublic.post("/requested", itinerary);
                const data = res.data;
                if (data.insertedId) {
                    Swal.fire({
                        title: "Done",
                        text: "requested your itinerery",
                        icon: "success"
                    });
                    await axiosPublic.patch(`/saved/${itinerary?._id}`);
                    refetch();
                }
            }
        });
    }

    const handleViewItinerary = (itinerary) => {
        setResponse(null)
        const data = itinerary?.response;
        const image = itinerary?.images;
        setResponse(data);
        setImages(image)
        navigate("/recommendations")
    }


    // if (isPending) {
    //     return <Preloader />
    // }
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
                    {isPending ? <Preloader /> : <div className="p-6">
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
                                                <th>Special <br /> Requirements</th>
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
                                                        <td className="flex flex-wrap">{
                                                            oneItinerary?.response?.itinerary?.map((item, idx, arr) => {
                                                                return <span className="mr-1 font-semibold text-gray-500" key={idx + 1}>{item?.destination}{idx === arr?.length - 1 ? "" : ","}</span>
                                                            })
                                                        }</td>
                                                        <td>
                                                            {lastDay?.split(" ")[1]} {lastDay?.split(" ")[0]}s
                                                        </td>
                                                        <td>{
                                                            group
                                                        }</td>
                                                        <td>{accommodation}</td>
                                                        <td>{transportation}</td>
                                                        <td>N/A</td>
                                                        <td>{oneItinerary?.request ? <p className="font-semibold">Requested <TiTick className="inline mb-1 text-blue-600" /></p> : <button onClick={() => handleSendToRequested(oneItinerary)} className="bg-blue-500 px-2 text-xs py-1 text-white rounded font-semibold">Send Request</button>}</td>
                                                        <td onClick={() => handleDeleteSavedItinerary(oneItinerary._id)} className="text-center cursor-pointer"><FaTrash className="text-red-500 text-xl" /></td>
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
                                                <th>Special <br /> Requirements</th>
                                                <th>Itinerary</th>
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
                                                    return <tr key={index} className="">
                                                        <th className="text-gray-500">{index + 1}</th>
                                                        <td className="flex flex-wrap">{
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
                                                        <td onClick={() => handleViewItinerary(oneItinerary)} className="text-blue-500 underline font-semibold cursor-pointer text-center">View</td>
                                                        <td>{oneItinerary?.status === 'pending' && <p>Pending <MdOutlinePendingActions className="inline text-orange-600 font-bold" /></p>} {oneItinerary?.status === 'accepted' && <p>Accepted <TiTick className="text-blue-600 font-bold mb-1 inline" /></p>} {oneItinerary?.status === 'rejected' && <p>Rejected <IoCloseSharp className="inline font-bold mb-1 text-red-600" /></p>}</td>
                                                        <td onClick={() => handleDeleteRequestedItinerary(oneItinerary._id)} className="text-center h-full cursor-pointer"><FaTrash className="text-red-500 text-xl h-full" /></td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    
                                </div>
                            </div>}
                        </div>
                    </div>}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="88" viewBox="0 0 232 88" width="232">
                                        <path d="m2.08105 0c-.00024 11-2.999761 31 27.49995 33.5 29.1024 2.3855 117.833 4 158.5 6 28 1.377 42.8 6.4 42 48" stroke="#d4d4d4" strokeWidth="3" />
                                    </svg>
        </div>
    );
};

export default MyTrip;