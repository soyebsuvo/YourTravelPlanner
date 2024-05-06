import PropTypes from 'prop-types';
const Submit = ({ days, members, budget }) => {
    const handleSubmit = async () => {

       
            const userInput = `what is chatGPT ?`;
            // const chatHistory = document.getElementById('chat-history');

            const response = await fetch('http://localhost:3000/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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
    members : PropTypes.string.isRequired,
    budget : PropTypes.string.isRequired
}