import { useParams } from "react-router-dom";

import { Box, Text } from "@chakra-ui/react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { useContext, useRef, useState } from "react";
import Duration from "@/Components/Duration/Duration";
import Members from "@/Components/Members/Members";
import { MyContext } from "@/Components/Context/Context";
import { Button } from "@/shadecn/ui/button";
import Budget from "@/Components/Budget/Budget";
import Accommodation from "@/Components/Accommodation/Accommodation";
import Transportation from "@/Components/Transportation/Transportation";
import { Input } from "@/shadecn/ui/input";

const StepFour = ({ sourceDestination, setSourceDestination }) => {
    return (
      <div className="flex flex-row items-center justify-center gap-4 p-8 bg-neutral-100 mt-10">
        <div className="w-full border border-blue-400 py-4 px-4 shadow-xl rounded-xl">
          <div className="space-y-4">
            <h2 className="text-md md:text-xl font-semibold text-center">
              What could be your source station?<span className="text-red-500">*</span>
            </h2>
            <input
              className="w-full h-10 p-2 border"
              placeholder="Source Destination"
              value={sourceDestination}
              onChange={(e) => setSourceDestination(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full border border-blue-400 py-4 px-4 shadow-xl rounded-xl">
          <div className="space-y-4">
            <h2 className="text-md md:text-xl font-semibold text-center">
              Tentative travel dates?<span className="text-red-500">*</span>
            </h2>
            <input
              type="date"
              className="w-full h-10 p-2 border"
              placeholder="Tentative travel dates"
            />
          </div>
        </div>
      </div>
    );
  };

export default function DestinationItinerary()
{
    const { country } = useParams();

    const {
        days,
        members,
        budget,
        accommodation,
        transportation,
        setDays,
        setMembers,
        setBudget,
        setAccommodation,
        setTransportation,
        place,
        sourceDestination,
        setSourceDestination
    } = useContext(MyContext);

    const durationScroll = useRef();
    const membersScroll = useRef();

    const scrollHandler = (element) => {}

    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
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
            selection : [ { a : transportation, b : "AQA" } ],
            valid : budget && accommodation
        },
        {
            label : "Step 4",
            selection : [ { a : "Source", b : "Date" } ],
            valid : transportation
        },
        {
            label : "Step 5",
            selection : [ {  } ],
            valid : sourceDestination?.length > 5
        }
    ];

    
    const StepOne = () => {
        return (
            <div className="flex flex-row items-center justify-center gap-4 p-8 bg-neutral-100 mt-10">
                <Duration value={days} setValue={setDays} scrollHandler={scrollHandler} membersScroll={durationScroll} durationScroll={durationScroll} />
                <Members value={members} setValue={setMembers} membersScroll={membersScroll} scrollHandler={scrollHandler} budgetScroll={membersScroll} />
            </div>
        )
    }

    const StepTwo = () => {
        return (
            <div className="flex flex-row items-center justify-center gap-4 p-8 bg-neutral-100 mt-10">
                <Budget value={budget} setValue={setBudget} scrollHandler={scrollHandler} membersScroll={durationScroll} durationScroll={durationScroll} />
                <Accommodation value={accommodation} setValue={setAccommodation} membersScroll={membersScroll} scrollHandler={scrollHandler} budgetScroll={membersScroll} />
            </div>
        )
    }

    const StepThree = () => {
        return (
            <div className="flex flex-row items-center justify-center gap-4 p-8 bg-neutral-100 mt-10">
                <Transportation value={transportation} setValue={setTransportation} scrollHandler={scrollHandler} membersScroll={durationScroll} durationScroll={durationScroll} />
                <div className="md:w-1/2 flex flex-col items-center justify-center">
                    <h2 className='text-md md:text-2xl font-bold text-center my-3'>Any Specific Need ? (Optional)</h2>
                    <textarea id="specificNeed" cols="30" rows="5" maxLength="99"
                        className="w-full text-2xl p-5 resize-none shadow focus:outline-none my-5 rounded h-full"
                        placeholder="Wrtie Down Your Need...">    
                    </textarea>
                </div>
            </div>
        )
    }

    return (
        <Box>
            <Navbar className="bg-blue-600" />
            <Box className="max-w-screen-xl m-auto mt-40 mb-20">

                <Box className="flex flex-row max-sm:flex-wrap justify-between items-end mb-6 gap-4">
                    {
                        steps.map((step, index) => (
                            <Box key={index} className="w-full space-y-2 px-0.5">
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
                                    className={`px-2 text-center w-56 h-1 rounded-sm border 
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
                    {currentStep === 0 && <StepOne/>}
                    {currentStep === 1 && <StepTwo/>}
                    {currentStep === 2 && <StepThree/>}
                    {currentStep === 3 && (
                      <StepFour
                        sourceDestination={sourceDestination}
                        setSourceDestination={setSourceDestination}
                      />
                    )}
                </div>
                
            </Box>
            <Footer/>
        </Box>
    )
}
