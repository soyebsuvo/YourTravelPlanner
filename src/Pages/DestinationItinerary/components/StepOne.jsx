import { MyContext } from "@/Components/Context/Context";
import Duration from "@/Components/Duration/Duration";
import Members from "@/Components/Members/Members";
import { useContext, useRef } from "react";

export const StepOneSection = () => {

    const {
        days,
        members,
        setDays,
        setMembers,
    } = useContext(MyContext);

    const durationScroll = useRef();
    const membersScroll = useRef();

    const scrollHandler = (element) => {}

    return (
        <div className="flex flex-row items-center justify-center gap-4 p-8 mt-10">
            <Duration value={days} setValue={setDays} scrollHandler={scrollHandler} membersScroll={durationScroll} durationScroll={durationScroll} />
            <Members value={members} setValue={setMembers} membersScroll={membersScroll} scrollHandler={scrollHandler} budgetScroll={membersScroll} />
        </div>
    )
}