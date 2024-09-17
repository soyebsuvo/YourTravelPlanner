import { useAuth } from "@/context/AuthContextProvider";
import { Button } from "@/shadecn/ui/button";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";

const ButtonBaseStyle = `!bg-transparent hover:text-blue-400 text-end text-blue-500 font-bold cursor-pointer max-sm:text-xs`;
const WrapperBaseStyle = `w-full flex flex-row items-center justify-between py-5`;

const Security = () => {

    const { resetPassword, logOut } = useAuth();

    return (
        <Box className="p-2 md:p-6"> 
            <Box className="flex justify-between items-center py-2 pb-4">
                <Box className="space-y-2">
                    <Heading className="text-2x md:text-4xl font-semibold">Security</Heading>
                    <h4 className="text-sm md:text-lg text-gray-500">Change your security settings, set up secure authentication or delete your account.</h4>
                </Box>
            </Box>
            <hr className="border"/>
            <HStack className={WrapperBaseStyle}>
                <Box className="flex flex-col items-start justify-start space-y-2">
                    <Heading className="font-semibold">Password</Heading>
                    <h4 className="text-gray-500 font-medium text-sm max-sm:text-xs">Reset your password regularly to keep your account secure</h4>
                </Box>
                <Box className="flex flex-row space-x-2 items-center justify-center">
                    <Button onClick={() => resetPassword()} className={ButtonBaseStyle}>Reset</Button>
                </Box>
            </HStack>
            <hr className="border"/>
            <HStack className={WrapperBaseStyle}>
                <Box className="flex flex-col items-start justify-start space-y-2">
                    <Heading className="font-semibold">Two-factor authentication</Heading>
                    <h4 className="text-gray-500 font-medium text-sm max-sm:text-xs">Increase the security of your account by setting up two-factor authentication</h4>
                </Box>
                <Box className="flex flex-row space-x-2 items-center justify-center">
                    <Button className={ButtonBaseStyle}>Set Up</Button>
                </Box>
            </HStack>
            <hr className="border"/>
            <HStack className={WrapperBaseStyle}>
                <Box className="flex flex-col items-start justify-start space-y-2">
                    <Heading className="col-span-3 font-semibold">Active Sessions</Heading>
                    <h4 className="text-gray-500 font-medium text-sm max-sm:text-xs">Seleting &apos;sign out&apos; will sign you out from all devices exept this one. The process can take upto 5 minutes </h4>
                </Box>
                <Box className="flex flex-row space-x-2 items-center justify-center">
                    <Button onClick={() => logOut()} className={ButtonBaseStyle}>Sign Out</Button>
                </Box>
            </HStack>
            <hr className="border"/>
            <HStack className={WrapperBaseStyle}>
                <Box className="flex flex-col items-start justify-start space-y-2">
                    <Heading className="col-span-3 font-semibold">Delete Account</Heading>
                    <h4 className="text-gray-500 font-medium text-sm max-sm:text-xs">Permanently delete your wandergeniellm.com account</h4>
                </Box>
                <Box className="flex flex-row space-x-2 items-center justify-center">
                    <Button className={ButtonBaseStyle}>Delete Account</Button>
                </Box>
            </HStack>
            <hr className="border"/>
        </Box>
    );
};

export default Security;