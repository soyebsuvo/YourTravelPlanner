import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { CiMedicalCase } from 'react-icons/ci';
import { FaHandsHelping } from 'react-icons/fa';
import { GiCommercialAirplane, GiMeal, GiPassport, GiTakeMyMoney } from "react-icons/gi";
import { IoIosOptions } from 'react-icons/io';
import { IoBagAddOutline } from 'react-icons/io5';
import { MdMiscellaneousServices, MdOutlineAttachMoney, MdOutlineDesignServices, MdOutlineEmojiTransportation, MdOutlineTravelExplore } from 'react-icons/md';
import { RiHotelLine } from "react-icons/ri";
import { RxActivityLog } from 'react-icons/rx';



const TravelPackageDetails = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-600 border border-neutral-400 rounded-2xl bg-theme-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-neutral-400 rounded-lg p-4 bg-theme-tertiary">
          <h2 className="text-base font-bold mb-4">Included</h2>
          <IncludedSection />
        </div>
        <div className="rounded-lg p-4 border border-neutral-400 bg-theme-tertiary">
          <h2 className="text-base font-bold mb-4">Excluded</h2>
          <ExcludedSection />
        </div>
      </div>
    </div>
  );
};

const IncludedSection = () => {
  return (
    <Box className='space-y-2'>
      <Section title="International Flights:" icon={<GiCommercialAirplane className='inline mr-1' />}>
        <BulletPoint text="Flights to and from the destination country (if source is specified)" />
      </Section>

      <Section title="Accommodation:" icon={<RiHotelLine className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Hotel stays (details of star rating, room type, and number of nights)" />
        <BulletPoint text="Check-in and check-out times" />
      </Section>

      <Section title="Meals:" icon={<GiMeal className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Breakfast (in all packages)" />
        <BulletPoint text="Lunch, and dinner (in specific packages only)" />
        <BulletPoint text="Special meal arrangements if required with additional charges (vegetarian, vegan, gluten-free, etc.)" />
      </Section>

      <Section title="Transportation:" icon={<MdOutlineEmojiTransportation className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Airport transfers (arrival and departure)" />
        <BulletPoint text="In-destination transportation in private transfers only (coaches, taxis, car rentals, etc.)" />
        <BulletPoint text="Train/bus tickets (if applicable)" />
        <BulletPoint text="Internal flights (if part of the itinerary)" />
      </Section>

      <Section title="Activities/Excursions as per the selected plan(s):" icon={<RxActivityLog className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Guided tours (include details of guided city tours, sightseeing, etc.)" />
        <BulletPoint text="Entrance fees to attractions and monuments" />
        <BulletPoint text="Adventure activities (hiking, snorkeling, etc.)" />
        <BulletPoint text="Cultural experiences (cooking classes, dance performances, etc.)" />
      </Section>

      <Section title="Guides/Staff as per the selected plan(s):" icon={<FaHandsHelping className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Professional tour guides (language specifics)" />
        <BulletPoint text="On-site support staff" />
      </Section>

      <Section title="Travel Insurance:" icon={<MdOutlineTravelExplore className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Basic travel insurance coverage (details of coverage)" />
      </Section>

      <Section title="Additional Services:" icon={<MdOutlineDesignServices className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Welcome kits or gifts" />
        <BulletPoint text="Complimentary Wi-Fi at hotels" />
        <BulletPoint text="Porterage at hotels and airports" />
        <BulletPoint text="24/7 customer support during the trip" />
      </Section>
    </Box>
  );
};

const ExcludedSection = () => {
  return (
    <Box className='space-y-2'>
      <Section title="Visa and Passport Fees:" icon={<GiPassport className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Visa application fees" />
        <BulletPoint text="Passport renewal or application fees" />
      </Section>

      <Section title="Taxes and Fees:" icon={<MdOutlineAttachMoney className='inline mr-1 mb-1'/>}>
        <BulletPoint text="All local taxes and service charges" />
        <BulletPoint text="Airport taxes (if included in the package)" />
      </Section>

      <Section title="Personal Expenses:" icon={<GiTakeMyMoney className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Shopping, souvenirs, and other personal purchases" />
        <BulletPoint text="Laundry services" />
        <BulletPoint text="Room service and minibar charges" />
        <BulletPoint text="Additional meals and beverages not specified in the itinerary" />
      </Section>

      <Section title="Optional Activities:" icon={<IoIosOptions className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Optional tours and activities not included in the itinerary" />
        <BulletPoint text="Entrance fees to attractions not specified in the package" />
      </Section>

      <Section title="Travel Insurance:" icon={<MdOutlineTravelExplore className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Additional travel insurance coverage (medical, trip cancellation, etc.)" />
      </Section>

      <Section title="Tips and Gratuities:"  icon={<MdOutlineAttachMoney className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Tips for guides, drivers, hotel staff, and other service providers" />
      </Section>

      <Section title="Medical Expenses:" icon={<CiMedicalCase className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Any medical expenses or vaccinations required for the trip" />
      </Section>

      <Section title="Baggage Fees:" icon={<IoBagAddOutline className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Excess baggage charges" />
        <BulletPoint text="Baggage insurance" />
      </Section>

      <Section title="Unspecified Transport:" icon={<MdOutlineEmojiTransportation className='inline mr-1 mb-1'/>}>
        <BulletPoint text="Transportation to optional excursions" />
        <BulletPoint text="Personal transport (taxis, ride-sharing services, etc.)" />
      </Section>

      <Section title="Miscellaneous:"  icon={<MdMiscellaneousServices className='inline mr-1 mb-1'/>}>
        <BulletPoint text='Any other expenses not explicitly mentioned in the "Included" section' />
      </Section>
    </Box>
  );
};

const Section = ({ title, children, icon }) => {
  return (
    
    <div className="">
      <div className="collapse collapse-plus border border-neutral-400 bg-theme-fourth">
        <input type="radio" name="my-accordion-3" />
        <h3 className="font-semibold collapse-title text-black text-sm">{icon}{title}</h3>
        <div className="collapse-content">
          <ul className="list-disc pl-5">{children}</ul>
        </div>
      </div>
    </div>
  );
};

const BulletPoint = ({ text }) => {
  return <li className="">{text}</li>;
};

export default TravelPackageDetails;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string
}
BulletPoint.propTypes = {
  text: PropTypes.string
}