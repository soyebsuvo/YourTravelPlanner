import { Box, Heading } from "@chakra-ui/react";

import WG_VIDEO from "../../../../public/video/WG_HOME_VIDEO.mp4";

export const HeroSectionVideo = () => {
    return (
        <Box className="w-full p-6 bg-emerald-400/20">
            <Box className="max-w-screen-xl m-auto space-y-8 mb-5">
                <Heading className="text-4xl max-md:text-2xl max-sm:text-xl font-bold text-center">How It Works ?</Heading>
                <video autoPlay={true} muted loop src={WG_VIDEO} className="w-10/12 m-auto rounded-lg shadow-black/40 shadow-md"></video>
            </Box>
        </Box>
    )
}
