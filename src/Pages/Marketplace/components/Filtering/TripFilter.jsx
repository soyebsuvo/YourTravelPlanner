import { useEffect, useState } from "react";

import { Box, HStack, Text } from "@chakra-ui/react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shadecn/ui/dropdown-menu"
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, useSearchParams } from "react-router-dom";
import { Input } from "@/shadecn/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/shadecn/ui/dialog";

const FILTERS = [
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
    {
        name : "keypoints",
        options : [
            {
                label : "POCKET FRIENDLY",
                value : "POCKET FRIENDLY"
            },
            {
                label : "SHARED TRANSFER",
                value : "SHARED TRANSFER"
            },
            {
                label : "FAMILY FRIENDLY",
                value : "FAMILY FRIENDLY"
            },
            {
                label : "LUXURY STAY",
                value : "LUXURY STAY"
            }
        ]
    },
]


export const TripFilter = ({ onFilter }) => {

    const [selectedValues, setSelectedValues] = useState({});

    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('keypoints');

    useEffect(() => {
        onFilter({filter : searchQuery});
    }, []);
    

    const handleSelect = (filterName, value) => {
        setSearchParams({ ...searchParams, [filterName]: value });
        onFilter({filter : value});
        setSelectedValues((prevValues) => ({
          ...prevValues,
          [filterName]: value,
        }));
    };

    return (
        <Box className="w-full p-2 space-y-4">
            <Box className="w-full flex flex-row items-center justify-between">
                <HStack className="gap-4 flex flex-wrap justify-start w-full">
                    {
                        (FILTERS ?? []).map(({ name, options }, index) => (
                            <DropdownMenu key={index} modal>
                                <Box className="max-sm:w-full flex flow-row items-center justify-center max-sm:justify-between space-x-2 bg-theme-tertiary pl-4 rounded-xl border border-theme-header">
                                    <Text className="capitalize">{name}</Text>
                                    <DropdownMenuTrigger className=" flex flex-row items-center justify-between bg-theme-fourth py-1 rounded-lg px-6 capitalize">
                                        {selectedValues[name] ? options.find(option => option.value === selectedValues[name])?.label : options[0].label}
                                        <IoIosArrowDown />
                                    </DropdownMenuTrigger>
                                </Box>
                                <DropdownMenuContent align="start" side="bottom" className="mt-2 border border-theme-header bg-theme-secondary shadow-md shadow-neutral-600 min-w-96 p-2 z-50 rounded-xl">
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
                <Dialog>
                    <DialogTrigger>
                        More
                    </DialogTrigger>
                    <DialogContent>

                    </DialogContent>
                </Dialog>
            </Box>
            <Input className="w-full h-12 rounded-xl border border-black" placeholder="Search Destination/Cities" />
        </Box>
    )
}
