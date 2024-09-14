import { useState } from "react";

import PropTypes from 'prop-types';
import useAxiosPublic from "@/Hooks/useAxiosPublic";

import PhoneNumberInput from "react-phone-input-2";
import Swal from 'sweetalert2';

import { Box, Button, FormControl, FormLabel, Text } from '@chakra-ui/react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/shadecn/ui/dialog';
import { Input } from '@/shadecn/ui/input';

import { FaChevronRight, FaWhatsapp } from "react-icons/fa";

export const ItineraryHeaderRequestCallback = ({ itinerary }) => {

    const [phoneNumber, setPhoneNumber] = useState("");

    const axiosPublic = useAxiosPublic();

    const handleCallbackRequest = async (form) => {

        try {
            form.preventDefault();
            const name = form.target.name.value;
            const email = form.target.email.value;
            const message = form.target.message.value;
            const callbackInfo = {name, phoneNumber, email, message};

            if(callbackInfo.email === undefined || callbackInfo.email === "" || name === undefined || name === "" || message === undefined){
                Swal.fire({
                    title: "Required Input Fields",
                    text: "Failed To Send Request Because Some Of The Input Field Value Are Missing",
                    icon: "error"
                });
                return;
            }

        else {
            const res = await axiosPublic.patch(`/requestedCallback/${itinerary}`, callbackInfo);
            console.log(res.data);
            
            if(res?.data?.modifiedCount){
                Swal.fire({
                    title: "Requested Callback",
                    text: "Successfully send the callback request",
                    icon: "success"
                });
            }
        }
        }
        catch (error) {
            console.log(error);
            Swal.fire({
                title: "Failed To Send Request",
                text: "500 INTERNAL SERVER ERROR",
                icon: "error"
            });
        }
    }

    return (
        <Box className='space-y-2'>
            <a href="http://api.whatsapp.com/send/?phoneNumber=919356853153&text=Hey+WanderGenie%2C+Help+me+plan+my+next+travel+adventure&type=phoneNumber_number&app_absent=0" target="_blank" className="max-w-sm mx-auto">
                <Button className="w-full bg-green-100 hover:bg-green-200 text-green-800 p-4 rounded-lg flex items-center justify-between">
                    <FaWhatsapp className="text-green-500 text-3xl mr-3" />
                    <Box className="font-semibold mr-3">Whatsapp Us</Box>
                    <FaChevronRight className="text-green-500 mt-1" />
                </Button>
            </a>
            <Box>
                <Dialog>
                    <DialogTrigger className="w-full text-center mt-1 text-blue-600 hover:bg-blue-200 font-semibold border border-blue-600 py-1 rounded cursor-pointer">
                        Request Callback
                    </DialogTrigger>
                    <DialogContent className="p-4 rounded-lg bg-neutral-100">
                        <DialogTitle className="text-3xl text-center font-medium text-gray-900">Request Callback</DialogTitle>
                    
                        <form onSubmit={handleCallbackRequest} className="space-y-6 mb-3" action="#">
                            <FormControl isRequired className='space-y-2'>
                                <FormLabel>Given Name</FormLabel>
                                <Input id="name" required placeholder='Name' className="w-full text-gray-900 text-sm p-2 border border-gray-400 !outline-none !ring-0" />
                            </FormControl>
                            <Box className='w-full'>
                                <Text>Mobile No : </Text>
                                <PhoneNumberInput
                                    country={'in'}
                                    inputClass='w-full'
                                    containerClass='w-full'
                                    value={phoneNumber}
                                    onChange={phoneNumber => setPhoneNumber(`+${phoneNumber}`)}
                                />
                            </Box>
                            <FormControl isRequired className='space-y-2'>
                                <FormLabel>Email</FormLabel>
                                <Input id="email" required type="email" placeholder='example@gmail.com' className="w-full text-gray-900 text-sm p-2 border border-gray-400 !outline-none !ring-0" />
                            </FormControl>
                            
                            <FormControl isRequired className='space-y-2'>
                                <FormLabel>Message {'(Optional)'}</FormLabel>
                                <textarea id="message" type="email" placeholder='Name' className="w-full text-gray-900 text-sm p-2 border border-gray-400 !outline-none !ring-0 resize-none"></textarea>
                            </FormControl>

                            <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500">Request Callback</button>
                        </form>
                    </DialogContent>
                </Dialog>
            </Box>
        </Box>
    )
}

ItineraryHeaderRequestCallback.propTypes = {
    itinerary: PropTypes.any.isRequired
}