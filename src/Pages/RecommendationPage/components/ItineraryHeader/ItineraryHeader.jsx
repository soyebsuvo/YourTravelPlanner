import PropTypes from 'prop-types';

import { Box, Flex } from "@chakra-ui/react";

import { ItineraryHeaderRequestCallback } from "./ItineraryHeaderRequestCallback";
import { ItineraryHeaderFinalize } from "./ItineraryHeaderFinalize";
import { ItineraryHeaderActivity } from './ItineraryHeaderActivity';

export const ItineraryHeader = ({ itinerary, totalCost, request, stays, transfer, totalActivities }) => {
    return (
        <Box className="border border-neutral-400 p-6 mt-6 rounded-2xl bg-theme-secondary">
            <Flex className="flex flex-wrap justify-between items-center gap-4">
                <ItineraryHeaderActivity
                    stays={stays}
                    transfer={transfer}
                    totalActivities={totalActivities}
                />
                <Box className="flex flex-row justify-center flex-wrap gap-4">
                    <ItineraryHeaderRequestCallback itinerary={itinerary} />
                    <ItineraryHeaderFinalize
                        itinerary={itinerary}
                        request={request}
                        totalCost={totalCost}
                    />
                </Box>
            </Flex>
        </Box>
    )
}

ItineraryHeader.propTypes = {
    itinerary: PropTypes.any,
    totalCost: PropTypes.any,
    request: PropTypes.any,
    stays: PropTypes.any,
    transfer: PropTypes.any,
    totalActivities: PropTypes.any
}