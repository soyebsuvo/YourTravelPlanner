import { useState } from "react";

import { Box, HStack, Text } from "@chakra-ui/react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { IoIosArrowDown } from "react-icons/io";

const FILTERS = [
    {
        name : "Destinations",
        options : [
            {
                label : "5 start",
                value : "value 1"
            },
        ]
    },
    {
        name : "Budget",
        options : [
            {
                label : "Below 500 USD",
                value : "<500_USD"
            },
            {
                label : "500 USD - 1000 USD",
                value : "500_USD-1000_USD"
            },
            {
                label : "1000 USD TO 2,000 USD",
                value : "1000_USD-2000_USD"
            },
            {
                label : "2000 USD T0 5,000 USD",
                value : "2000_USD-5000_USD"
            },
            {
                label : "5,000 USD Or Avobe",
                value : "5000_USD>>5000"
            },
        ]
    },
    {
        name : "no of days",
        options : [
            {
                label : "3-5 days",
                value : "value 1"
            },
            {
                label : "4-8 days",
                value : "value 2"
            },
            {
                label : "9-12 days",
                value : "value 3"
            },
            {
                label : "13-16 days",
                value : "value 3"
            },
            {
                label : "Above 16 days",
                value : "value 3"
            }
        ]
    },
    {
        name : "hotel ratings",
        options : [
            {
                label : "5 start",
                value : "value 1"
            },
            {
                label : "4 star",
                value : "value 2"
            },
            {
                label : "3 star",
                value : "value 3"
            }
        ]
    },
]


export const TripFilter = () => {

    const [selectedValues, setSelectedValues] = useState({});

    const handleSelect = (filterName, value) => {
        setSelectedValues((prevValues) => ({
          ...prevValues,
          [filterName]: value,
        }));
    };

    return (
        <Box className="w-full p-2 space-x-4 flex flex-row items-center justify-start">

            <HStack className="gap-4 flex flex-wrap justify-between w-full">
                {
                    (FILTERS ?? []).map(({ name, options }, index) => (
                        <DropdownMenu key={index} modal>
                            <Box className="max-sm:w-full flex flow-row items-center justify-center max-sm:justify-between space-x-2">
                                <Text className="capitalize">{name}</Text>
                                <DropdownMenuTrigger className="min-w-48 flex flex-row items-center justify-between border border-neutral-500 hover:bg-neutral-100 py-1 rounded-lg px-6 capitalize">
                                    {selectedValues[name] ? options.find(option => option.value === selectedValues[name])?.label : options[0].label}
                                    <IoIosArrowDown />
                                </DropdownMenuTrigger>
                            </Box>
                            <DropdownMenuContent align="start" side="bottom" className="mt-2 bg-neutral-50 shadow-md shadow-neutral-600 rounded-lg min-w-96 p-2 z-50">
                                {
                                    (options ?? []).map((option, index) => (
                                        <DropdownMenuItem
                                            onClick={() => handleSelect(name, option?.value)}
                                            key={index}
                                            className="text-neutral-900 px-4 py-2 hover:bg-blue-50 rounded-lg !outline-none !border-none cursor-pointer
                                            capitalize"
                                        >
                                            {option?.label}
                                        </DropdownMenuItem>
                                    ))
                                }
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ))
                }
            </HStack>
          
        </Box>
    )
}
