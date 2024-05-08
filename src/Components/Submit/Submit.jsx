import PropTypes from 'prop-types';
const Submit = ({ days, members, budget, accommodation, dietary, travelPurpose, transportation, landmarks, special }) => {
    const handleSubmit = async () => {

        const userInput = `Hello
            I am seeking a travel itinerary tailored to my specific requirements. Please consider
            the following inputs to generate suitable recommendations:
            Travel Dates: ${days}
            Destination: Franch
            Group Size: ${members}
            Budget: ${budget} per person in one day
            Accommodation Preferences: ${accommodation}
            Dietary Needs: ${dietary}
            Travel Purpose: ${travelPurpose}
            Transportation Preferences: ${transportation}
            Must-See Landmarks: ${landmarks}
            Special Requirements: ${special}`;

        // console.log(userInput)
        // const chatHistory = document.getElementById('chat-history');

        const response = await fetch('http://localhost:3000/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : ''
            },
            body: JSON.stringify({ prompt: userInput })
        });

        const responseData = await response.text();
        console.log(responseData)
        // const messageElement = document.createElement('div');
        // messageElement.textContent = `User: ${userInput}\nChatGPT: ${responseData}`;
        // chatHistory.appendChild(messageElement);
    }

    return (
        <div className="flex justify-center p-8">
            <button onClick={handleSubmit} className="px-6 py-2 rounded-md border-2">Submit</button>
        </div>
    );
};

export default Submit;

Submit.propTypes = {
    days: PropTypes.string.isRequired,
    members: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    accommodation: PropTypes.string.isRequired,
    dietary: PropTypes.string.isRequired,
    travelPurpose: PropTypes.string.isRequired,
    transportation : PropTypes.string.isRequired,
    landmarks : PropTypes.string.isRequired,
    special: PropTypes.string.isRequired
}