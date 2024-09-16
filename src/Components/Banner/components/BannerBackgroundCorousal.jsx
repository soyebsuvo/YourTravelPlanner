import { useEffect, useState } from "react";

import background from "../../../assets/Pyramid-at-Louvre-Museum-Paris-France.jpg";
import background2 from "../../../assets/desktop_1_min_1_9896841547.avif";
import { Box } from "@chakra-ui/react";

export const BannerBackgroundCorousal = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        background,
        background2,
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5s
        return () => clearInterval(interval);
    }, [images.length]);    

    return (
        <Box className="w-full hero min-h-[500px] absolute">
            {
                (images ?? []).map((image, index) => (
                    <Box
                        key={index}
                        className={`hero transition-opacity min-h-[500px] duration-1000 ease-in-out z-0 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}></Box>
                ))
            }
        </Box>
    )
}
