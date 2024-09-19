import { useForm } from "react-hook-form";

import { Box, FormControl, FormHelperText, FormLabel, Select, Text } from "@chakra-ui/react";
import { Button } from "@/shadecn/ui/button";
import { Input } from "@/shadecn/ui/input";

export const AddTravellerForm = ({ onAdd, showForm }) => {
    const { register, reset, handleSubmit, formState: { errors, isValid } } = useForm();

    const onSubmit = (formData) => {
        const updatedFormData = {
            ...formData,
            id : crypto.randomUUID()
        }
        onAdd(updatedFormData);
        reset({
            firstName : "",
            lastName : "",
            dateOfBirth : undefined,
            gender : ""
        })
    }

    if(!showForm) return <></>;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormControl className="space-y-4">
                <FormLabel>First Name</FormLabel>
                <Input type='text' {...register("firstName", { required: true })} />
            </FormControl>
            <FormControl className="space-y-4">
                <FormLabel>Last Name</FormLabel>
                <Box>
                    <Input type='text' {...register("lastName", { required: true })} />
                    <FormHelperText className="text-neutral-400">
                        Please enter this persons name exactly as written on their passport or other official travel document
                    </FormHelperText>
                </Box>
            </FormControl>
            <FormControl className="space-y-4">
                <FormLabel>Last Name</FormLabel>
                <Input type='date' {...register("dateOfBirth", { required: true })} />
                <FormHelperText className="text-neutral-400">Must Be 18 Years Or Older</FormHelperText>
            </FormControl>
            <FormControl className="space-y-4">
                <FormLabel>Gender</FormLabel>
                <Select {...register("gender", { required: true })} placeholder='Select Gender' className="w-full py-2">
                    <option>Male</option>
                    <option>Female</option>
                </Select>
            </FormControl>

            <Box className="flex space-x-2 items-start justify-start pt-5">
                <Input type="checkbox" {...register("terms", { required: true })} className="w-4 h-4" />
                <Text>
                    I confirm that Iam authorised to provide the personal data of any co-traveller (including children) to Booking.com for this service.
                    In addition, I confirm that Ive informed the other travellers that I’m providing their personal data to Booking.com.
                </Text>
            </Box>

            <Box className="flex flex-col w-full space-y-2">
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600 py-2 px-5 text-white font-semibold rounded-md">Submit</Button>
                <Text className="text-center text-red-400 font-bold">
                    {errors && !isValid && <span>Please Fill All The Inputs</span>}
                </Text>
            </Box>
        </form>
    )
}
