import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const MyContext = createContext({});

function Context({ children }) {
    const [response, setResponse] = useState();

    const handleSubmit = async (userInput, datas) => {
        setResponse(null)
        // const chatHistory = document.getElementById('chat-history');
        const { days, members, budget, accommodation, dietary } = datas;
        if (!days || !members || !budget || !accommodation || !dietary) {
            return console.log("object")
        }

        const response = await fetch('http://localhost:3000/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': ''
            },
            body: JSON.stringify({ prompt: userInput })
        });

        const responseData = await response.text();
        console.log(responseData)
        setResponse(responseData)

        // const messageElement = document.createElement('div');
        // messageElement.textContent = `User: ${userInput}\nChatGPT: ${responseData}`;
        // chatHistory.appendChild(messageElement);
    }
    const info = {
        handleSubmit,
        response
    }
    return (
        <MyContext.Provider value={info}>
            {children}
        </MyContext.Provider>
    );
}

export default Context;

Context.propTypes = {
    children: PropTypes.node
}