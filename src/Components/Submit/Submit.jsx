import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MyContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
const Submit = ({ days, members, budget, accommodation, transportation }) => {
  const datas = { days, members, budget, accommodation, transportation }
  const { handleSubmit } = useContext(MyContext);
  const { place , selectedCities} = useContext(MyContext);
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

            give the object with itinerary array like this format i have given below. just follow this json format. not everything. 

            don't give extra text with your genarated json data. Just give the json data without any syntax named json or something

            {
                "itinerary": [
                  {
                    "destination": "Paris",
                    "travelDates": { "start": "Day 1", "end": "Day 4" },
                    "groupSize": "Family",
                    "budgetPerDay": "$300 per person",
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
                          { "time": "Morning", "activity": "Arrival in Paris, check into vacation rental" },
                          { "time": "Afternoon", "activity": "Visit Jardin du Luxembourg" },
                          { "time": "Evening", "activity": "Dinner at vegetarian-friendly restaurant" }
                        ]
                      },
                      {
                        "day": "Day 2",
                        "activities": [
                          { "time": "Morning", "activity": "Explore the Louvre Museum" },
                          { "time": "Afternoon", "activity": "Cruise along the Seine River" },
                          { "time": "Evening", "activity": "Dinner at a local bistro" }
                        ]
                      },
                      {
                        "day": "Day 3",
                        "activities": [
                          { "time": "Full Day", "activity": "Day trip to Versailles Palace and Gardens" }
                        ]
                      },
                      {
                        "day": "Day 4",
                        "activities": [
                          { "time": "Morning", "activity": "Travel to Nice via high-speed train" },
                          { "time": "Afternoon", "activity": "Check into vacation rental in Nice" },
                          { "time": "Evening", "activity": "Dinner at a seaside restaurant" }
                        ]
                      }
                    ]
                  },
                  {
                    "destination": "Nice",
                    "travelDates": { "start": "Day 4", "end": "Day 7" },
                    "groupSize": "Family",
                    "budgetPerDay": "$300 per person",
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
                          { "time": "Afternoon", "activity": "Explore Promenade des Anglais" },
                          { "time": "Evening", "activity": "Dinner at a local vegetarian restaurant" }
                        ]
                      },
                      {
                        "day": "Day 5",
                        "activities": [
                          { "time": "Morning", "activity": "Visit the Marc Chagall National Museum" },
                          { "time": "Afternoon", "activity": "Stroll through Old Town (Vieux Nice)" },
                          { "time": "Evening", "activity": "Leisure" }
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
                          { "time": "Morning", "activity": "Relax on the beach" },
                          { "time": "Afternoon", "activity": "Departure preparations" }
                          { "time": "Evening", "activity": "Leisure" }
                        ]
                      }
                    ]
                  },
                  {
                    "destination": "Lyon",
                    "travelDates": { "start": "Day 7", "end": "Day 10" },
                    "groupSize": "Family",
                    "budgetPerDay": "$300 per person",
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
                          { "time": "Afternoon", "activity": "Arrival in Lyon, check into vacation rental" },
                          { "time": "Evening", "activity": "Dinner at a traditional Lyonnaise bouchon" }
                        ]
                      },
                      {
                        "day": "Day 8",
                        "activities": [
                          { "time": "Morning", "activity": "Explore Vieux Lyon (Old Lyon)" },
                          { "time": "Afternoon", "activity": "Visit the Basilique Notre Dame de Fourvière" },
                          { "time": "Evening", "activity": "Dinner at a local restaurant" }
                        ]
                      },
                      {
                        "day": "Day 9",
                        "activities": [
                          { "time": "Full Day", "activity": "Day trip to Beaujolais wine region for wine tasting" }
                        ]
                      },
                      {
                        "day": "Day 10",
                        "activities": [
                          { "time": "Morning", "activity": "Departure preparations and return to Paris" }
                          { "time": "Afternoon", "activity": "Leisure" }
                        ]
                      }
                    ]
                  }
                ]
              }             
            
              keep some leasure so that i can modify it later. don't give leusire time everyday. keep randomly
            `;

  // const userInput = { api : "nothing"}
  const navigate = useNavigate();
  return (
    <div className="flex justify-center p-8">
      <div><button onClick={() => handleSubmit(userInput, datas, navigate , selectedCities)} className="px-6 py-2 rounded-md border-2 border-blue-500 bg-blue-500 text-white hover:bg-transparent duration-200 hover:border-blue-500 hover:text-blue-500">Submit <FaArrowRight className='inline mb-1 ml-1'/></button></div>
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