import { useState } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from '@tanstack/react-query';
import axios from "axios";

import { Box } from "@chakra-ui/react";

import Navbar from "../../Components/Navbar/Navbar";

import { MarketplaceDetailHero } from "./components/MarketplaceDetailHero";
import { MarketplaceDetailAcitivities } from "./components/MarketplaceDetailAcitivities";

export const MarketplaceDetail = () => {

    const { id } = useParams();

    const { data : response, isLoading, isError } = useQuery({
        queryKey: ["itinerary", id],
        queryFn: async () => {
            const res = await axios.get(`https://server.wandergeniellm.com/requestedbyid?id=${"668bb9e70680f8317a5eb434"}`);
            return res.data[0]?.response ?? null;
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10, // 10 minutes
        refetchOnWindowFocus: false,
    });

    const [tripImages, setTripImages] = useState([
        'https://pyt-images.imgix.net/images/campaignitinerary/Amaya-Kuda-Rah-Package4.png?w=530&h=260&fit=crop&dpr=2&auto=format,compress,enhance&q=20',
        'https://pyt-images.imgix.net/images/campaignitinerary/Amaya-Kuda-Rah-Package3.png?w=530&h=260&fit=crop&dpr=2&auto=format,compress,enhance&q=20',
        'https://pyt-images.imgix.net/images/campaignitinerary/Maldives-Tour-Package-to-amaya-kuda-rah-with-Water-villa3.png?w=530&h=260&fit=crop&dpr=2&auto=format,compress,enhance&q=20',
        'https://pyt-images.imgix.net/images/campaignitinerary/Maldives-Tour-Package-to-amaya-kuda-rah-with-Water-villa4.png?w=530&h=260&fit=crop&dpr=2&auto=format,compress,enhance&q=20'
    ]);

    return (
        <Box className="space-y-8">
            <Box className="bg-blue-700 p-1 w-full h-20">
                <Navbar/>
            </Box>
            <Box className="w-full max-w-screen-xl m-auto space-y-4 p-6">
                <MarketplaceDetailHero title={id} tripImages={tripImages} />
                <MarketplaceDetailAcitivities response={response}/>
            </Box>
        </Box>
    )
}
