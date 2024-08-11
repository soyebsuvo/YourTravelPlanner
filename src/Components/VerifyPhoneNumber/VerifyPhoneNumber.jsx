import { useContext, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { MyContext } from "../Context/Context";
import { linkWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const VerifyPhoneNumber = () => {
    const { phone, setPhone, setConfirmationResult } = useContext(MyContext)
    const [btnStatus, setBtnStatus] = useState(true);
    let recaptcha;
    const handleSubmitPhoneNumber = async () => {
        try {
            setBtnStatus(false)
            if (recaptcha) {
                recaptcha.clear();
            }
            recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
            const confirmation = await linkWithPhoneNumber(auth?.currentUser, phone, recaptcha)
            setConfirmationResult(confirmation)
            // document.getElementById('phone_verify').close();
            document.getElementById('OTP').showModal();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="">
            <Navbar />
            <div className="h-20 bg-blue-600"></div>
            <div className="max-w-xl mx-auto h-[600px] flex justify-center items-center">
                <div className="w-full border-4 shadow-xl rounded-2xl p-7">
                    <div>
                        <h2 className="text-2xl font-semibold mt-3 mb-8 text-center">Enter Your Phone Number</h2>
                    </div>
                    <div className='w-[50%] mx-auto'>
                        <PhoneInput
                            country={'bd'}
                            inputClass='w-full'
                            containerClass='w-full'
                            value={phone}
                            onChange={phone => setPhone(`+${phone}`)}
                        />
                    </div>
                    <div className="z-20 w-fit mx-auto mt-6" id="recaptcha"></div>
                    <div className="flex justify-center">
                        <button onClick={handleSubmitPhoneNumber} className={`px-6 py-2 bg-blue-600 text-white rounded mt-8 ${btnStatus ? '' : 'btn-disabled'}`}>Send OTP</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default VerifyPhoneNumber;