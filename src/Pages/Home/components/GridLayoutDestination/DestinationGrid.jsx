import { Box, Text, Image, Heading, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const DestinationGrid = () => (
    <Box className="max-w-screen-xl m-auto space-y-4">
        <Heading className="font-bold text-xl">Visa Free Destination</Heading>
        <Box className="w-full max-md:w-9/12 max-md:m-auto max-sm:w-11/12">
            <Grid className="grid grid-cols-6 max-md:grid-cols-3 gap-1 max-sm:h-full max-sm:gap-4">
                <GridItem className="col-span-2 max-md:col-span-3 row-span-2 relative overflow-hidden rounded-lg">
                    <Link to={'/destinationItinerary'} target="_blank" referrerPolicy="no-referrer">
                        <Image
                            src="https://pyt-images.imgix.net/Frame_4541mauritius_83c71b9921.png?auto=format&fit=crop&w=384&q=75"
                            alt="Mauritius"
                            className="object-cover w-full h-full"
                        />
                        <Box className="absolute bottom-0 text-white bg-black/40 w-full px-4">
                            <Text className="text-lg font-bold max-lg:text-xs max-sm:text-base">Mauritius</Text>
                            <Text className="text-lg max-lg:text-xs max-sm:text-sm">From ₹62,500</Text>
                        </Box>
                    </Link>
                </GridItem>
                <GridItem className="col-span-2 max-md:col-span-3 relative overflow-hidden rounded-lg">
                    <Link to={"/destinationItinerary"} target="_blank" referrerPolicy="no-referrer">
                        <Image
                            src="https://pyt-images.imgix.net/Frame_4541mauritius_83c71b9921.png?auto=format&fit=crop&w=384&q=75"
                            alt="Maldives"
                            className="object-cover w-full h-full"
                        />
                        <Box className="absolute bottom-0 text-white bg-black/40 w-full px-4">
                            <Text className="text-lg font-bold max-lg:text-xs max-sm:text-base">Maldives</Text>
                            <Text className="text-sm max-lg:text-xs max-sm:text-sm">From ₹43,854</Text>
                        </Box>
                    </Link>
                </GridItem>
                <GridItem className="col-span-2 row-span-2 relative overflow-hidden rounded-lg">
                    <Link to="/destinationItinerary" target="_blank" referrerPolicy="no-referrer">
                        <Image
                            src="https://pyt-images.imgix.net/Frame_4541mauritius_83c71b9921.png?auto=format&fit=crop&w=384&q=75"
                            alt="Thailand"
                            className="object-cover w-full h-full"
                        />
                        <Box className="absolute bottom-0 text-white bg-black/40 w-full px-4">
                            <Text className="text-lg font-bold max-lg:text-xs max-sm:text-base">Thailand</Text>
                            <Text className="text-sm max-lg:text-xs max-sm:text-sm">From ₹37,500</Text>
                        </Box>
                    </Link>
                </GridItem>
                <GridItem className="col-span-1 relative overflow-hidden rounded-lg">
                    <Link to="/destinationItinerary" target="_blank" referrerPolicy="no-referrer">
                        <Image
                            src="https://pyt-images.imgix.net/Frame_4541mauritius_83c71b9921.png?auto=format&fit=crop&w=384&q=75"
                            alt="Malaysia"
                            className="object-cover w-full h-full"
                        />
                        <Box className="absolute bottom-0 left-0 text-white bg-black/40 w-full px-4">
                            <Text className="text-lg font-bold max-lg:text-xs">Malaysia</Text>
                            <Text className="text-sm max-lg:text-xs">From ₹48,750</Text>
                        </Box>
                    </Link>
                </GridItem>
                <GridItem className="rounded-lg relative col-span-1 overflow-hidden">
                    <Link to={"/destinationItinerary"} target="_blank" referrerPolicy="no-referrer">
                        <Image
                            src="https://pyt-images.imgix.net/Frame_4541mauritius_83c71b9921.png?auto=format&fit=crop&w=384&q=75"
                            alt="Fiji"
                            className="object-cover w-full h-full"
                        />
                        <Box className="absolute bottom-0 text-white bg-black/40 w-full px-4">
                            <Text className="text-lg font-bold max-lg:text-xs">Fiji</Text>
                            <Text className="texxt-sm max-lg:text-xs">From ₹111,338</Text>
                        </Box>
                    </Link>
                </GridItem>
            </Grid>
        </Box>
    </Box>
)
