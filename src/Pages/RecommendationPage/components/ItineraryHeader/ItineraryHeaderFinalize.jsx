import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MyContext } from "@/Components/Context/Context";

import PropTypes from 'prop-types';
import useAxiosPublic from "@/Hooks/useAxiosPublic";

import Swal from 'sweetalert2';

import { Box, VStack, Text } from "@chakra-ui/react";
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/shadecn/ui/dialog";
import { Button } from "@/shadecn/ui/button";

export const ItineraryHeaderFinalize = ({ itinerary, totalCost, request }) => {

    const { user, response, images } = useContext(MyContext);

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleSendRequest = async () => {
        const travellerInfo = { name: user?.displayName, email: user?.email, photo: user?.photoURL }
        const itinerary = { response: response, images: images, traveller: travellerInfo, status: "pending", request: true }
        const res = await axiosPublic.post("/requested", itinerary);
        const data = res.data;
        if (data.insertedId) {
            navigate("/my-trips")
            Swal.fire({
                title: "Done",
                text: "Saved and requested your itinerery",
                icon: "success"
            });
        }
    }
    const handleSave = async () => {
        const travellerInfo = { name: user?.displayName, email: user?.email, photo: user?.photoURL }
        const itinerary = { response: response, images: images, traveller: travellerInfo, status: "pending", request: false }
        const res = await axiosPublic.post("/saved", itinerary);
        const data = res.data;
        if (data.insertedId) {
            document.getElementById('finalize_modal').close()
            Swal.fire({
                title: "Done",
                text: "Saved your itinerery",
                icon: "success"
            });
        }
    }

    return (
        <Box className="flex flex-col items-center border-2 rounded-xl">
            <Box className="flex flex-row justify-between items-center space-x-4 p-2">   
                
                <VStack className='w-6/12'>
                    <Text className="text-lg text-blue-800 font-bold">{totalCost}</Text>
                    <Text className="text-end font-semibold text-gray-500">Per Person</Text>
                </VStack>
                
                <Box className='w-6/12'>
                    {
                        itinerary ? (
                            <Button className="bg-blue-500 rounded-xl p-2 px-5 text-white font-bold cursor-no-drop">{request ? "Requested" : "Saved"}</Button>
                        )
                        :
                        (
                            <Dialog>
                                <DialogTrigger className="w-full bg-blue-500 p-2 px-5 text-white font-bold rounded-lg">
                                    Finalize    
                                </DialogTrigger>
                                <DialogContent className='w-full'>
                                    <DialogTitle className="text-lg font-bold my-2 capitalize">
                                        You are about to send your trip request for biding. Would you like to save it now and send later ?
                                    </DialogTitle>
                                    <DialogFooter className="mt-6">
                                        <Button onClick={handleSendRequest} className="bg-blue-500 text-white px-4 py-1 rounded font-semibold mr-3 inline">Send Anyways</Button>
                                        <Button onClick={handleSave} className="bg-red-300 text-white px-4 py-1 rounded font-semibold mr-3 inline">Save for later</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        )
                    }
                </Box>
            </Box>
            
            <Box className="flex justify-end w-full">
                <Text className="text-sm font-semibold bg-red-500 leading-tight text-white w-full px-2 pb-1 border border-red-600 rounded-bl-2xl rounded-br-2xl text-center -mb-[1px]">International flight fares are not included *</Text>
            </Box>
        </Box>
    )
}

ItineraryHeaderFinalize.propTypes = {
    itinerary: PropTypes.any,
    totalCost: PropTypes.any,
    request: PropTypes.any
}