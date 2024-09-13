import { Box, HStack } from "@chakra-ui/react";
import Slider from '@madzadev/image-slider';
import { Fragment, useEffect, useState } from "react";

export const TableDynamicImageSlide = ({ cityDays, dailyActivities, destination, cityImages }) => {

    //const [cityImages, setCityImages] = useState([{}]);

    useEffect(() => {
        // const fetchImages= async () => {
        //     const res = await fetch('http://localhost:3000/generateimages', {
        //         method: 'POST',
        //         headers: {
        //           'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             cities: [destination]
        //         })
        //     }
        //     )

        //     const responseJSON = await res.json();
        //     //setCityImages(responseJSON.imageResponse);
        //     const filteredImamges = 
        //     setCityImages(responseJSON[0].images);
        // }

        // fetchImages()
    }, [])

    useEffect(() => {
        //console.log(images);
        const hasCurrentCity = cityImages.map(x => x.city.name).find(x => x === destination);

        if(hasCurrentCity !== '' || hasCurrentCity !== undefined)
        {
            // code
        }

        //console.log(hasCurrentCity)

        //console.log({destination : destination, endDate : cityDays})

    }, [cityImages, cityDays])
    
    

    const sliderImages = [
        {url: 'https://picsum.photos/seed/a/1080/1920'},
        {url: 'https://picsum.photos/seed/b/1080/1920'},
        {url: 'https://picsum.photos/seed/c/1080/1920'}
    ]

    // Generate Height Value For Slider FOR EX : DAY 4 => 700px AND DAY 7 => 300px...
    const getSliderHeight = (day) => {
        // extract the number from day string [Day 1] => [1]
        const dayNumber = parseInt(day.replace("Day ", ""), 10);
    
        if (dayNumber === 4 || cityDays < 4) return 600;
        if (dayNumber === 7) return 600;
    
        return null; // Return null or some default value if needed
    }    

    const SliderForDay = ({ day, sliderImages, key }) => {
        const height = getSliderHeight(day);
    
        if (height && sliderImages)
        {
            return (
                <Slider
                    imageList={sliderImages}
                    loop={true}
                    autoPlay={true}
                    bgColor='transparent'
                    showArrowControls={false}
                    showDotControls={false}
                    width={"100%"}
                    height={height}
                    autoPlayInterval={2000}
                    key={key}
                />
            );
        }
    
        return null;
    }
    

    return (
        <Box className="w-full space-y-4">
            {
                dailyActivities && dailyActivities.map((activity, i) => (
                    <SliderForDay 
                        key={i}
                        day={activity.day}
                        sliderImages={sliderImages}
                    />
                ))
            }
            {
                cityDays > 4 && (
                    <HStack className="space-x-2">
                        <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="calti" className={`w-6/12 h-[${(cityDays - 4) * 140}px]`} />
                        <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="calti" className={`w-6/12 h-[${(cityDays - 4) * 140}px]`} />
                    </HStack>
                )
            }
        </Box>
    )
}
