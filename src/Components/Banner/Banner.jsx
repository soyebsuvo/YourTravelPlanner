import PropTypes from 'prop-types';

import { Box, Heading, Text } from "@chakra-ui/react";

import { TiTick } from "react-icons/ti";
import { SiGoogleassistant } from "react-icons/si";
import { MdDashboardCustomize, MdOutlineAttachMoney } from "react-icons/md";

import { BannerBackgroundCorousal } from "./components/BannerBackgroundCorousal";
import { BannerSearchInput } from "./components/BannerSearchInput";

export const Banner = ({ scrollHandler, durationScroll, disableInput }) => {

    const SITE_FEATURES = [
        {
            label : "AI Powered Itinerary",
            icon : <SiGoogleassistant className="text-white bg-emerald-400 p-[3px] rounded-full" />
        },
        {
            label : "100% Customised Trips",
            icon : <MdDashboardCustomize className="text-white bg-emerald-400 p-[3px] rounded-full" />
        },
        {
            label : "End-to-End Travel Solution",
            icon : <TiTick className="text-white bg-emerald-400 p-[3px] rounded-full" />
        },
        {
            label : "Most Cost-Effective Deals",
            icon : <MdOutlineAttachMoney className="text-white bg-emerald-400 p-[3px] rounded-full" />
        }
    ]

    return (
        <div>
            <Box className="hero min-h-[500px]" >
                <BannerBackgroundCorousal/>
                <Box className="hero-content text-center text-neutral-content max-w-full relative">
                    <Box className="max-w-full relative">
                        <Heading className="mb-5 text-4xl max-lg:text-2xl max-md:text-xl font-bold">Discover <span className="damion-regular text-lime-300">Your Next</span> Adventure</Heading>
                        {
                            disableInput ? <></> : <BannerSearchInput durationScroll={durationScroll} scrollHandler={scrollHandler} />
                        }
                    </Box>
                </Box>
            </Box>

            <Box className='bg-[#000] py-3'>
                <Box className="max-w-screen-xl m-auto flex justify-evenly flex-wrap gap-2 text-sm md:text-base items-center">
                    {
                        SITE_FEATURES.map((feature, index) => (
                            <Text className="text-sm flex justify-center items-center gap-1 max-md:text-xs" key={index}>
                                {feature.icon}
                                <span className="text-white">
                                    {feature.label}
                                </span>
                            </Text>
                        ))
                    }
                </Box>
            </Box>

        </div>
    );
};

Banner.propTypes = {
    scrollHandler: PropTypes.func.isRequired,
    durationScroll: PropTypes.object.isRequired
}