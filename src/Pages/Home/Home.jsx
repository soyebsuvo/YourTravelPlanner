import { useContext, useEffect, useRef } from 'react';
import { MyContext } from '@/Components/Context/Context';

import { Box } from "@chakra-ui/react";

import { Banner } from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";

import Footer from "../../Components/Footer/Footer";
import Preloader from "../../Components/Preloader/Preloader";
import { ItineraryQuestionsSection } from './components/ItineraryQuestionsSection';
import { FavoriteDestinations } from './components/FavouriteDestination/FavoriteDestinations';

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
        <Box className='w-full'>
            <Navbar/>
            <Banner scrollHandler={scrollHandler} durationScroll={durationScroll}/>
            <Box className='space-y-4'>
                <FavoriteDestinations/>
                <ItineraryQuestionsSection/>
                <Footer/>
            </Box>
        </Box>
    )
}