import { useEffect, useState } from "react";

import { Box, HStack, Text } from "@chakra-ui/react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shadecn/ui/dropdown-menu"
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, useSearchParams } from "react-router-dom";
import { Input } from "@/shadecn/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/shadecn/ui/dialog";

const BUDGET_FILTERS = [ "Below 500 USD", "500 USD - 1000 USD", "1000 USD TO 2,000 USD", "2000 USD T0 5,000 USD", "5,000 USD Or Avobe" ];
const NO_OF_DAYS_FILTERS = [ "All", "3-5 days", "4-8 days", "9-12 days", "13-16 days", "Above 16 days" ];
const HOTEL_RATING_FILTERS = [ "All", "5 start", "4 star", "3 star" ];
const KEYPOINTS_FILTERS = [ "All", "POCKET FRIENDLY", "SHARED TRANSFER", "FAMILY FRIENDLY", "LUXURY STAY" ];

export const TripFilter = () => {

    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = new URLSearchParams(location.search);

    const filterBudget = queryParams.get('budget') ?? "All";
    const filterNoOfDays = queryParams.get('noOfDays') ?? "All";
    const filterHotelRating = queryParams.get('hotelRating') ?? "All";
    const filterKeyPoints = queryParams.get('keypoints') ?? "All";

    useEffect(() => {
        //searchParams.set('keypoints', KEYPOINTS_FILTERS[0]);
        //searchParams.set('budget', BUDGET_FILTERS[0]);
        //searchParams.set('noOfDays', NO_OF_DAYS_FILTERS[0]);
        //searchParams.set('hotelRating', HOTEL_RATING_FILTERS[0]);
        //setSearchParams(searchParams);
    }, []);

    useEffect(() => {
        //console.log(filterBudget, filterNoOfDays, filterHotelRating, filterKeyPoints);
    }, [filterBudget, filterNoOfDays, filterHotelRating, filterKeyPoints, searchParams, setSearchParams]);
    

    const FilterItem = ({ label, filterQuery, value, options, onFilter = () => {} }) => {
        return (
            <DropdownMenu modal>
                <Box className="max-sm:w-full flex flow-row items-center justify-center max-sm:justify-between space-x-2 bg-theme-tertiary pl-4 rounded-xl border border-theme-header overflow-hidden h-10">
                    <Text className="capitalize">{label}</Text>
                    <DropdownMenuTrigger className="flex flex-row items-center justify-between bg-theme-fourth py-1 rounded-lg px-6 capitalize">
                        {value}
                        <IoIosArrowDown />
                    </DropdownMenuTrigger>
                </Box>
                <DropdownMenuContent align="start" side="bottom" className="mt-2 border border-theme-header bg-theme-secondary shadow-md shadow-neutral-600 min-w-96 p-2 z-50 rounded-xl">
                    {
                        (options ?? []).map((option, index) => (
                            <DropdownMenuItem
                                onClick={() => {
                                    searchParams.set(filterQuery, option);
                                    setSearchParams(searchParams);
                                    onFilter(option);
                                }}
                                key={index}
                                className="text-black px-4 py-2 hover:!bg-theme-fourth rounded-lg !outline-none !border-none cursor-pointer
                                capitalize font-bold"
                            >
                                {option}
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }

    return (
        <Box className="w-full p-2 space-y-4">
            <Box className="w-full flex flex-row items-center justify-between max-sm:flex-col max-sm:space-y-2">
                <HStack className="gap-4 flex flex-wrap justify-start w-full">
                    <FilterItem label={"Budget"} value={filterBudget} filterQuery={'budget'} options={BUDGET_FILTERS}/>
                    <FilterItem label={"No Of Days"} value={filterNoOfDays} filterQuery={'noOfDays'} options={NO_OF_DAYS_FILTERS}/>
                    <FilterItem label={"Hotel Ratings"} value={filterHotelRating} filterQuery={'hotelRating'} options={HOTEL_RATING_FILTERS}/>
                    <FilterItem label={"Key Points"} value={filterKeyPoints} filterQuery={'keypoints'} options={KEYPOINTS_FILTERS} />
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
