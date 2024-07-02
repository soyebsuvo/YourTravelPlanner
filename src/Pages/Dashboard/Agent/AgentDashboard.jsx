import { useQuery } from "@tanstack/react-query";
import Navbar from "../../../Components/Navbar/Navbar";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Preloader from "../../../Components/Preloader/Preloader";

const AgentDashboard = () => {
    const axiosPublic = useAxiosPublic();
    const { data : itineraries , isPending } = useQuery({
        queryKey : ['requestedItinenary'],
        queryFn : async () => {
            const res = await axiosPublic.get(`/requestedbids`);
            return res.data;
        }
    })
    if(isPending){
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
                                        <th>Special Requirements</th>
                                        <th>Total Budget</th>
                                        <th>Action</th>
                                        <th>Action</th>
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
                                                    {lastDay?.split(" ")[1]} {lastDay?.split(" ")[0]}s
                                                </td>
                                                <td>{
                                                    group
                                                }</td>
                                                <td>{accommodation}</td>
                                                <td>{transportation}</td>
                                                <td>N/A</td>
                                                <td>$5000</td>
                                                <td><button className="text-white bg-blue-500 px-2 py-1 rounded">Accept</button></td>
                                                <td><button className="text-white bg-red-400 px-2 py-1 rounded">Reject</button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentDashboard;