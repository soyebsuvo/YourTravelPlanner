import { Box, CloseButton, Heading } from '@chakra-ui/react'
import { useState } from 'react'

export const PromotionalBanner = () => {

    const [show, setShow] = useState(true);

    if(!show) return null;

    return (
        <Box className='bg-gradient-to-r from-indigo-400 to-cyan-400 py-4 relative'>
            <Heading className='text-lg max-md:text-base text-center font-semibold text-white'>
                Explore top European and Asian destinations for unforgettable experiences! 🌍✨ Your journey starts here. 🏞️🌸
            </Heading>
            <CloseButton onClick={() => setShow(false)} className='absolute right-5 top-1/2 -translate-y-1/2'/>
        </Box>
    )
}
