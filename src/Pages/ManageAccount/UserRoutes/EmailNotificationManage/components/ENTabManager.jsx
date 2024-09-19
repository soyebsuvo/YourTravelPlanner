import { Box } from "@chakra-ui/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadecn/ui/tabs";

import { NewsLatterServiceTab } from "./tabs/NewsLatterServiceTab";
import { ReservationsTab } from "./tabs/ReservationsTab";


const TabsTriggerStyle = `text-base !bg-transparent border-b-2 border-transparent h-14 data-[state=active]:border-blue-500 text-neutral-400 data-[state=active]:!text-blue-400
                        max-md:text-md max-sm:text-xs`;

export const ENTabManager = () => {

    return (
        <Box className="border-2 border-neutral-400 rounded-xl p-4">
            <Tabs defaultValue="newsletterServices" className="w-full space-y-10">
                <TabsList className="!bg-transparent space-x-4 border-b-2 h-14 border-neutral-400 w-full flex flex-row items-center justify-start">
                    <TabsTrigger className={TabsTriggerStyle} value="newsletterServices">NewsLetters And Services</TabsTrigger>
                    <TabsTrigger className={TabsTriggerStyle} value="reservations">Reservations</TabsTrigger>
                </TabsList>
                <TabsContent value="newsletterServices" className="w-full space-y-8">
                    <NewsLatterServiceTab />
                </TabsContent>
                <TabsContent value="reservations">
                    <ReservationsTab/>
                </TabsContent>
            </Tabs>
        </Box>
    )
}
