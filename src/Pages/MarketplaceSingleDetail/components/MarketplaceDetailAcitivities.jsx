import { Suspense } from "react";
import PropTypes from "prop-types";

import { Box, Button, HStack } from "@chakra-ui/react";
import { ItineraryActivities } from "./ItineraryActivities";


export const MarketplaceDetailAcitivities = ({ response }) => {

    if(response) {
        return (
            <Suspense>
                <Box className="w-full max-w-screen-xl m-auto space-y-4">
                    <HStack alignItems={"start"} justify={"space-between"} className="w-full">
                        <ItineraryActivities response={response} />
                        <Box className="w-5/12 bg-neutral-100 rounded-md p-2">
                            <Button className="bg-blue-500 text-white hover:bg-blue-400 px-4 h-12 rounded-lg w-full">Buy Now</Button>
                        </Box>
                    </HStack>
                </Box>
            </Suspense>
        )
    }
    else {
        return <>NOT FOUND</>
    }
}

MarketplaceDetailAcitivities.propTypes = {
    response: PropTypes.object.isRequired,
};