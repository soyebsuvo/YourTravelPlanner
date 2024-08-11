import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MyContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
const Submit = ({ days, members, budget, accommodation, transportation }) => {
  const datas = { days, members, budget, accommodation, transportation }
  const { handleSubmit } = useContext(MyContext);
  const { place, selectedCities } = useContext(MyContext);
  const cities = selectedCities.join(", ");
  const userInput = `Hello 
            I am seeking a travel itinerary tailored to my specific requirements. Please consider
            the following inputs to generate suitable recommendations:
            Travel Dates: ${days}
            Destination: ${place}
            cities : ${cities}
            Group Size: ${members}
            Budget: ${budget} per person in one day
            Accommodation Preferences: ${accommodation}
            Dietary Needs: no
            Travel Purpose: normal
            Transportation Preferences: ${transportation}
            Must-See Landmarks: sea-beach
            Special Requirements: medical

            The itinerary array will have exactly as many objects as the cities mentioned in the input.            
            i am using react and this prompt is send from my website. Now give the response in json format so that i can manage all the data easily. Saparate all the activities of the days with separate objects.
            
            {
                "totalCost" : "$5000-$6000", // do not add here any text. just give the total cost.
                "totalActivities" : "22",
                "itinerary": [
                  {
                    "destination": "Paris",
                    "travelDates": { "start": "Day 1", "end": "Day 4" },
                    "groupSize": "Family",
                    "budgetPerDay": "$300 per person",
                    "totalCost": "$4000 - $4500 per person",
                    "accommodation": { "type": "Vacation Rentals", "preferences": [] },
                    "dietaryNeeds": "Vegetarian",
                    "travelPurpose": "Leisure/Vacation",
                    "transportation": "Public Transportation",
                    "mustSeeLandmarks": ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
                    "languagePreferences": [],
                    "dailyActivities": [
                      {
                        "day": "Day 1",
                        "activities": [
                          { "time": "Morning", "activity": "Arrival in Paris, check into vacation rental", "cost" : "" },
                          { "time": "Afternoon", "activity": "Visit Jardin du Luxembourg", "cost" : "$40-$80" },
                          { "time": "Evening", "activity": "Dinner at vegetarian-friendly restaurant", "cost" : "$90-$200" }
                        ]
                      },
                      {
                        "day": "Day 2",
                        "activities": [
                          { "time": "Morning", "activity": "Explore the Louvre Museum", "cost" : "$90-$96" },
                          { "time": "Afternoon", "activity": "Cruise along the Seine River", "cost" : "$40-$90" },
                          { "time": "Evening", "activity": "Dinner at a local bistro", "cost" : "$90-$300" }
                        ]
                      },
                      {
                        "day": "Day 3",
                        "activities": [
                          { "time": "Full Day", "activity": "Day trip to Versailles Palace and Gardens", "cost" : "$200-$280" }
                        ]
                      },
                      {
                        "day": "Day 4",
                        "activities": [
                          { "time": "Morning", "activity": "Travel to Nice via high-speed train", "cost" : "$90-$100" },
                          { "time": "Afternoon", "activity": "Check into vacation rental in Nice", "cost" : "$60-$140" },
                          { "time": "Evening", "activity": "Dinner at a seaside restaurant", "cost" : "$100-$300" }
                        ]
                      }
                    ]
                  },
                  {
                    "destination": "Nice",
                    "travelDates": { "start": "Day 4", "end": "Day 7" },
                    "groupSize": "Family",
                    "budgetPerDay": "$300 per person",
                    "totalCost": "$4000 - $4500 per person",
                    "accommodation": { "type": "Vacation Rentals", "preferences": [] },
                    "dietaryNeeds": "Vegetarian",
                    "travelPurpose": "Leisure/Vacation",
                    "transportation": "Public Transportation",
                    "mustSeeLandmarks": ["Promenade des Anglais", "Old Town (Vieux Nice)", "Castle Hill"],
                    "languagePreferences": [],
                    "dailyActivities": [
                      {
                        "day": "Day 4",
                        "activities": [
                          { "time": "Afternoon", "activity": "Explore Promenade des Anglais", "cost" : "$100-$200" },
                          { "time": "Evening", "activity": "Dinner at a local vegetarian restaurant", "cost" : "$50-$160" }
                        ]
                      },
                      {
                        "day": "Day 5",
                        "activities": [
                          { "time": "Morning", "activity": "Visit the Marc Chagall National Museum", "cost" : "$90-$200" },
                          { "time": "Afternoon", "activity": "Stroll through Old Town (Vieux Nice)", "cost" : "$90-$200" },
                          { "time": "Evening", "activity": "Leisure", "cost" : "" }
                        ]
                      },
                      {
                        "day": "Day 6",
                        "activities": [
                          { "time": "Full Day", "activity": "Day trip to Monaco and Monte Carlo" }
                        ]
                      },
                      {
                        "day": "Day 7",
                        "activities": [
                          { "time": "Morning", "activity": "Relax on the beach", "cost" : "$60-$100" },
                          { "time": "Afternoon", "activity": "Departure preparations", "cost" : "$90-$200" }
                          { "time": "Evening", "activity": "Leisure", "cost" : "" }
                        ]
                      }
                    ]
                  },
                  {
                    "destination": "Lyon",
                    "travelDates": { "start": "Day 7", "end": "Day 10" },
                    "groupSize": "Family",
                    "budgetPerDay": "$300 per person",
                    "totalCost": "$4000 - $4500 per person",
                    "accommodation": { "type": "Vacation Rentals", "preferences": [] },
                    "dietaryNeeds": "Vegetarian",
                    "travelPurpose": "Leisure/Vacation",
                    "transportation": "Public Transportation",
                    "mustSeeLandmarks": ["Basilique Notre Dame de Fourvière", "Vieux Lyon", "Parc de la Tête d'Or"],
                    "languagePreferences": [],
                    "dailyActivities": [
                      {
                        "day": "Day 7",
                        "activities": [
                          { "time": "Afternoon", "activity": "Arrival in Lyon, check into vacation rental", "cost" : "$80-$200" },
                          { "time": "Evening", "activity": "Dinner at a traditional Lyonnaise bouchon", "cost" : "$120-$330" }
                        ]
                      },
                      {
                        "day": "Day 8",
                        "activities": [
                          { "time": "Morning", "activity": "Explore Vieux Lyon (Old Lyon)", "cost" : "$90-$200" },
                          { "time": "Afternoon", "activity": "Visit the Basilique Notre Dame de Fourvière", "cost" : "$50-$300" },
                          { "time": "Evening", "activity": "Dinner at a local restaurant", "cost" : "$90-$200" }
                        ]
                      },
                      {
                        "day": "Day 9",
                        "activities": [
                          { "time": "Full Day", "activity": "Day trip to Beaujolais wine region for wine tasting", "cost" : "$90-$200" }
                        ]
                      },
                      {
                        "day": "Day 10",
                        "activities": [
                          { "time": "Morning", "activity": "Departure preparations and return to Paris", "cost" : "$60-$100" }
                          { "time": "Afternoon", "activity": "Leisure", "cost" : "" }
                        ]
                      }
                    ]
                  }
                ]
              }             
            Now give the object with "totalCost", "totalActivities" and the "itinerary" array like this format i have given. totalCost will contain total cost per person. just follow this json format. 
            don't give extra text with your genarated json data. Just give the json data without any syntax named json or something.
              keep some leasure so that i can modify it later. don't give leusire time everyday. keep randomly
            `;

  // const userInput = { api : "nothing"}
  const navigate = useNavigate();
  return (
    <div className="flex justify-center p-8">
      <div><button onClick={() => handleSubmit(userInput, datas, navigate, selectedCities)} className="px-6 py-2 rounded-md border-2 border-blue-500 bg-blue-500 text-white hover:bg-transparent duration-200 hover:border-blue-500 hover:text-blue-500">Submit <FaArrowRight className='inline mb-1 ml-1' /></button></div>
    </div>
  );
};

export default Submit;

Submit.propTypes = {
  days: PropTypes.string.isRequired,
  members: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
  accommodation: PropTypes.string.isRequired,
  transportation: PropTypes.string.isRequired
}