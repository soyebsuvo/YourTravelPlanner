import { useContext, useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { MyContext } from "../Context/Context";

import Swal from "sweetalert2";
import PropTypes from 'prop-types';

import { Box } from "@chakra-ui/react";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/shadecn/ui/command";

import { TiTick } from "react-icons/ti";
import { SiGoogleassistant } from "react-icons/si";
import { MdDashboardCustomize, MdOutlineAttachMoney } from "react-icons/md";

import background from "../../assets/Pyramid-at-Louvre-Museum-Paris-France.jpg";


const fetchPlaces = async () => {
    const response = await fetch('https://server.wandergeniellm.com/places');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.places;
};

const Banner = ({ scrollHandler, durationScroll }) => {

    const { data: places, isLoading } = useQuery({
        queryKey: ["places"],
        queryFn: fetchPlaces,
        staleTime: 1000 * 60 * 5, // 5 minutes
        cacheTime: 1000 * 60 * 10, // 10 minutes
        refetchOnWindowFocus: false,
    });

    const [currentPlaces, setCurrentPlaces] = useState(places ?? []);
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
        <div className="">
            <div className="hero min-h-[500px]" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full relative">
                        <h1 className="mb-5 text-4xl font-bold">Discover <span className="damion-regular text-[#AFFF53]">Your Next</span> Adventure</h1>
                        
                        <Box className="relative">
                            <Command className="w-full">
                                <CommandInput disabled={isLoading} value={query} onValueChange={setQuery} placeholder="Type a command or search..." />
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

                    </div>
                </div>
            </div>
            <div className="bg-[#000] py-3 flex justify-evenly flex-wrap space-y-2 md:space-y-0 text-sm md:text-base items-center">
                <h3 className="flex justify-center items-center gap-1"><SiGoogleassistant className="text-white bg-[#00C684] p-[3px] rounded-full" /><span className="text-white">AI Powered Itinerary</span></h3>
                <h3 className="flex justify-center items-center gap-1"><MdDashboardCustomize className="text-white bg-[#00C684] p-[3px] rounded-full" /><span className="text-white">100% Customised Trips</span></h3>
                <h3 className="flex justify-center items-center gap-1"><TiTick className="text-white bg-[#00C684] p-[2px] rounded-full" /><span className="text-white">End-to-End Travel Solution</span></h3>
                <h3 className="flex justify-center items-center gap-1"><MdOutlineAttachMoney className="text-white bg-[#00C684] p-[2px] rounded-full" /><span className="text-white">Most Cost-Effective Deals</span></h3>
            </div>
        </div>
    );
};

export default Banner;

Banner.propTypes = {
    scrollHandler: PropTypes.func.isRequired,
    durationScroll: PropTypes.object.isRequired
}