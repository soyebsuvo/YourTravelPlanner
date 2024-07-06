import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { TiTick } from "react-icons/ti";
import background from "../../assets/recom-back.jpg"

const SubBanner = () => {
    return (
        <div className="">
        <div className="hero min-h-[420px]" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="hero-overlay bg-opacity-60"></div>
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
        <div className="bg-[#000] py-3 flex justify-evenly items-center text-xs md:text-base">
        <h3 className="flex justify-center items-center gap-1"><TiTick className="text-white bg-[#00C684] p-[2px] rounded-full" /><span className="text-white">AI Powered Itinerary</span></h3>
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

export default SubBanner;