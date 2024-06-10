import { useEffect } from "react";
import { useState } from "react";


const Index = () => {
    const [ places , setPlaces ] = useState();
    useEffect(() => {
        fetch("./dataset.json")
        .then(res => res.json())
        .then(data => setPlaces(data))
    },[])
    console.log(places?.places)
    const filtered = places?.places?.filter((place) => {
        return place.includes("Mak")
    })
    console.log(filtered)

    return (
        <div>
            
        </div>
    );
};

export default Index;