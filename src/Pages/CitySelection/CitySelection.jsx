import { useContext, useMemo, useState } from "react";
import { MyContext } from "../../Components/Context/Context";
import { IoSearch } from "react-icons/io5";
import Submit from "../../Components/Submit/Submit";
import Swal from "sweetalert2";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";

const CitySelection = () => {
    const { filteredContinent, days, members, budget, accommodation, transportation, selectedCities, setSelectedCities, nextCity, setNextCity } = useContext(MyContext)
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
        <div className="bg-orange-200 min-h-screen p-8">
            <div className="max-w-5xl mx-auto px-8 relative bg-slate-200 rounded-2xl pt-8 text-black md:h-[530px]">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="text-2xl font-bold">Other cities in {filteredContinent?.continent}</h2>
                    <Link to={"/"}><span className=""><GiCancel className="text-gray-500 text-[25px]" /></span></Link>
                </div>
                <div className="relative">
                    <span className="absolute bottom-[43px] left-[20px]"><IoSearch className="text-gray-500 text-[25px]" /></span>
                    <input
                        type="text"
                        placeholder="Find a city"
                        className="inpt-city text-black bg-[#FFFFFF] shadow outline-none rounded-xl px-14 py-3 w-full my-8"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <h3 className="text-md font-bold text-center mb-5">{nextCity?.includes(",") ? `Cities best connected to ${nextCity?.includes(",") ? nextCity?.split(",")[0] : nextCity}...` : `Or, Start with this popular choices`}</h3>
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
                {selectedCities.length > 0 && <Submit days={days} members={members} budget={budget} accommodation={accommodation} transportation={transportation} />}
            </div>
        </div>
    );
};

export default CitySelection;