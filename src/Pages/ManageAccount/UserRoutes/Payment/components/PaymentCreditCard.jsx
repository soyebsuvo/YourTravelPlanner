import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/lib/styles.scss';
import valid from 'card-validator';
import { Input } from '@/shadecn/ui/input';
import { Button } from '@/shadecn/ui/button';
import Swal from 'sweetalert2';

export const PaymentCreditCard = ({ onAdd }) => {
    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focused: '',
    });

    const handleInputFocus = (e) => {
        setCardData({ ...cardData, focused: e.target.name });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "number") {
            const formattedNumber = value.replace(/\D/g, ''); // Strip non-digits
            setCardData({ ...cardData, [name]: formattedNumber });
        } else {
            setCardData({ ...cardData, [name]: value });
        }
    };

    const validateCard = () => {
        const numberValidation = valid.number(cardData.number);
        const expiryValidation = valid.expirationDate(cardData.expiry);
        const cvcValidation = valid.cvv(cardData.cvc);

        if (!numberValidation.isValid) {
            Swal.fire({
                icon: 'error',
                title: 'Card number is invalid',
                text: 'please provide vaild information',
            })
            return;
        }
        if (!expiryValidation.isValid) {
            Swal.fire({
                icon: 'error',
                title: 'Expiry date is invalid',
                text: 'please provide vaild information',
            })
            return;
        }
        if (!cvcValidation.isValid) {
            Swal.fire({
                icon: 'error',
                title: 'CVC code is invalid',
                text: 'please provide vaild information',
            })
            return;
        }
        else {
            onAdd({
                id : crypto.randomUUID(),
                number : cardData.number,
                name : cardData.name,
                cvc : cardData.cvc,
                expiry : cardData.expiry
            })
            Swal.fire({
                icon: 'sucess',
                title: 'Saved',
                text: 'Card is valid and saved!',
            })
        }
    };

    return (
        <div id="PaymentForm" className="flex flex-col items-center justify-center space-y-4 mt-10">
            <Cards
                number={cardData.number}
                name={cardData.name}
                expiry={cardData.expiry}
                cvc={cardData.cvc}
                focused={cardData.focused}
                preview
            />
            <form className="flex flex-col items-center justify-center space-y-2 w-full mt-5">
                <Input
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={cardData.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={cardData.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <Input
                    type="tel"
                    name="expiry"
                    placeholder="MM/YY"
                    value={cardData.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <Input
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    value={cardData.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <Button className="bg-blue-500 hover:bg-blue-400 w-full" type="button" onClick={validateCard}>Save Card</Button>
            </form>
        </div>
    )
}
