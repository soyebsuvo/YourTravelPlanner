import { useEffect, useState } from "react";

import { Box, Heading, Text } from "@chakra-ui/react";
import { Button } from "@/shadecn/ui/button";
import { PaymentCreditCard } from "./components/PaymentCreditCard";
import { Trash2 } from "lucide-react";

export default function PaymentDetails ()
{
    const [showCardForm, setShowCardForm] = useState(false);

    const [cards, setCards] = useState([]);

    const handleAddCard = (newCard) => {
        setCards(prev => [...prev, newCard]);
    }

    const handleDeleteCard = (id) => {
        setCards(prev => prev.filter(card => card.id !== id));
        localStorage.setItem("othersTravellers", JSON.stringify(cards.filter((traveler) => traveler.id !== id)));
    }

    useEffect(() => {
        const localCards = JSON.parse(localStorage.getItem("paymentCards"));
        if(localCards !== undefined && localCards !== null) {
            setCards(localCards);
        }
    }, [])
    
    useEffect(() => {
        if (cards && cards.length > 0) {
            localStorage.setItem("paymentCards", JSON.stringify(cards));
        }
    }, [cards]);

    return (
        <Box className="p-2 md:p-6"> 
            <Box className="flex justify-between items-center py-2 pb-4">
                <Box className="space-y-4">
                    <Heading className="text-2xl md:text-4xl font-semibold">Payment Details</Heading>
                    <Text className="text-sm md:text-lg text-gray-500">Securely add or remove payment methods to make it esasier when you plan a trip</Text>
                </Box>
            </Box>
            <hr className="border"/>
            <Box className="flex flex-row items-center justify-between py-4">
                <Text className="font-semibold">Payment Cards</Text>
                <Text className="text-gray-500 font-medium">Pay with new card</Text>
                <Button onClick={() => setShowCardForm(!showCardForm)} className="text-end text-blue-500 hover:text-black !bg-transparent font-bold cursor-pointer">
                    {showCardForm ? "Cancell" : "Add Card"}
                </Button>
            </Box>
            <Box className="w-full space-y-4">
                {
                    cards.map((card, index) => (
                        <Box className="w-full flex flex-row items-center justify-between bg-neutral-100 p-2 rounded-lg border-2 border-neutral-200" key={index}>
                            <Text>{card?.name}</Text>
                            <Text>{card?.number}</Text>
                            <Text>{card?.cvc}</Text>
                            <Button onClick={() => handleDeleteCard(card.id)} className="!bg-transparent hover:text-red-400 text-black"><Trash2 className="w-4 h-4"/></Button>
                        </Box>
                    ))
                }
            </Box>
            <hr className="border"/>
            {
                showCardForm && <PaymentCreditCard onAdd={handleAddCard} />
            }
        </Box>
    )
}