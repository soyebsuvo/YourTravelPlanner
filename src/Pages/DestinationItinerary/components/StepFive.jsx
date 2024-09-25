import { MyContext } from "@/Components/Context/Context";
import { Input } from "@/shadecn/ui/input";
import { useContext, useEffect, useMemo, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const StepFiveSection = () => {

    const { filteredContinent, setFilteredContinent, selectedCities, setSelectedCities, setNextCity, setPlace } = useContext(MyContext)
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const citiesPerPage = 4;

    const allCities = useMemo(() => {
        return filteredContinent?.countries?.flatMap(country => country.cities);
    }, [filteredContinent]);

    const filteredCities = useMemo(() => {
        return allCities?.filter(city => city?.toLowerCase().includes(searchQuery?.toLowerCase()));
    }, [allCities, searchQuery]);

    const totalPages = Math.ceil(filteredCities?.length / citiesPerPage);

    const displayedCities = filteredCities?.slice(
        currentPage * citiesPerPage,
        (currentPage + 1) * citiesPerPage
    );

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(0);
    };

    console.log(filteredContinent);

    const { country } = useParams();

    useEffect(() => {

        setPlace(country);
        setNextCity(country);

        const fetchPlaces = async (place) => {
            try {
                await fetch(`https://server.wandergeniellm.com/continent/${country}`)
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
        
        fetchPlaces()
      
    }, [])
    
    

    //console.log(selectedCities)
    //console.log(selectedCities.join(', '))

    const handleSelectCity = (city) => {
        if (selectedCities.includes(city.split(",")[0])) {
            return Swal.fire({
                title: "Oops!",
                text: "Already Selected",
                icon: "error"
            });
        } else if (selectedCities.length > 6) {
            return Swal.fire({
                title: "Oops!",
                text: "You can not select more then 7 cities",
                icon: "error"
            });
        } else if (city.includes(",")) {
            const cityName = city.split(",")[0];
            setSelectedCities(prev => [...prev, cityName])
            setNextCity(city)
        } else {
            setSelectedCities(prev => [...prev, city])
            setNextCity(city)
        }
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
        
    }
    const handleBubbles = (item) => {
        let index = selectedCities.indexOf(item);

        if (index !== -1) {
            const updatedCities = [...selectedCities];
            updatedCities.splice(index, 1);
            setSelectedCities(updatedCities);
        }

    }

    return (
        <div>
            <Input
                type="text"
                placeholder="Find a city"
                className="inpt-city text-black shadow outline-none rounded-xl px-14 py-3 w-full my-8"
                value={searchQuery}
                onChange={handleSearchChange}
            />

                <div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-6">
                    {displayedCities?.map((city, index) => (
                        <div key={index} className={`bg-slate-50 rounded-xl shadow-xl border duration-150 hover:border hover:border-[#00B277] hover:bg-[#00b2771f]`}>
                            <div onClick={() => handleSelectCity(city)} className="p-3 items-center text-center">
                                <h2 className="text-black text-base text-center font-semibold">{city}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="my-8">
                    {selectedCities.length > 0 && <div className="border rounded-2xl p-2 my-4 flex flex-wrap gap-3">
                        {selectedCities.map((item, index) => {
                            return <span className="border bg-blue-500 text-white px-3 py-1 mr-3 rounded-full space-x-2" key={index}>{item} <GiCancel onClick={() => handleBubbles(item)} className="inline mb-1 cursor-pointer" /></span>
                        })}
                    </div>}
                </div>
        </div>
    )
}
