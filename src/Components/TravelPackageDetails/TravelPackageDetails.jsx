import PropTypes from 'prop-types';

const TravelPackageDetails = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Included</h2>
          <IncludedSection />
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Excluded</h2>
          <ExcludedSection />
        </div>
      </div>
    </div>
  );
};

const IncludedSection = () => {
  return (
    <>
      <Section title="International Flights:">
        <BulletPoint text="Flights to and from the destination country (if source is specified)" />
      </Section>

      <Section title="Accommodation:">
        <BulletPoint text="Hotel stays (details of star rating, room type, and number of nights)" />
        <BulletPoint text="Check-in and check-out times" />
      </Section>

      <Section title="Meals:">
        <BulletPoint text="Breakfast (in all packages)" />
        <BulletPoint text="Lunch, and dinner (in specific packages only)" />
        <BulletPoint text="Special meal arrangements if required with additional charges (vegetarian, vegan, gluten-free, etc.)" />
      </Section>

      <Section title="Transportation:">
        <BulletPoint text="Airport transfers (arrival and departure)" />
        <BulletPoint text="In-destination transportation in private transfers only (coaches, taxis, car rentals, etc.)" />
        <BulletPoint text="Train/bus tickets (if applicable)" />
        <BulletPoint text="Internal flights (if part of the itinerary)" />
      </Section>

      <Section title="Activities/Excursions as per the selected plan(s):">
        <BulletPoint text="Guided tours (include details of guided city tours, sightseeing, etc.)" />
        <BulletPoint text="Entrance fees to attractions and monuments" />
        <BulletPoint text="Adventure activities (hiking, snorkeling, etc.)" />
        <BulletPoint text="Cultural experiences (cooking classes, dance performances, etc.)" />
      </Section>

      <Section title="Guides/Staff as per the selected plan(s):">
        <BulletPoint text="Professional tour guides (language specifics)" />
        <BulletPoint text="On-site support staff" />
      </Section>

      <Section title="Travel Insurance:">
        <BulletPoint text="Basic travel insurance coverage (details of coverage)" />
      </Section>

      <Section title="Additional Services:">
        <BulletPoint text="Welcome kits or gifts" />
        <BulletPoint text="Complimentary Wi-Fi at hotels" />
        <BulletPoint text="Porterage at hotels and airports" />
        <BulletPoint text="24/7 customer support during the trip" />
      </Section>
    </>
  );
};

const ExcludedSection = () => {
  return (
    <>
      <Section title="Visa and Passport Fees:">
        <BulletPoint text="Visa application fees" />
        <BulletPoint text="Passport renewal or application fees" />
      </Section>

      <Section title="Taxes and Fees:">
        <BulletPoint text="All local taxes and service charges" />
        <BulletPoint text="Airport taxes (if included in the package)" />
      </Section>

      <Section title="Personal Expenses:">
        <BulletPoint text="Shopping, souvenirs, and other personal purchases" />
        <BulletPoint text="Laundry services" />
        <BulletPoint text="Room service and minibar charges" />
        <BulletPoint text="Additional meals and beverages not specified in the itinerary" />
      </Section>

      <Section title="Optional Activities:">
        <BulletPoint text="Optional tours and activities not included in the itinerary" />
        <BulletPoint text="Entrance fees to attractions not specified in the package" />
      </Section>

      <Section title="Travel Insurance:">
        <BulletPoint text="Additional travel insurance coverage (medical, trip cancellation, etc.)" />
      </Section>

      <Section title="Tips and Gratuities:">
        <BulletPoint text="Tips for guides, drivers, hotel staff, and other service providers" />
      </Section>

      <Section title="Medical Expenses:">
        <BulletPoint text="Any medical expenses or vaccinations required for the trip" />
      </Section>

      <Section title="Baggage Fees:">
        <BulletPoint text="Excess baggage charges" />
        <BulletPoint text="Baggage insurance" />
      </Section>

      <Section title="Unspecified Transport:">
        <BulletPoint text="Transportation to optional excursions" />
        <BulletPoint text="Personal transport (taxis, ride-sharing services, etc.)" />
      </Section>

      <Section title="Miscellaneous:">
        <BulletPoint text='Any other expenses not explicitly mentioned in the "Included" section' />
      </Section>
    </>
  );
};

const Section = ({ title, children }) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="list-disc pl-5">{children}</ul>
    </div>
  );
};

const BulletPoint = ({ text }) => {
  return <li className="mb-1">{text}</li>;
};

export default TravelPackageDetails;

Section.propTypes = {
    title : PropTypes.string,
    children : PropTypes.node,
}
BulletPoint.propTypes = {
    text : PropTypes.string
}