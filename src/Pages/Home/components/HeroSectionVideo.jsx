import { Box } from "@chakra-ui/react"

import WG_VIDEO from "../../../../public/video/WG_HOME_VIDEO.mp4";

export const HeroSectionVideo = () => {
    return (
        <Box className="max-w-screen-lg m-auto mt-5">
            <video autoPlay={true} muted loop src={WG_VIDEO} className="rounded-lg"></video>
        </Box>
    )
}
