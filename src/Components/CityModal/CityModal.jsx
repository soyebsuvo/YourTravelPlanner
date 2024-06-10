import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
function CityModal({ open, onClose, continent }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const citiesPerPage = 4;

  const allCities = useMemo(() => {
    return continent?.countries?.flatMap(country => country.cities);
  }, [continent]);

  const filteredCities = useMemo(() => {
    return allCities?.filter(city => city?.toLowerCase().includes(searchQuery?.toLowerCase()));
  }, [allCities, searchQuery]);

  const totalPages = Math.ceil(filteredCities?.length / citiesPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const displayedCities = filteredCities?.slice(
    currentPage * citiesPerPage,
    (currentPage + 1) * citiesPerPage
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(0);
  };

  return (
    <div className={`modal ${open ? 'modal-open' : ''}`}>
      <div className="modal-box relative">
        <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={onClose}>✕</button>
        <h2 className="text-lg font-bold">Cities in {continent.continent}</h2>
        <input
          type="text"
          placeholder="Search Cities"
          className="input input-bordered input-primary w-full my-2"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <ul className="list-disc flex justify-between">
          {displayedCities?.map((city, index) => (
            <li className='cursor-pointer text-gray-600 border list-none p-3' key={index}>{city}</li>
          ))}
        </ul>
        <div className="flex justify-between mt-4">
          <button className="btn btn-primary" onClick={handlePrev} disabled={currentPage === 0}>
            Previous
          </button>
          <button className="btn btn-primary" onClick={handleNext} disabled={currentPage === totalPages - 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CityModal;
CityModal.propTypes = {
    open: PropTypes.any,
    onClose: PropTypes.any,
    continent : PropTypes.any
}
