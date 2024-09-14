import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Slider from '@madzadev/image-slider';
import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";

import Lottie from 'lottie-react';

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/shadecn/ui/dialog';
import { Textarea } from '@/shadecn/ui/textarea';

import { GoDotFill } from 'react-icons/go';
import { FaAngleDown } from 'react-icons/fa';

import animationData from '../../../../public/flight-animation.json';
import fly_line from "../../../assets/fly_line.svg";
import { MyContext } from '@/Components/Context/Context';
import { TableDynamicImageSlide } from './TableDynamicImageSlide';

import '../../../index.css';

export const ItineraryTable = ({ response }) => {

    const { setResponse, images } = useContext(MyContext);
    
    const [activity, setIsActivity] = useState(0);
    
    const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [itenaryCityImages, setItenaryCityImages] = useState([
        {
            city: {
                name: 'Blida',
                images: [
                    {url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3dJhLSMxiSSiOBRP-YDLCIrMQvmJ6yRvuA&s"},
                    {url : "https://c8.alamy.com/comp/KE2GYM/tall-trees-in-the-forest-in-a-vertical-format-with-shadows-on-the-KE2GYM.jpg"},
                    {url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsA0St40MR0eS9rDW10jLcuqgGB_KbAPuUQ&s"}
                ]
            }
        },
        {
            city : {
                name: 'Oran',
                images: [
                    {url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qexeJBhTLCkNG6VLfrqg4cLFHIA3p_VgSg_psA4Q1Lt2Hauimikl9lfjubinw1iW3cs&usqp=CAU"},
                    {url : "https://us.123rf.com/450wm/wirestock/wirestock2312/wirestock231278781/220428897-a-vertical-shot-of-a-long-road-through-rural-mountain-areas-in-washington.jpg?ver=6"},
                    {url : "https://wallpapers.com/images/hd/vertical-pictures-r93cdchwdse79vvv.jpg"}
                ]
            }
        }
    ]);

    const [totalDaysOfFirstCity, setTotalDaysOfFirstCity] = useState(0);

    const handleAddActivity = () => {
        selectedItem.activity = activity;
        setIsActivityModalOpen(false);
        const response = [...response];
        setResponse(response);
    }


    useEffect(() => {
        /*
        if(response && response.itinerary)
        {
            const fetchImages= async () => {

                const destinations = response.itinerary.map(item => item.destination);

                if(!destinations || destinations.length === 0 || destinations === undefined) return;

                try
                {
                    const res = await fetch('http://localhost:3000/generateimages', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            cities: destinations 
                        })
                    })
        
                    const responseJSON = await res.json();
                    const destinationsImages = destinations.map((destination, index) => ({
                        city: {
                          name: destination,
                          images: responseJSON[index].images,
                        }
                    }));                           
                    setItenaryCityImages(destinationsImages);
                }
                catch (error) {
                    console.error({
                        message : "Error During Fetching Images For Itenary City",
                        error : error
                    });   
                }
            }
    
            fetchImages()
        }
            */
    }, [response])
    

    const RenderDailyActivities = React.memo(({ dailyActivities, setSelectedItem, setIsActivityModalOpen }) => {
        if (dailyActivities)
        {
            return (dailyActivities ?? []).map((activity, index) => (
                <HStack className="flex justify-between items-center" key={index}>
                    <Box className="border min-w-[90px] h-[140px] flex justify-center items-center text-gray-500 font-bold">
                        {activity.day}
                    </Box>
                    {activity && (activity.activities ?? []).map((item, i) => (
                        <Box key={i} className="border w-full h-[140px] p-3 overflow-hidden hover:bg-blue-50">
                            <Heading className="text-gray-500 font-bold">{item?.time}</Heading>
                            {item.activity.includes("Leisure") ? (
                                <Box>
                                    <Text className="text-gray-500">{item?.activity}</Text>
                                    <Text>{item?.cost}</Text>
                                    <Button
                                        className='text-blue-500 hover:text-blue-400 text-sm font-bold'
                                        onClick={() => {
                                            setSelectedItem(item);
                                            setIsActivityModalOpen(true);
                                        }}
                                    >
                                        Add Activity
                                    </Button>
                                </Box>
                            ) : (
                                <Box>
                                    <Text className="text-gray-500">{item?.activity}</Text>
                                </Box>
                            )}
                        </Box>
                    ))}
                </HStack>
            ));
        }
        return null;
    }, [response]);

    return (
        <Box className='w-full space-y-36'>
            {
                (response?.itinerary ?? []).map((city, index) => (
                    <Box key={index} className="relative forChild flex items-start justify-between my-2 h-auto border-2 rounded-2xl p-4">
                        <Box className="w-full md:w-[55%] h-auto text-xs md:text-base">
                            <Box className="main border-2 rounded-2xl w-full h-full">
                                
                                <HStack justifyContent={"space-between"} className='font-bold text-xs items-center p-3'>
                                    <Text>
                                        {city?.destination}
                                        <span className="ml-5 text-gray-500 font-semibold">
                                            {city?.travelDates?.start} to {city?.travelDates?.end}
                                        </span>
                                    </Text>
                                    <Text>{city?.destination} Trip Roadmap</Text>
                                </HStack>

                                <RenderDailyActivities
                                    dailyActivities={city?.dailyActivities ?? []}
                                    setSelectedItem={setSelectedItem}
                                    setIsActivityModalOpen={setIsActivityModalOpen}
                                />
                            </Box>
                        </Box>
                        <Box className="w-full md:w-[45%] h-full">
                            <TableDynamicImageSlide
                                cityImages={itenaryCityImages}
                                destination={city?.destination}
                                dailyActivities={city?.dailyActivities ?? []} 
                                cityDays={parseInt(city?.travelDates?.end.split(" ")[1], 10)}
                            />
                        </Box>
                        <Box className={`hidden md:block fly_line absolute -bottom-[145px] left-96 z-50 ${index % 2 !== 0 ? 'scale-x-[-1]' : ''}`}>
                            <Box className="absolute bottom-[42px] left-40 rotate-45">
                                <Lottie animationData={animationData} style={{ width: 100, height: 100 }} />
                            </Box>
                            <GoDotFill className="absolute -left-[14px] -top-[20px] text-gray-300 text-4xl" />
                            <img src={fly_line} alt="Fly_Line" className="w-[420px]" />
                            <FaAngleDown className="absolute -right-[11px] -bottom-[11px] text-gray-300 text-3xl" />
                        </Box>
                    </Box>
                ))
            }

            <Dialog open={isActivityModalOpen} onOpenChange={setIsActivityModalOpen} modal={true}>
                <DialogContent>
                    <DialogTitle>Add Activity</DialogTitle>  
                    <Textarea onChange={e => setIsActivity(e.target.value)} name="activity" cols="30" rows="5"></Textarea>
                    <Button onClick={() => handleAddActivity()} className="w-full py-2 bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200 rounded-lg">
                        Submit
                    </Button>
                </DialogContent>
            </Dialog>
        </Box>
    )
}

ItineraryTable.displayName = "ItineraryTable";
ItineraryTable.propTypes = { response: PropTypes.object.isRequired };