import { Box, Flex, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const MarketplaceDetailHero = ({ title, tripImages }) => {
    return (
        <Box className="w-full max-w-screen-xl m-auto space-y-8 p-6">
            <Text className="text-black text-3xl font-bold">{title}</Text>

            <Flex className="flex flex-col md:flex-row items-start justify-center md:space-x-4 space-y-4 md:space-y-0">
                <Box className="md:w-2/3 w-full">
                    <Image
                        src={"https://pyt-images.imgix.net/images/campaignitinerary/Maldives-Tour-Package-to-amaya-kuda-rah-with-Water-villa.png?w=530&h=260&fit=crop&dpr=2&auto=format,compress,enhance&q=20"}
                        alt="trip image"
                        className="w-full rounded-lg"
                    />
                </Box>
                <Box className="md:w-1/3 w-full grid grid-cols-1 md:grid-cols-2 gap-4 max-md:!flex max-md:!flex-row max-md:justify-center max-md:!flex-wrap">
                    {
                        (tripImages ?? []).map((image, index) => <Image key={index} src={image} alt="trip image" className="w-full h-full object-cover max-md:w-4/12" />)
                    }
                </Box>
            </Flex>
        </Box>
    )
}

MarketplaceDetailHero.propTypes = {
    title: PropTypes.string.isRequired,
    tripImages: PropTypes.array.isRequired
}