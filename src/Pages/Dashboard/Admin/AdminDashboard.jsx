import { useQuery } from "@tanstack/react-query";
import Navbar from "../../../Components/Navbar/Navbar";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Preloader from "../../../Components/Preloader/Preloader";
// import Swal from "sweetalert2";
// import { useContext } from "react";
// import { MyContext } from "../../../Components/Context/Context";
// import { useNavigate } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";

const AdminDashboard = () => {
    // const navigate = useNavigate();
    // const { setImages , setResponse} = useContext(MyContext)
    const axiosPublic = useAxiosPublic();
    const { data: users, isPending } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users`);
            return res.data;
        }
    })

    // const handleReject = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, Reject it!"
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             const res = await axiosPublic.patch(`/requestedToReject/${id}`)
    //             console.log(res.data)
    //             if (res.data.modifiedCount) {
    //                 refetch()
    //                 Swal.fire({
    //                     title: "Rejected",
    //                     text: "The request has been Rejected.",
    //                     icon: "success"
    //                 });
    //             }
    //         }
    //     });
    // }
    // const handleAccept = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, Accept it!"
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             const res = await axiosPublic.patch(`/requestedToAccept/${id}`)
    //             console.log(res.data)
    //             if (res.data.modifiedCount) {
    //                 refetch()
    //                 Swal.fire({
    //                     title: "Accepted",
    //                     text: "The request has been Accepted.",
    //                     icon: "success"
    //                 });
    //             }
    //         }
    //     });
    // }

    // const handleViewItinerary = (itinerary) => {
    //     setResponse(null)
    //     const data = itinerary?.response;
    //     const image = itinerary?.images;
    //     setResponse(data);
    //     setImages(image)
    //     navigate("/recommendations")
    // }


    if (isPending) {
        return <Preloader />
    }
    return (
        <div>
            <Navbar />
            <div className="h-20 bg-blue-600"></div>
            <div className="max-w-7xl mx-auto px-3 md:px-10 py-5">
                <div className="border-4 rounded-2xl p-4">
                    <h2 className="text-3xl font-bold">Users Management</h2>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>User ID</th>
                                        <th>Email</th>
                                        <th>Full Name</th>
                                        <th>Mobile No.</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Reg. Date</th>
                                        <th>Last Login</th>
                                        <th>Actions</th>
                                        <th className="text-center">Detailed View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* rows */}
                                    {
                                        users?.map((user, index) => {
                                            // const lastItinerary = user?.response?.itinerary?.[user?.response?.itinerary?.length - 1];
                                            // const lastDay = lastItinerary?.dailyActivities?.[lastItinerary?.dailyActivities?.length - 1]?.day;
                                            // const group = lastItinerary?.groupSize;
                                            // const accommodation = lastItinerary?.accommodation?.type;
                                            // const transportation = lastItinerary?.transportation;
                                            return <tr key={index}>
                                                <th className="text-gray-500">{index + 1}</th>
                                                
                                                <td>
                                                    {user?.email}
                                                </td>
                                                <td>{user?.name}</td>
                                                <td>{user?.phone ? user?.phone : "N/A"}</td>
                                                <td>{user?.role ? user?.role : "Traveller"}</td>
                                                <td>Active</td>
                                                <td>----</td>
                                                <td>----</td>
                                                {
                                                    <td className="">
                                                        <p className="text-white mr-3 inline cursor-pointer bg-blue-500 px-2 py-1 rounded">Action</p>
                                                    </td>
                                                }
                                                {
                                                    <td className="text-blue-500 underline font-semibold cursor-pointer text-center">View</td>
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

export default AdminDashboard;