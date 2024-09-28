import { useContext, useEffect, useRef } from 'react';
import { MyContext } from '@/Components/Context/Context';

import { Box } from "@chakra-ui/react";

import { Banner } from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";

import Footer from "../../Components/Footer/Footer";
import Preloader from "../../Components/Preloader/Preloader";
import { ItineraryQuestionsSection } from './components/ItineraryQuestionsSection';
import { TravelHotspot } from './components/TravelHotspots/TravelHotspot';
import { HeroSectionVideo } from './components/HeroSectionVideo';
import { DestinationGrid } from './components/GridLayoutDestination/DestinationGrid';
import { PromotionalBanner } from './components/PromotionalBanner/PromotionalBanner';

export default function Home()
{
    const { loading, } = useContext(MyContext);
    
    useEffect(() => {
        window.addEventListener('load', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }, [])
    
    const durationScroll = useRef();

    const scrollHandler = (element) => {
        window.scrollTo({
            top: element.current.offsetTop - 120, behavior: "smooth"
        })
    }

    if(loading) {
        return <Preloader />
    }

    return (
        <Box className='w-full bg-theme-base'>
            <PromotionalBanner/>
            <Box className='relative'>
                <Navbar/>
                <Banner scrollHandler={scrollHandler} durationScroll={durationScroll}/>
            </Box>
            <Box className='space-y-16'>
                <HeroSectionVideo/>
                <TravelHotspot/>
                <DestinationGrid/>
                <ItineraryQuestionsSection/>
                <Footer/>
            </Box>
        </Box>
    )
}