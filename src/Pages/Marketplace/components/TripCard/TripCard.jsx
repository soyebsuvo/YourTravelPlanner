import PropTypes from 'prop-types';
import { Button, Divider, Heading, HStack, Image, Stack, Text, Card, CardBody, CardFooter } from "@chakra-ui/react";

import { FaStar } from "react-icons/fa";
import { IoIosPerson, IoMdCheckmark } from "react-icons/io";
import { Link } from 'react-router-dom';

export const TripCard = ({ title, thumbnail, description, price, rating, keypoints }) => {
    return (
        <Card className="w-80 max-2xl:w-72 max-xl:w-full bg-neutral-50 rounded-xl shadow-lg hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl flex flex-col items-center justify-between">
            <CardBody className="cursor-pointer group">
                <Link to={`/marketplace/${title}`} target='_blank' referrerPolicy='no-referrer' className='decoration-transparent'>
                    <Image
                        src={thumbnail}
                        alt='thumbnail not found'
                        borderRadius='lg'
                        className="z-0 rounded-tl-xl rounded-tr-xl m-auto"
                    />
                    <Stack mt='6' className="p-2 space-y-2">
                        <Heading className="text-lg text-black font-bold group-hover:underline"> {title} </Heading>
                        <Text className='max-lg:text-sm'> {description} </Text>
                        {/* KEY POINTS */}
                        <HStack className="flex-wrap">
                            {
                                (keypoints ?? []).map((keypoint, index) => (
                                    <Text className="flex flex-row items-center justify-between space-x-2 text-black text-xs bg-emerald-400/40 px-2 py-1 rounded-3xl max-lg:text-xs" key={index}>
                                        <IoMdCheckmark />
                                        {keypoint}
                                    </Text>
                                ))
                            }
                        </HStack>
                        {/* RATING */}
                        <HStack className='w-full'> {Array(rating).fill(0).map((_, index) => <FaStar className="text-yellow-400" key={index} />)}  </HStack>
                    </Stack>
                </Link>
            </CardBody>
            <Divider />
            <CardFooter className="w-full flex flex-row justify-between items-center p-4">
                <Text className="text-neutral-800 font-bold text-lg flex flex-row items-center justify-center space-x-2">
                    {price} <IoIosPerson />
                </Text>
                <Button className="bg-blue-500 hover:bg-blue-400 text-white px-4 rounded-lg py-2" variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
            </CardFooter>
        </Card>
    )
}

// Props validation

TripCard.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    keypoints: PropTypes.array
}