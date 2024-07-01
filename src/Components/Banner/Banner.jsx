// import background from "../../assets/desktop_1_min_1_9896841547.avif"
// import background from "../../assets/Getty.jpg"
import background from "../../assets/Pyramid-at-Louvre-Museum-Paris-France.jpg"
import { IoSearch } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { useContext, useEffect, useState } from "react";
import { FaFacebookF, FaStar } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../Context/Context";
import PropTypes from 'prop-types';
// import CityModal from "../CityModal/CityModal";
// import axios from "axios";
// 
// function initPlacesAPI() {
//     const apiKey = '';
//     const placesAPI = `https://maps.googleapis.com/maps/api/place`;

//     // Function to fetch autocomplete predictions
//     async function getPlacePredictions(input) {
//         try {
//             const url = `${placesAPI}/autocomplete/json?input=${input}&key=${apiKey}`;
//             const response = await fetch(url);
//             const data = await response.json();
//             if (response.ok) {
//                 return data.predictions;
//             } else {
//                 throw new Error(data.error_message || 'Failed to fetch predictions');
//             }
//         } catch (error) {
//             console.error('Error fetching predictions:', error);
//             return [];
//         }
//     }

//     return {
//         getPlacePredictions
//     };
// }



const Banner = ({scrollHandler, durationScroll}) => {

    // const [query, setQuery] = useState('');
    // const [places, setPlaces] = useState([]);

    // const handleSearch = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:5000/api/places', {
    //             params: { query },
    //         });
    //         setPlaces(response.data.candidates);
    //     } catch (error) {
    //         console.error('Error fetching places:', error);
    //     }
    // };

    // const [continents, setContinents] = useState([]);
    // const [countries, setCountries] = useState([]);
    // const [cities, setCities] = useState([]);
    // const [selectedContinent, setSelectedContinent] = useState('');
    // const [selectedCountry, setSelectedCountry] = useState('');
    // const [selectedCity, setSelectedCity] = useState('')
    // const [destination, setDestination] = useState('');

    const [places, setPlaces] = useState([]);
    const [query, setQuery] = useState();
    const { place , setPlace, filteredContinent, setFilteredContinent, setNextCity} = useContext(MyContext);
    useEffect(() => {
        fetch('dataset.json').then(res => res.json()).then((data) => {
            // setPlaces(data)
            const filtered = data?.places?.filter((place) => {
                // if(query === ""){
                //     setQuery("lalalala")
                // }
                return place?.toLowerCase().includes(query?.toLowerCase())
            })
            if (query) {
                setPlaces(filtered)
            } else {
                setPlaces([])
            }
            console.log(filtered)
        });
    }, [query])
    console.log(places)


    // useEffect(() => {
    //     async function fetchContinents() {
    //         const response = await axios.get('https://server.wandergeniellm.com/api/continents');
    //         setContinents(response.data);
    //         console.log(response.data)
    //     }
    //     fetchContinents();
    // }, []);

    // useEffect(() => {
    //     if (selectedContinent) {
    //         const fetchCountries = async () => {
    //             const response = await axios.get(`https://server.wandergeniellm.com/api/countries/${selectedContinent}`);
    //             setCountries(response.data);
    //         }
    //         fetchCountries();
    //     }
    // }, [selectedContinent]);

    // useEffect(() => {
    //     if (selectedContinent && selectedCountry) {
    //         const fetchCities = async () => {
    //             const response = await axios.get(`https://server.wandergeniellm.com/api/cities/${selectedContinent}/${selectedCountry}`);
    //             setCities(response.data);
    //         }
    //         fetchCities();
    //     }
    // }, [selectedCountry, selectedContinent]);

    // const handleDestinationChange = (event) => {
    //     setDestination(event.target.value);
    // };

    // const handleContinentChange = (event) => {
    //     setSelectedContinent(event.target.value);
    //     setSelectedCountry('');
    //     setCities([]);
    // };

    // const handleCountryChange = (event) => {
    //     setSelectedCountry(event.target.value);
    // };
    // const handleCityChange = (event) => {
    //     setSelectedCity(event.target.value);
    // };


    // const [inputValue, setInputValue] = useState('');
    // const [predictions, setPredictions] = useState([]);

    // const handleLocation = async (e) => {
    //     const input = e.target.value;
    //     setInputValue(input);

    //     if (input.trim() !== '') {
    //         const predictions = await initPlacesAPI().getPlacePredictions(input);
    //         setPredictions(predictions);
    //     } else {
    //         setPredictions([]);
    //     }
    //     console.log(predictions)
    // };

    // const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (item) => {
        // e.preventDefault();
        handleSearch(item);
        setQuery(item)
    };

    useEffect(() => {
        fetch('https://server.wandergeniellm.com/places')
            .then(response => response.json())
            .then(data => setPlaces(data.places));
    }, []);
    // const [open, setOpen] = useState(false);
    const handleSearch = (place) => {
        fetch(`https://server.wandergeniellm.com/continent/${place}`)
            .then(response => response.json())
            .then(data => {
                setFilteredContinent(data);
                // setOpen(true);
            });
    };

    console.log(filteredContinent)

    return (
        <div className="">
            <div className="hero min-h-[500px]" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full relative">
                        <h1 className="mb-5 text-4xl font-bold">Discover <span className="damion-regular text-[#AFFF53]">Your Next</span> Adventure</h1>
                        {/* <input value={selectedContinent} onChange={handleContinentChange} list="destinations" className={`inpt text-black outline-none border-4 border-[#AFFF53] rounded-xl px-10 py-3 w-[340px] ${selectedContinent ? '' : ""}`} type="text" name="" id="" placeholder="Search Countries, Cities" /> */}
                        {/* <span className="absolute bottom-[17px] left-[107px]"><IoSearch className="text-gray-500 text-[19px]" /></span> */}
                        {/* <datalist id="destinations">
                            {cities.length > 0
                                ? cities?.map((city, index) => <option key={index} value={city} />)
                                : countries?.length > 0
                                    ? countries?.map((country, index) => <option key={index} value={country.name} />)
                                    : continents?.map((continent, index) => <option key={index} value={continent.continent} />)}
                        </datalist> */}
                        {/* <div>
                            <h1>Place Search</h1>
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Enter a place"
                            />
                            <button onClick={handleSearch}>Search</button>
                            <div>
                                {places.map((place, index) => (
                                    <div key={index}>
                                        <h2>{place.name}</h2>
                                        <p>{place.formatted_address}</p>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                        {/* input field */}
                        <div className={`${place ? "" : ""}`}>
                            <span className="absolute bottom-[17px] left-[107px]"><IoSearch className="text-gray-500 text-[19px]" /></span>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Search for a place..."
                                        className={`inpt text-black outline-none border-4 border-[#AFFF53] rounded-xl px-10 py-3 w-[340px]`}
                                        value={query}
                                        onChange={handleChange}
                                    />
                                    {/* <button type="submit" className="btn btn-primary ml-2">Search</button> */}
                                </form>

                                {/* <input className={`inpt text-black outline-none border-4 border-[#AFFF53] rounded-xl px-10 py-3 w-[340px]`} onChange={(e) => setQuery(e.target.value)} type="text" name="places" id="places" placeholder="Search Places..." /> */}
                            </div>
                            <div className={`absolute w-[340px] ${query ? "h-[238px] bg-white" : "h-0"} top-34 left-[90px]  rounded-lg text-black ${place ? 'hidden' : ''}`}>
                                <ul className={`${places ? "overflow-y-scroll scrollbar-hide h-[238px]" : "h-0"}`}>
                                    {
                                        places?.map((item, index) => <li className="text-left font-semibold p-2 cursor-pointer my-1 border-2 border-white transition-all duration-300 rounded-lg w-full hover:border-2 hover:border-blue-400" onClick={() => { setPlace(item); setNextCity(item); handleSubmit(item) ; scrollHandler(durationScroll) }} key={index}>{item}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* <div className="App">
                            <SearchBar places={places} onSearch={handleSearch} />
                            {filteredContinent && <CityModal open={open} setPlace={setPlace} onClose={() => {setOpen(false);setPlace("")}} continent={filteredContinent} />}
                        </div> */}

                        {/* <div>
                            <select className={`inpt text-black outline-none border-4 border-[#AFFF53] rounded-xl px-10 py-3 w-[340px] ${selectedContinent ? 'hidden' : ""}`} value={selectedContinent} onChange={handleContinentChange}>
                                <option className="text-xl border border-black" value="">Select Continent</option>
                                {continents.map((continent, index) => (
                                    <option className="text-xl border border-black" key={index} value={continent.continent}>
                                        {continent.continent}
                                    </option>
                                ))}
                            </select>
                        </div> */}

                        {/* <select value={selectedContinent} onChange={handleContinentChange}>
                            <option value="">Select Continent</option>
                            {continents?.map((continent, index) => (
                                <option key={index} value={continent.continent}>
                                    {continent.continent}
                                </option>
                            ))}
                        </select> */}
                        {/* {selectedContinent && (
                            <select className={`inpt text-black outline-none border-4 border-[#AFFF53] rounded-xl px-10 py-3 w-[340px] ${selectedCountry ? 'hidden' : ""}`} value={selectedCountry} onChange={handleCountryChange}>
                                <option value="">Select Country</option>
                                {countries?.map((country, index) => (
                                    <option className="text-xl" key={index} value={country?.name}>
                                        {country?.name}
                                    </option>
                                ))}
                            </select>
                        )} */}

                        {/* {(selectedContinent && selectedCountry) && (
                            <select className={`inpt text-black outline-none border-4 border-[#AFFF53] rounded-xl px-10 py-3 w-[340px]`} value={selectedCity} onChange={handleCityChange}>
                                <option value="">Select Cities</option>
                                {cities?.map((city, index) => (
                                    <option className="text-xl" key={index} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        )} */}
                    </div>
                    {/* <div>
                        {
                            predictions.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </div> */}
                </div>
            </div>
            <div className="bg-[#000] py-3 flex justify-evenly items-center">
                <div className="flex justify-center items-center">
                    <FaFacebookF className="text-blue-500 bg-white p-1 rounded-full" />
                    <FcGoogle className=" bg-white p-[2px] rounded-full -ml-[7px]" />
                    <span className="text-white mx-1">4.6</span>
                    <FaStar className="text-[#00C684]" />
                    <span className="text-white mx-1">rated</span>
                </div>
                <h3 className="flex justify-center items-center gap-1"><TiTick className="text-white bg-[#00C684] p-[2px] rounded-full" /><span className="text-white">100% Customised Trips</span></h3>
                {/* <h3 className="flex justify-center items-center gap-1"><TiTick className="text-white bg-[#00C684] p-[2px] rounded-full"/><span className="text-white">95% Visa Success Rate</span></h3> */}
                <h3 className="flex justify-center items-center gap-1"><TiTick className="text-white bg-[#00C684] p-[2px] rounded-full" /><span className="text-white">24/7 Assistance</span></h3>
            </div>
        </div>
    );
};

export default Banner;

Banner.propTypes = {
    scrollHandler : PropTypes.func.isRequired,   
    durationScroll : PropTypes.object.isRequired
}