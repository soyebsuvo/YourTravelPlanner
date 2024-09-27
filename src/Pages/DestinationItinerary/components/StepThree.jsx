import { MyContext } from "@/Components/Context/Context";
import Transportation from "@/Components/Transportation/Transportation";
import { useContext, useRef } from "react";

export const StepThreeSection = () => {

    const {
        transportation,
        setTransportation,
    } = useContext(MyContext);

    const durationScroll = useRef();
    const membersScroll = useRef();

    const scrollHandler = (element) => {}

    return (
        <div className="flex flex-row max-md:flex-col items-center justify-center gap-4 p-8 mt-10">
            <Transportation value={transportation} setValue={setTransportation} scrollHandler={scrollHandler} membersScroll={durationScroll} durationScroll={durationScroll} />
            <div className="md:w-1/2 flex flex-col items-center justify-center">
                <h2 className='text-md md:text-2xl font-bold text-center my-3'>Any Specific Need ? (Optional)</h2>
                <textarea id="specificNeed" cols="30" rows="5" maxLength="99"
                    className="w-full text-xl p-5 resize-none shadow focus:outline-none my-5 rounded h-full"
                    placeholder="Write here if you have any specific need. (200 characters only)">    
                </textarea>
            </div>
        </div>
    )
}