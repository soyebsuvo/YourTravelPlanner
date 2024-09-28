import Accommodation from "@/Components/Accommodation/Accommodation";
import Budget from "@/Components/Budget/Budget";
import { MyContext } from "@/Components/Context/Context";
import { useContext, useRef } from "react";

export const StepTwoSection = () => {
    const {
        budget,
        accommodation,
        setBudget,
        setAccommodation,
    } = useContext(MyContext);

    const durationScroll = useRef();
    const membersScroll = useRef();

    const scrollHandler = (element) => {}

    return (
        <div className="flex flex-row items-center justify-center gap-4 p-8 mt-10">
            <Budget value={budget} setValue={setBudget} scrollHandler={scrollHandler} membersScroll={durationScroll} durationScroll={durationScroll} />
            <Accommodation value={accommodation} setValue={setAccommodation} membersScroll={membersScroll} scrollHandler={scrollHandler} budgetScroll={membersScroll} />
        </div>
    )
}