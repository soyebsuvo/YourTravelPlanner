import { useEffect, useState } from "react";

import bg_1 from "../../../../public/bannerBGs/BG_1.jpg";
import bg_2 from "../../../../public/bannerBGs/BG_2.jpg";
import bg_3 from "../../../../public/bannerBGs/BG_3.jpg";
import bg_4 from "../../../../public/bannerBGs/BG_4.jpg";
import bg_5 from "../../../../public/bannerBGs/BG_5.jpg";
import bg_6 from "../../../../public/bannerBGs/BG_7.jpg";
import bg_7 from "../../../../public/bannerBGs/BG_8.jpg";
import bg_8 from "../../../assets/Pyramid-at-Louvre-Museum-Paris-France.jpg";

import { Box } from "@chakra-ui/react";

export const BannerBackgroundCorousal = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        bg_1,
        bg_2,
        bg_3,
        bg_4,
        bg_5,
        bg_6,
        bg_7,
        bg_8
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // 5s
        return () => clearInterval(interval);
    }, [images.length]);    

    return (
        <Box className="w-full hero min-h-[500px] absolute">
            {
                (images ?? []).map((image, index) => (
                    <Box
                        key={index}
                        className={`hero transition-opacity relative min-h-[500px] duration-1000 ease-in-out z-0 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                        <Box className={`w-full h-full bg-black p-2 absolute inset-0 ${index === activeIndex ? 'opacity-0' : 'opacity-5'}`}></Box>
                    </Box>
                ))
            }
        </Box>
    )
}
