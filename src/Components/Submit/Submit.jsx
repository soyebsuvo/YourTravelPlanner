import PropTypes from 'prop-types';
// const OpenAI = require('openai-api');
import OpenAI from 'openai-api'
const openai = new OpenAI('');
const Submit = ({ days, members, budget }) => {
    const handleSubmit = async () => {

        (async () => {
            const gptResponse = await openai.complete({
                engine: 'gpt-3.5-turbo-0613',
                prompt: 'What is Google?',
                maxTokens: 5,
                temperature: 0.9,
                topP: 1,
                presencePenalty: 0,
                frequencyPenalty: 0,
                bestOf: 1,
                n: 1,
                stream: false,
                stop: ['\n', "testing"]
            });
        
            console.log(gptResponse.data);
        })();
            
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