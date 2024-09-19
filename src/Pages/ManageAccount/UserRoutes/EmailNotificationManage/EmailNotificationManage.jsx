import { Box, Heading } from "@chakra-ui/react";

import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

import { ENTabManager } from "./components/ENTabManager";

export default function EmailNotificationManage()
{
    return (
        <Box>
            <Navbar className="bg-blue-600" />

            <Box className="max-w-screen-xl m-auto w-full mt-32 min-h-screen space-y-8 mb-10">
                <Heading className="capitalize text-center text-2xl text-black font-bold max-md:text-xl max-sm:text-lg">Manage your email communication preferences</Heading>
                <ENTabManager/>
            </Box>

            <Footer/>
        </Box>
    )
}

