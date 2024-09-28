import { useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
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
        setSourceDestination,
        phone
    } = useContext(MyContext);

    const { country } = useParams();

    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        {
            label : "Step 1",
            selection : [country, days, members],
            valid : true
        },
        {
            label : "Step 2",
            selection : [budget, accommodation],
            valid : days && members
        },
        {
            label : "Step 3",
            selection : [transportation],
            valid : budget && accommodation
        },
        {
            label : "Step 4",
            selection : [phone],
            valid : transportation
        },
        {
            label : "Step 5",
            selection : [ {  } ],
            valid : sourceDestination?.length > 5
        }
    ];

    // useEffect(() => {
    //     if(days && members && !steps[2].valid) setCurrentStep(1);
    //     if(budget && accommodation && !steps[3].valid) setCurrentStep(2);
    //     if(transportation && !steps[4].valid) setCurrentStep(3);
    //     if(phone && sourceDestination) setCurrentStep(4);
    // }, [days, members, budget, accommodation, transportation, sourceDestination, phone]);
    

    return (
        <Box className="bg-[#E0F7FA] pt-40 min-h-screen max-h-[9999px]">
            <Navbar className="bg-[#003b95]" />
            <Box className="max-w-screen-xl m-auto ">

                <Box className="flex flex-row max-sm:flex-wrap justify-between items-end">
                    {
                        steps.map((step, index) => (
                            <Box key={index} className="w-full space-y-2 ">
                                <Text className="font-bold text-sm space-x-2">
                                    {
                                        (step?.selection ?? []).map((selection, i) => (
                                            typeof selection == "string" && selection !== "" &&
                                                <span
                                                    onClick={() => setCurrentStep(index)}
                                                    key={i}
                                                    className="truncate px-2 py-1 bg-theme-tertiary hover:bg-theme-fifth cursor-pointer border border-neutral-400">
                                                        {typeof selection == "string" ? selection : ""}
                                                </span>
                                        ))
                                    }
                                </Text>
                                <Button
                                    key={index}
                                    disabled={!step.valid}
                                    onClick={() => setCurrentStep(index)}
                                    className={`py-1 px-0 text-center w-full h-1 rounded-sm border 
                                        ${currentStep === index || step.valid ? 'bg-blue-500 text-white' : 'bg-neutral-200'}
                                        hover:bg-blue-300
                                    `}
                                    >
                                </Button>
                            </Box>
                        ))
                    }
                </Box>
            
                <div className="mb-6 text-lg">
                    {currentStep === 0 && <StepOneSection/>}
                    {currentStep === 1 && <StepTwoSection/>}
                    {currentStep === 2 && <StepThreeSection/>}
                    {currentStep === 3 && <StepFourSection sourceDestination={sourceDestination} setSourceDestination={setSourceDestination}/>}
                    {currentStep === 4 && <StepFiveSection/>}
                </div>
                
            </Box>
            {/* <Footer/> */}
        </Box>
    )
}
