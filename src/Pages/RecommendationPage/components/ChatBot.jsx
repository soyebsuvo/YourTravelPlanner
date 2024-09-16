import { useState, useRef } from "react";

import { Box, CloseButton, HStack } from "@chakra-ui/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/shadecn/ui/dropdown-menu";

import { BsChatRightFill, BsFillSendFill } from "react-icons/bs";
import { LuPlusCircle } from "react-icons/lu";
import { FaRobot } from "react-icons/fa";
import Swal from "sweetalert2";


const initialMessages = {
    _id: 0,
    participants: [
        "user_id_1",
        "user_id_2"
    ],
    messages: [
        {
            _id: 8,
            sender: "gpt",
            content: "Hi Traveller",
            timestamp: "no"
        },
        {
            _id: 9,
            sender: "gpt",
            content: "Chatbot assistant cooming soon...!!!",
            timestamp: "no"
        }
    ]
}

export const ChatBot = () => {

    const [userInputChat, setUserInputChat] = useState("");
    const [messages, setMessages] = useState(initialMessages.messages);
    const [canSend, setCanSend] = useState(true);

    const messagesEndRef = useRef(null);

    const handleSendMessage = async () => {
        try
        {
            if (!userInputChat || userInputChat.length < 2) return;

            const newMsg = { _id: 1, sender: "user", content: userInputChat, timestamp: "no" };
            setMessages((prev) => [...prev, newMsg]);
            setUserInputChat("");

            setCanSend(false);
            const response = await fetch("http://localhost:3000/chat", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message : userInputChat }),
                credentials: 'include',
            })
            if(response.ok)
            {
                const responseJSON = await response.json();
                const reply = await responseJSON?.message;
                if(reply !== undefined && reply) {
                    const botReply = {
                        _id: 1,
                        sender: "gpt",
                        content: reply,
                        timestamp: "no"
                    }
                
                    setMessages((prev) => [...prev, botReply]);
                    setCanSend(true);
                }
                else {
                    setMessages((prev) => [...prev, {
                        _id : Math.floor(Math.random() * 20),
                        sender : "gpt",
                        content : "I apologize, but I was unable to process your request. Please try again later.",
                        timestamp : "no"
                    }]);
                    setCanSend(true);
                }
            }
        }
        catch (error) {
            setCanSend(true);
            console.error(error);
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }


    return (
        <div className={`flex justify-end`}>
            <Box className="fixed right-10 bottom-10">
                <DropdownMenu>
                    <DropdownMenuTrigger className="bg-blue-500 shadow-md shadow-black p-4 rounded-full transition-all duration-150 hover:scale-125">
                        <BsChatRightFill className="text-white text-xl w-7 h-7" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-96 max-sm:w-8/12 max-sm:mr-0 max-sm:ml-2 relative min-h-[600px] h-auto pb-2 mb-5 mr-10 rounded-lg p-0">
                        <HStack className="w-full justify-between py-2 px-4 bg-gradient-to-r from-blue-700 to-sky-400">
                            <DropdownMenuLabel className="text-lg text-white font-bold">Your Travel Planner</DropdownMenuLabel>
                            <CloseButton/>
                        </HStack>
                        <Box className="py-3 overflow-y-scroll space-y-4 scrollbar-hide h-[470px]">
                            {messages?.map((item, index) => (
                                <Box className={`${item?.sender === "user" ? 'flex justify-end px-3 py-1 ml-12' : 'px-3 py-1 mr-12'}`} key={index}>
                                    {
                                        item.sender == "user" ? (
                                            <p className={`font-semibold py-2 px-5 break-words bg-slate-300 text-black`}>{item?.content}</p>
                                        )
                                        :
                                        (
                                            <Box key={index} className="space-x-2 flex flex-row">
                                                <FaRobot className="text-lg" />
                                                <p className={`font-semibold py-2 px-5 w-fit overflow-hidden bg-blue-400 rounded-lg text-white`}>
                                                    {item?.content}
                                                </p>
                                            </Box>
                                        )
                                    }
                                </Box>
                            ))}
                            <Box ref={messagesEndRef} />
                        </Box>
                        <Box className="absolute bottom-2 w-full flex items-center justify-between gap-2 px-4">
                            <LuPlusCircle className="font-bold text-3xl cursor-pointer" />
                            <input
                                disabled={!canSend}
                                value={userInputChat}
                                onKeyDown={e => { e.key === "Enter" && handleSendMessage() }}
                                onChange={(e) => setUserInputChat(e.target.value)}
                                className="outline-none w-full mx-auto bg-gray-200 rounded-lg px-3 py-2" placeholder="Type..." type="text" 
                            />
                            <BsFillSendFill onClick={handleSendMessage} className="font-bold text-3xl cursor-pointer bg-gradient-to-br from-blue-600 to-sky-300 text-white rounded-full p-2 w-10 h-10" />
                        </Box>
                    </DropdownMenuContent>
                </DropdownMenu>
            </Box>
        </div>
    )
}
