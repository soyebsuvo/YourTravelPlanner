import { useContext, useState, useRef, useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";
import { MyContext } from "../../Components/Context/Context";

import TravelPackageDetails from "../../Components/TravelPackageDetails/TravelPackageDetails";
import Loader from "../../Components/Loader/Loader";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import { ItineraryTable } from "./components/ItenaryTable";
//import { ItineraryHeader } from "./components/";
import { Box, VStack } from "@chakra-ui/react";
import { ChatBot } from "./components/ChatBot";
import { ItineraryHeader } from "./components/ItineraryHeader/ItineraryHeader";
import { Banner } from "@/Components/Banner/Banner";

const RecommendationPage = () => {

    const { response, setResponse, images, setImages } = useContext(MyContext);
    const { search } = useLocation();
    const query = new URLSearchParams(search)
    const itinerary = query.get("itinerary");
    const [request, setRequest] = useState();
    const [ callback, setCallback ] = useState();
    // 668bb9e70680f8317a5eb434 testing
    useEffect(() => {
        if (itinerary) {
            const getRequestedItineraryById = async () => {
                setResponse({})
                setImages([])
                const res = await axios.get(`https://server.wandergeniellm.com/requestedbyid?id=${itinerary}`);
                console.log(res.data);
                console.log(res.data[0]);
                setRequest(res.data[0]?.request);
                setResponse(res.data[0]?.response);
                setImages(res.data[0]?.images);
                setCallback(res.data[0]?.callback);
            }
            getRequestedItineraryById();
        }
    }, [itinerary, setResponse, setImages])

    const element1Refs = useRef([]);
    const element2Refs = useRef([]);
    const [heights, setHeights] = useState([]);


    useEffect(() => {
        if (response) {
            const newHeights = element1Refs.current.map(el => el?.offsetHeight || 0);
            setHeights(newHeights);
        }
    }, [response]);

    useEffect(() => {
        if (response) {
            element2Refs.current.forEach((el, index) => {
                if (el) {
                    el.style.height = `${heights[index]}px`;
                }
            });
        }
    }, [heights, response, images]);


    if (!response) {
        return <Loader /> // Display loading message while response is being fetched
    }


    try {
        return (
            <Box className="w-full bg-theme-base">
                <Navbar />
                {/* <SubBanner /> */}
                <Banner disableInput={true} />
                <Box className="max-w-7xl mx-auto md:px-14 py-4 mt-14 relative border border-theme-header rounded-2xl px-6 mb-8">
                    
                    <Suspense>
                        <ItineraryHeader
                            request={request}
                            callback={callback}
                            itinerary={itinerary}
                            stays={response?.itinerary?.length}
                            transfer={response?.itinerary?.length + 1}
                            totalActivities={response?.totalActivities}
                            totalCost={response?.totalCost}
                        />
                    </Suspense>

                    <VStack className="py-2 space-y-12">
                        <Suspense>
                            <ItineraryTable response={response} />
                        </Suspense>
                        <TravelPackageDetails />
                    </VStack>

                    <Suspense>
                        <ChatBot/>
                    </Suspense>

                </Box>
                <Footer />
            </Box>

        );
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return <p>Error: Invalid response format</p>; // Display error message if JSON parsing fails
    }
};

export default RecommendationPage;