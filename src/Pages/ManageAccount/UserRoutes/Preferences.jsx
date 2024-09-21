import { Button } from "@/shadecn/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shadecn/ui/dropdown-menu";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";

const ButtonBaseStyle = `!bg-transparent hover:text-blue-400 text-end text-blue-500 font-bold cursor-pointer`;
const WrapperBaseStyle = `w-full flex flex-row items-center justify-between py-5`;

const Preferences = () => {



    return (
        <Box className="p-2 md:p-6"> 
            <Box className="flex justify-between items-center py-2 pb-4">
                <Box className="space-y-2">
                    <Heading className="text-2xl md:text-4xl font-semibold">Preferences</Heading>
                    <Text className="text-sm md:text-lg text-gray-500">Change Your Language, currency and accessibility requirements</Text>
                </Box>
            </Box>
            <hr className="border"/>
            <HStack className={WrapperBaseStyle}>
                <Heading className="font-semibold">Currency</Heading>
                <Box className="flex flex-row items-center justify-center space-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-gray-500 font-medium text-sm px-4 py-2 hover:bg-neutral-100">
                            Bangladeshi TAKA (BDT)                                
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>BDT</DropdownMenuItem>
                            <DropdownMenuItem>USD</DropdownMenuItem>
                            <DropdownMenuItem>RP</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Box>
            </HStack>
            <hr className="border"/>
            <Box className={WrapperBaseStyle}>
                <Heading className="font-semibold">Language</Heading>
                <Box className="flex flex-row items-center justify-center space-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-gray-500 font-medium text-sm px-4 py-2 hover:bg-neutral-100">
                            English
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Bangla</DropdownMenuItem>
                            <DropdownMenuItem>English</DropdownMenuItem>
                            <DropdownMenuItem>Hindi</DropdownMenuItem>
                            <DropdownMenuItem>Urdu</DropdownMenuItem>
                            <DropdownMenuItem>Chineese</DropdownMenuItem>
                            <DropdownMenuItem>UHang</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Box>
            </Box>
            {/* <hr className="border"/>
            <Box className={WrapperBaseStyle}>
                <Heading className="font-semibold">Accessibility Requirements</Heading>
                <Box className="flex flex-row items-center justify-center space-x-2">
                    <h4 className="text-gray-500 font-medium text-sm">Filter out properties that don&apos;t meet your needs</h4>
                    <Button className={ButtonBaseStyle}>Edit</Button>
                </Box>
            </Box> */}
            <hr className="border"/>
        </Box>
    );
};

export default Preferences;