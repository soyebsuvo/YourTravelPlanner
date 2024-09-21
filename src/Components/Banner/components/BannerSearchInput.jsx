import { useContext, useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { MyContext } from "../../Context/Context";

import Swal from "sweetalert2";
import PropTypes from 'prop-types';

import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/shadecn/ui/command";
import { Box } from "@chakra-ui/react";

const fetchPlaces = async () => {
    const response = await fetch('https://server.wandergeniellm.com/places');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.places;
};

export const BannerSearchInput = ({scrollHandler, durationScroll}) => {

    // const { data: places, isLoading } = useQuery({
    //     queryKey: ["places"],
    //     queryFn: fetchPlaces,
    //     staleTime: 1000 * 60 * 5, // 5 minutes
    //     cacheTime: 1000 * 60 * 10, // 10 minutes
    //     refetchOnWindowFocus: false,
    // });

    const [currentPlaces, setCurrentPlaces] = useState([]);
    const [query, setQuery] = useState("");

    const [isPlaceSelected, setIsPlaceSelected] = useState(false);

    const { setPlace, setFilteredContinent, setNextCity, selectedCities, setSelectedCities } = useContext(MyContext);
    
    useEffect(() => {
        if(query == "") {
            setIsPlaceSelected(false);
        }
        fetch('dataset.json').then(res => res.json())
            .then((data) => {
                const filtered = data?.places?.filter((place) => place?.toLowerCase().includes(query?.toLowerCase()))
                setCurrentPlaces(query ? filtered : []);
            }
        );
    }, [query])

    const handleSubmit = (item) => {
        setIsPlaceSelected(true);
        setPlace(item);
        setNextCity(item);
        
        if (item.includes(",")) {
            const firstCity = item.split(",")[0];
            setSelectedCities([...selectedCities, firstCity])
        }

        handleSearch(item);
        setQuery(item)
    };

    const handleSearch = async (place) => {
        try {
            await fetch(`https://server.wandergeniellm.com/continent/${place}`)
                .then(response => response.json())
                .then(data => {
                    setFilteredContinent(data);
                    // setOpen(true);
            });    
        }
        catch (error) {
            console.error(error);
            Swal.fire({
                title: "Oops!",
                text: "Something went wrong. Please try again later.",
                icon: "error",
                confirmButtonText: "OK",
            })
        }
    };

    return (
        <Box className="relative">
            <Command className="w-full">
                <CommandInput disabled={false} value={query} onValueChange={setQuery} placeholder="Search Destination" />
                <CommandList hidden={isPlaceSelected || query == ""} className="absolute mt-10 bg-neutral-50 w-full shadow border-2 border-black">
                    <CommandEmpty>No results found.</CommandEmpty>
                    {
                        (currentPlaces ?? []).map((item, index) => (
                            <CommandItem onSelect={() => {handleSubmit(item); scrollHandler(durationScroll) }} className="text-left font-semibold p-2 cursor-pointer my-1 border-2 border-transparent transition-all duration-300 rounded-lg w-full hover:border-2 hover:border-blue-400" key={`${item}${Math.random() * index + 1}`}>
                                {item}
                                 
                            </CommandItem>
                        ))
                    }
                </CommandList>
            </Command>
        </Box>
    )
}

BannerSearchInput.propTypes = {
    scrollHandler: PropTypes.func.isRequired,
    durationScroll: PropTypes.object.isRequired
}