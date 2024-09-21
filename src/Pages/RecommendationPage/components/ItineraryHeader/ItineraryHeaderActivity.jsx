import PropTypes from 'prop-types';

import { Box, Text } from "@chakra-ui/react";

import { FaCarSide } from "react-icons/fa";
import { LuPanelBottomInactive } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

export const ItineraryHeaderActivity = ({ stays, transfer, totalActivities }) => {
    return (
        <Box className="flex flex-row items-center justify-start gap-8">
            <Box className="text-green-500 flex flex-col justify-center items-center cursor-pointer gap-1 border-b-2 border-green-500">
                <SlCalender className="text-2xl max-xl:text-base" />
                <Text className="text-base max-xl:text-sm font-semibold">Day by Day</Text>
            </Box>
            <Box className="text-gray-500 flex flex-col justify-center cursor-pointer items-center gap-1">
                <MdOutlineDateRange className="text-2xl max-xl:text-base" />
                <Text className="text-base max-xl:text-sm font-semibold text-center">Stays {`(${stays})`}</Text>
            </Box>
            <Box className="text-gray-500 flex flex-col justify-center cursor-pointer items-center gap-1">
                <FaCarSide className="text-2xl max-xl:text-base" />
                <Text className="text-base max-xl:text-sm font-semibold text-center">Transfers {`{${transfer}}`}</Text>
            </Box>
            <Box className="text-gray-500 flex flex-col justify-center cursor-pointer items-center gap-1">
                <LuPanelBottomInactive className="text-2xl max-xl:text-base" />
                <Text className="text-base max-xl:text-sm font-semibold text-center">Activities {`(${totalActivities})`}</Text>
            </Box>                               
        </Box>
    )
}

ItineraryHeaderActivity.propTypes = {
    stays: PropTypes.any,
    transfer : PropTypes.any,
    totalActivities: PropTypes.any
}