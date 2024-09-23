import { memo, useState } from "react";
import { Link } from "react-router-dom";

import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Button } from "@/shadecn/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ModulerDestinationsContainer = ({ locations, label }) => {

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    
    const startIndex = currentPage * itemsPerPage;
    const currentLocations = locations.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => { if ((currentPage + 1) * itemsPerPage < locations.length) setCurrentPage(prevPage => prevPage + 1); }
    const handlePrevious = () => { if (currentPage > 0) setCurrentPage(prevPage => prevPage - 1); }

    const RenderMemorizedLocations = memo(() => {
        return currentLocations.map((location, index) => (
            <Link
                to={`/destinationItinerary/${location.name}`}
                target="_blank"
                referrerPolicy="no-referrer"
                key={index}
                className="h-48 relative rounded-xl overflow-hidden shadow-lg hover:brightness-110 transition-all duration-150 hover:shadow-xl hover:shadow-black
                    min-w-[200px] md:w-1/4 w-1/3"
            >
                <Image
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                <Text className="font-sans font-normal text-sm text-white text-center bg-black/60 w-full py-2 absolute bottom-10 max-xl:bottom-9">
                    {location.description}
                </Text>
                <Text className="font-sans font-bold text-2xl max-xl:text-lg text-white text-center bg-black/60 w-full pb-2 absolute bottom-0">
                    {location.name}
                </Text>
            </Link>
        ))
    }, [currentLocations])

    return (
        <Box className="w-full p-4 space-y-4 mt-5 bg-neutral-100 rounded-lg shadow-md shadow-neutral-300">

            <HStack className="w-full justify-between">
                <Heading className="font-bold text-xl">{label}</Heading>
                <Box className="space-x-2">
                    <Button 
                        className="rounded-full bg-sky-500/40 hover:bg-sky-500/70 text-black p-2 w-auto h-auto font-bold" 
                        onClick={handlePrevious}
                        disabled={currentPage === 0}
                    >
                        <IoIosArrowBack />
                    </Button>
                    <Button 
                        className="rounded-full bg-sky-500/40 hover:bg-sky-500/70 text-black p-2 w-auto h-auto" 
                        onClick={handleNext}
                        disabled={(currentPage + 1) * itemsPerPage >= locations.length}
                    >
                        <IoIosArrowForward />
                    </Button>
                </Box>
            </HStack>

            <Box className="w-full overflow-x-auto whitespace-nowrap flex flex-col items-center justify-center">
                <Box className="w-full flex items-center justify-between gap-4">
                    <RenderMemorizedLocations/>
                </Box>
            </Box>
        </Box>
    )
}

ModulerDestinationsContainer.displayName = "ModulerDestinationsContainer";