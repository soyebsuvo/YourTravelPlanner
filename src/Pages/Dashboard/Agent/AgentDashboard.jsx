import { useQuery } from "@tanstack/react-query";
import Navbar from "../../../Components/Navbar/Navbar";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Preloader from "../../../Components/Preloader/Preloader";
import Swal from "sweetalert2";
import { useContext } from "react";
import { MyContext } from "../../../Components/Context/Context";
import { useNavigate } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";

const AgentDashboard = () => {
    const navigate = useNavigate();
    const { setImages , setResponse} = useContext(MyContext)
    const axiosPublic = useAxiosPublic();
    const { data: itineraries, isPending, refetch } = useQuery({
        queryKey: ['requestedItinenary'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/requestedbids`);
            return res.data;
        }
    })

    const handleReject = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.patch(`/requestedToReject/${id}`)
                console.log(res.data)
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: "Rejected",
                        text: "The request has been Rejected.",
                        icon: "success"
                    });
                }
            }
        });
    }
    const handleAccept = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Accept it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.patch(`/requestedToAccept/${id}`)
                console.log(res.data)
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: "Accepted",
                        text: "The request has been Accepted.",
                        icon: "success"
                    });
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


    if (isPending) {
        return <Preloader />
    }
    return (
        <div>
            <Navbar />
            <div className="h-20 bg-blue-600"></div>
            <div className="max-w-7xl mx-auto px-3 md:px-10 py-5">
                <div className="border-4 rounded-2xl p-4">
                    <h2 className="text-3xl font-bold">Bid Dashboard</h2>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Bid No.</th>
                                        <th>Destinations</th>
                                        <th>Travel Days</th>
                                        <th>Group Size</th>
                                        <th>Accommodation</th>
                                        <th>Transportation</th>
                                        <th>Special <br /> Requirements</th>
                                        <th>Total Budget</th>
                                        <th>Itinerary</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* rows */}
                                    {
                                        itineraries?.map((oneItinerary, index) => {
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
                                                    {lastDay?.split(" ")[1]} {lastDay?.split(" ")[0]}
                                                </td>
                                                <td>{
                                                    group
                                                }</td>
                                                <td>{accommodation}</td>
                                                <td>{transportation}</td>
                                                <td>N/A</td>
                                                <td>{oneItinerary?.response?.totalCost}</td>
                                                <td onClick={() => handleViewItinerary(oneItinerary)} className="text-blue-500 underline font-semibold cursor-pointer text-center">View</td>
                                                {
                                                    oneItinerary?.status === 'pending' && <td className="">
                                                        <p onClick={() => handleAccept(oneItinerary?._id)} className="text-white mr-3 inline cursor-pointer bg-blue-500 px-2 py-1 rounded">Accept</p>
                                                        <p onClick={() => handleReject(oneItinerary?._id)} className="text-white inline cursor-pointer bg-red-400 px-2 py-1 rounded">Reject</p>
                                                    </td>
                                                }
                                                {
                                                    oneItinerary?.status === 'accepted' && <td className=""><p className="text-white text-center font-semibold bg-green-500 px-2 py-1 rounded">Accepted</p></td>
                                                }
                                                {
                                                    oneItinerary?.status === 'rejected' && <td className=""><p className="text-white text-center font-semibold bg-red-500 px-2 py-1 rounded">Rejected</p></td>
                                                }
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AgentDashboard;