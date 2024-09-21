import { useEffect, useState } from "react";

import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Button } from "@/shadecn/ui/button";

import { AddTravellerForm } from "./components/AddTravellerForm";

export default function OtherTravellers()
{
    const [travellers, setTravellers] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleTravellerForm = () => {
        setShowForm(!showForm);
    }

    const handleAddTraveler = (travellerData) => {
        setTravellers(prev => [...prev, travellerData]);
    }

    const handleDeleteTraveler = (id) => {
        setTravellers(prev => prev.filter((traveler) => traveler.id !== id));
        localStorage.setItem("othersTravellers", JSON.stringify(travellers.filter((traveler) => traveler.id !== id)));
    }

    useEffect(() => {
        const localTravellers = JSON.parse(localStorage.getItem("othersTravellers"));
        if(localTravellers !== undefined && localTravellers !== null) {
            setTravellers(localTravellers);
        }
    }, [])
    
    useEffect(() => {
        if (travellers && travellers.length > 0) {
            localStorage.setItem("othersTravellers", JSON.stringify(travellers));
        }
    }, [travellers]);
    

    return (
        <Box className="p-2 md:p-6"> 
            <Box className="flex justify-between items-center py-2 pb-4">
                <Box className="space-y-4">
                    <Heading className="text-2xl md:text-4xl font-semibold">Other Travellers</Heading>
                    <h4 className="text-sm md:text-lg text-gray-500">Add or edit information about the people you are travelling with.</h4>
                </Box>
            </Box>
            <hr className="border"/>
            <Box className="mt-5 space-y-4">
                <VStack className="space-y-4 w-full">
                    {
                        travellers.map((traveler, index) => (
                            <Box key={index} className="space-y-4 p-3 bg-neutral-50 border-2 border-neutral-100 w-full rounded-lg shadow-sm shadow-neutral-200">
                                <HStack className="flex flex-row justify-between items-center space-x-2 border-b-2 border-neutral-200">
                                    <Text className="font-semibold text-base py-2">{traveler?.firstName + " " + traveler.lastName}</Text>
                                    <Button onClick={() => handleDeleteTraveler(traveler.id)} className="bg-transparent hover:bg-red-400 text-black hover:text-white">Remove</Button>
                                </HStack>
                                <Text className="font-semibold text-base py-2 border-b-2 border-neutral-200">{traveler?.dateOfBirth}</Text>
                                <Text className="font-semibold text-base py-2 border-b-2 border-neutral-200">{traveler?.gender}</Text>
                            </Box>
                        ))
                    }
                </VStack>
                <Box className="w-full flex flex-row items-center justify-end">
                    <Button onClick={handleTravellerForm} className="bg-blue-500 hover:bg-blue-600 py-2 px-5 text-white font-semibold rounded-md">
                        {showForm ? "Cancell" : "Add New Traveller"}
                    </Button>
                </Box>
                <AddTravellerForm showForm={showForm} onAdd={handleAddTraveler} />
            </Box>
        </Box>
    )
}