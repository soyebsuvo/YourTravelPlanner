import { Box, Image } from "@chakra-ui/react";
import PhoneInput from "react-phone-input-2";

export const StepFourSection = ({ sourceDestination, setSourceDestination }) => {
    return (
      <div className="flex flex-row items-center justify-center gap-4 p-4 bg-neutral-100 rounded-xl mt-10">
        <Box className="w-6/12 max-md:hidden flex flex-col items-center justify-center h-full">
            <Image
                src="https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="w-full rounded-lg"
            />
        </Box>
        <Box className="w-full flex flex-col items-center justify-center gap-8 p-2">
            <div className="w-full px-4 rounded-xl">
            <div className="space-y-4">
                <h2 className="text-md max-md:text-sm md:text-xl font-semibold text-left">
                    Where are you starting from? (Source station) <span className="text-red-500">*</span>
                </h2>
                <input
                    className="w-full h-10 p-2 border max-md:text-sm"
                    placeholder="Source Destination"
                    value={sourceDestination}
                    onChange={(e) => setSourceDestination(e.target.value)}
                />
            </div>
            </div>
            <div className="w-full px-4 rounded-xl">
            <div className="space-y-4">
                <h2 className="text-md max-md:text-sm md:text-xl font-semibold text-left">
                    Got any tentative travel dates in mind? <span className="text-red-500">*</span>
                </h2>
                <input
                    type="date"
                    className="w-full h-10 p-2 border max-md:text-sm"
                    placeholder="Tentative travel dates"
                />
            </div>
            </div>
            <div className="w-full px-4 rounded-xl">
                <div className="space-y-4">
                    <h2 className="text-md max-md:text-sm md:text-xl font-semibold text-left">
                        Your mobile number <span className="text-red-500">*</span>
                    </h2>
                    <PhoneInput
                        inputClass="w-full h-10 p-2 border max-md:text-sm"
                    />
                </div>
                </div>
        </Box>
      </div>
    );
};
