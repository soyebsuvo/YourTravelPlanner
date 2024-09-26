import { useParams } from "react-router-dom";

import { useContext, useState } from "react";
import { MyContext } from "@/Components/Context/Context";
import { Box, Text } from "@chakra-ui/react";
import { Button } from "@/shadecn/ui/button";

import { StepOneSection } from "./components/StepOne";
import { StepTwoSection } from "./components/StepTwo";
import { StepThreeSection } from "./components/StepThree";
import { StepFourSection } from "./components/StepFour";
import { StepFiveSection } from "./components/StepFive";

import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

export default function DestinationItinerary()
{
    const {
        days,
        members,
        budget,
        accommodation,
        transportation,
        sourceDestination,
        setSourceDestination
    } = useContext(MyContext);

    const { country } = useParams();

    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        {
            label : "Step 0",
            selection : [ { a : country, } ],
            valid : true
        },
        {
            label : "Step 1",
            selection : [ { a : days, b : members } ],
            valid : true
        },
        {
            label : "Step 2",
            selection : [ { a : budget, b : accommodation } ],
            valid : days && members
        },
        {
            label : "Step 3",
            selection : [ { a : transportation, b : "" } ],
            valid : budget && accommodation
        },
        {
            label : "Step 4",
            selection : [ { a : "", b : "" } ],
            valid : transportation
        },
        {
            label : "Step 5",
            selection : [ {  } ],
            valid : sourceDestination?.length > 5
        }
    ];

    return (
        <Box className="bg-[#f7f8fb] pt-40">
            <Navbar className="bg-blue-600" />
            <Box className="max-w-screen-xl m-auto mb-20">

                <Box className="flex flex-row max-sm:flex-wrap justify-between items-end mb-6">
                    {
                        steps.map((step, index) => (
                            <Box key={index} className="w-full space-y-2">
                                <Text className="font-bold text-sm ml-2 space-x-2">
                                    {
                                        step?.selection[0]?.a && <span className="px-2 bg-neutral-200">{step.selection[0].a}</span>
                                    }
                                    {
                                        step?.selection[0]?.b && <span className="px-2 bg-neutral-200">{step.selection[0].b}</span>
                                    }
                                </Text>
                                <Button
                                    key={index}
                                    disabled={!step.valid}
                                    onClick={() => setCurrentStep(index)}
                                    className={`py-1 px-0 text-center w-full h-1 rounded-sm border 
                                        ${currentStep === index || step.valid ? 'bg-green-500 text-white' : 'bg-neutral-200'}
                                        hover:bg-green-400
                                    `}
                                    >
                                </Button>
                            </Box>
                        ))
                    }
                </Box>
            
                <div className="mb-6 text-lg">
                    {currentStep === 0 && <StepOneSection/>}
                    {currentStep === 1 && <StepOneSection/>}
                    {currentStep === 2 && <StepTwoSection/>}
                    {currentStep === 3 && <StepThreeSection/>}
                    {currentStep === 4 && <StepFourSection sourceDestination={sourceDestination} setSourceDestination={setSourceDestination}/>}
                    {currentStep === 5 && <StepFiveSection/>}
                </div>
                
            </Box>
            <Footer/>
        </Box>
    )
}
