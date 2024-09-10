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
                        <Button className="bg-red-400 w-5/12">Buy Now</Button>
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