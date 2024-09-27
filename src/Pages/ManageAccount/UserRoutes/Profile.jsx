import { useState } from "react";
import { useAuth } from "@/context/AuthContextProvider";
import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Button } from "@/shadecn/ui/button";
import { Input } from "@/shadecn/ui/input";
import { DatePicker } from "@/shadecn/ui/date-picker";


const ButtonBaseStyle = `!bg-transparent hover:text-blue-400 text-end text-blue-500 font-bold cursor-pointer`;
const WrapperBaseStyle = `w-full flex flex-row items-center justify-between py-5`;

const Profile = () => {

    const [currentUsername, setCurrentUsername] = useState("");
    const [currentPhoneNumber, setCurrentPhoneNumber] = useState(0);
    const [currentNationlity, setCurrentNationlity] = useState("");
    const [currentDateOfBirth, setCurrentDateOfBirth] = useState();

    const [usernameEditMode, setUsernameEditMode] = useState(false);
    const [phoneNumberEdit, setPhoneNumberEdit] = useState(false);
    const [dateOfBirthEdit, setDateOfBirthEdit] = useState(false);
    const [nationalityEdit, setNationalityEdit] = useState(false);

    const { user, updateUserDisplayName, verifyEmail, updatePhoneNumber } = useAuth();

    return (
        <div className="p-2 md:p-6 w-full"> 
            <HStack className="flex justify-between items-center py-2 pb-4">
                <Box className="space-y-2">
                    <Heading className="text-2xl md:text-4xl font-semibold">Personal Details</Heading>
                    <Text className="text-sm md:text-lg text-gray-500">Update your information and find how it&apos;s used</Text>
                </Box>
                <Box>
                    <Image src={user?.photoURL} alt="Profile" className="w-12 h-12 md:w-16 md:h-16 rounded-full border" />                
                </Box>
            </HStack>
            <hr className="border"/>
            <HStack className={WrapperBaseStyle}>
                <Heading className="font-semibold">Name</Heading>
                <Box className="flex flex-row">
                    <Input
                        defaultValue={user?.displayName}
                        disabled={!usernameEditMode}
                        autoFocus
                        className={`w-auto ${!usernameEditMode ? '!border-none !outline-none !ring-0 bg-transparent' : ''} !opacity-100 text-end`}
                        onChange={(e) => setCurrentUsername(e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') {
                                updateUserDisplayName(currentUsername);
                                setUsernameEditMode(false);
                            }
                        }}
                    />
                    <Button onClick={() => {
                        setUsernameEditMode(!usernameEditMode);
                        if(usernameEditMode) { updateUserDisplayName(currentUsername); }
                    }} 
                    className={ButtonBaseStyle}>
                        {usernameEditMode ? 'Save' : 'Edit'}
                    </Button>
                </Box>
            </HStack>
            <hr className="border"/>
            <HStack className={WrapperBaseStyle}>
                <Heading className="font-semibold">Email Address</Heading>
                <Box className="flex flex-col items-end justify-end overflow-hidden">
                    <Text className=" text-gray-500 font-medium">
                        {user?.email}
                        {user?.emailVerified ? <span className="mx-2 bg-blue-500 text-white px-1 text-sm rounded uppercase">verified</span> : <span className="bg-red-400 text-white px-1 text-sm rounded">unverified</span>}
                    </Text>
                    <p className="text-sm text-gray-500 truncate max-md:text-xs">
                        This is the email address you use to sign in. It&apos;s also where we send your travel details
                    </p>
                </Box>
                <Button disabled={user?.emailVerified} onClick={() => verifyEmail()} className='disabled:hidden !bg-transparent hover:text-blue-400 text-blue-500'>
                    Verify
                </Button>
            </HStack>
            <hr className="border"/>
            <HStack className={WrapperBaseStyle}>
                <Heading className="col-span-3 font-semibold">Phone</Heading>
                <Box className="flex flex-row">
                    <Input
                        defaultValue={user?.phoneNumber}
                        disabled={!phoneNumberEdit}
                        autoFocus
                        className={`w-auto ${!phoneNumberEdit ? '!border-none !outline-none !ring-0 bg-transparent' : ''} !opacity-100 text-end`}
                        onChange={(e) => setCurrentPhoneNumber(e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') {
                                updatePhoneNumber(currentUsername);
                                setPhoneNumberEdit(false);
                            }
                        }}
                    />
                    <Button onClick={() => {
                        setPhoneNumberEdit(!phoneNumberEdit);
                        if(phoneNumberEdit) { updatePhoneNumber(currentPhoneNumber); }
                    }} 
                    className={ButtonBaseStyle}>
                        {phoneNumberEdit ? 'Save' : 'Edit'}
                    </Button>
                </Box>
            </HStack>
            <hr className="border"/>
            <HStack className={WrapperBaseStyle}>
                <Heading className="col-span-3 font-semibold">Date of birth</Heading>
                <Box className="flex flex-row space-x-2">

                    <DatePicker disabled={!dateOfBirthEdit} label={user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toDateString() : "Pick Date"} className={`${dateOfBirthEdit ? '' : '!border-none !bg-transparent !text-black !opacity-100 disabled:!opacity-100'} w-auto`} value={currentDateOfBirth} onValueChange={setCurrentDateOfBirth} />

                    <Button onClick={() => {
                        setDateOfBirthEdit(!dateOfBirthEdit);
                        if(dateOfBirthEdit) { /* updateDateOfBirth(currentDateOfBirth) */ }
                    }} 
                    className={ButtonBaseStyle}>
                        {dateOfBirthEdit ? 'Save' : 'Edit'}
                    </Button>
                </Box>
            </HStack>
            <hr className="border"/>
            <HStack className={WrapperBaseStyle}>
                <Heading className="col-span-3 font-semibold">Nationality</Heading>
                <Box className="flex flex-row space-x-2">
                    <h4 className="col-span-6 text-gray-500 font-medium">Your nationality</h4>
                    
                    <Button onClick={() => {
                        setNationalityEdit(!nationalityEdit);
                        if(nationalityEdit) { /* updateDateOfBirth(currentDateOfBirth) */ }
                    }} 
                    className={ButtonBaseStyle}>
                        {nationalityEdit ? 'Save' : 'Edit'}
                    </Button>
                </Box>
            </HStack>
            <hr className="border"/>

        </div>
    );
};

export default Profile;