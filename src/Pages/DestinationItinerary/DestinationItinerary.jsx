import { Link, useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { MyContext } from "@/Components/Context/Context";
import { Box, CloseButton, Text } from "@chakra-ui/react";
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
        phone,
        resetValues,
        selectedCities
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
            selection : [ ],
            valid : selectedCities && selectedCities.length > 0
        }
    ];

    // useEffect(() => {
    //     if(days && members && !steps[2].valid) setCurrentStep(1);
    //     if(budget && accommodation && !steps[3].valid) setCurrentStep(2);
    //     if(transportation && !steps[4].valid) setCurrentStep(3);
    //     if(phone && sourceDestination) setCurrentStep(4);
    // }, [days, members, budget, accommodation, transportation, sourceDestination, phone]);
    

    return (
        <Box className="bg-theme-base pt-40 min-h-screen max-h-[9999px]">
            <Navbar className="bg-theme-header" />
            <Box className="max-w-screen-xl m-auto ">

                <Box className="w-full space-y-2">
                    <Box className="w-full flex flex-row items-center justify-between space-x-2 max-sm:justify-start max-sm:items-start pr-4">
                        <Box className="max-lg:justify-center flex flex-row flex-wrap gap-2">
                            {
                                steps.map((step, index) => (
                                    (step?.selection ?? []).map((selection, i) => (
                                        typeof selection == "string" && selection !== "" &&
                                            <Box onClick={() => setCurrentStep(index)} key={i} className="w-44 h-10 overflow-hidden flex flex-row items-center justify-center
                                            px-2 py-2 bg-theme-tertiary hover:bg-theme-fifth cursor-pointer border border-neutral-400
                                            font-bold rounded-[8px] text-sm max-md:text-xs">
                                                {typeof selection == "string" ? selection : ""}
                                            </Box>
                                    ))
                                ))
                            }
                        </Box>
                        
                        <Link to="/">
                            <CloseButton onClick={resetValues} />
                        </Link>
                    </Box>
                    <Box className="flex flex-row justify-start items-end">
                        {
                            steps.map((step, index) => (
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
                            ))
                        }
                    </Box>
                </Box>
            
                <div className="mb-6 text-lg">
                    {currentStep === 0 && <StepOneSection/>}
                    {currentStep === 1 && <StepTwoSection/>}
                    {currentStep === 2 && <StepThreeSection/>}
                    {currentStep === 4 && <StepFourSection sourceDestination={sourceDestination} setSourceDestination={setSourceDestination}/>}
                    {currentStep === 3 && <StepFiveSection/>}
                </div>
                
            </Box>
            {/* <Footer/> */}
        </Box>
    )
}
