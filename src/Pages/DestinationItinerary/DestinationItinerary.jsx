import { useParams } from "react-router-dom";

import { Box } from "@chakra-ui/react";

export default function DestinationItinerary()
{
    const { country } = useParams();

    return (
        <Box>
            {country}
        </Box>
    )
}
