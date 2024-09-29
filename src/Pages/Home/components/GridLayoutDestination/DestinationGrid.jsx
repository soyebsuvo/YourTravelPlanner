import { Box, Text, Image, Heading, Grid, GridItem, HStack, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const DestinationGrid = () => (
    <Box className="max-w-screen-xl m-auto space-y-4">
        <Heading className="font-bold text-xl max-md:text-lg max-sm:text-base max-md:ml-2">Select Your Travel Vibe...</Heading>
        <Box className="w-full flex flex-row items-center justify-center max-sm:flex-wrap space-x-1">
            <Flex className="flex flex-col items-center justify-center w-[430px] max-sm:w-full space-y-1">
                <Link to={'/marketplace?keypoints=LUXURY+STAY'} target="_blank" referrerPolicy="no-referrer" className="w-full relative">
                    <Image
                        src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Luxury"
                        className="object-cover w-full h-full max-sm:h-96 rounded-xl"
                    />
                    <Box className="absolute bottom-0 text-white bg-black/40 w-full px-4">
                        <Text className="text-center text-lg font-bold max-lg:text-xs max-sm:text-base">Luxury Retreat</Text>
                    </Box>
                </Link>
                <HStack>
                    <Link to={'/marketplace?keypoints=SHARED+TRANSFER'} target="_blank" referrerPolicy="no-referrer" className="w-full relative">
                        <Image
                            src="https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="object-cover w-full h-full rounded-xl"
                        />
                        <Box className="absolute bottom-0 text-white bg-black/40 w-full px-4">
                            <Text className="text-center text-lg font-bold max-lg:text-xs max-sm:text-base">Beaches</Text>
                        </Box>
                    </Link>
                    <Link to={'/marketplace'} target="_blank" referrerPolicy="no-referrer" className="w-full relative">
                        <Image
                            src="https://images.pexels.com/photos/4275980/pexels-photo-4275980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Mountains"
                            className="object-cover w-full h-full rounded-xl"
                        />
                        <Box className="absolute bottom-0 text-white bg-black/40 w-full px-4">
                            <Text className="text-center text-lg font-bold max-lg:text-xs max-sm:text-base">Mountains</Text>
                        </Box>
                    </Link>
                </HStack>
            </Flex>
            <Link to={"/marketplace"} target="_blank" referrerPolicy="no-referrer" className="w-[640px] relative">
                <Image
                    src="https://images.pexels.com/photos/933118/pexels-photo-933118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Mauritius"
                    className="object-cover w-full h-full max-sm:h-96 rounded-xl"
                />
                <Box className="absolute bottom-0 text-white bg-black/40 w-full px-4">
                    <Text className="text-center text-lg font-bold max-lg:text-xs max-sm:text-base">Honeymoon</Text>
                </Box>
            </Link>
            <Box className="flex flex-col items-center justify-center w-[335px] max-sm:w-full space-y-1">
                <Link to={"/marketplace"} target="_blank" referrerPolicy="no-referrer" className="relative max-sm:w-full">
                    <Image
                        src="https://www.brides.com/thmb/XtpzOxzzDngwn1qRSds2mle6se8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fb-bachelor-party-ideas-men-drinking-getty-images-9b180b2d17ba482db82d0956fd9b180d.jpg"
                        alt="Mauritius"
                        className="object-cover w-full h-full max-sm:h-80 rounded-xl"
                    />
                    <Box className="absolute bottom-0 text-white bg-black/40 w-full px-4">
                        <Text className="text-center text-lg font-bold max-lg:text-xs max-sm:text-base">Bachelorette party</Text>
                    </Box>
                </Link>
                <Link to={"/marketplace"} target="_blank" referrerPolicy="no-referrer" className="relative max-sm:w-full">
                    <Image
                        src="https://images.pexels.com/photos/103889/pexels-photo-103889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Mauritius"
                        className="object-cover w-full h-full max-sm:h-80 rounded-xl"
                    />
                    <Box className="absolute bottom-0 text-white bg-black/40 w-full px-4">
                        <Text className="text-center text-lg font-bold max-lg:text-xs max-sm:text-base">Solo Soul Searching</Text>
                    </Box>
                </Link>
            </Box>
        </Box>
    </Box>
)