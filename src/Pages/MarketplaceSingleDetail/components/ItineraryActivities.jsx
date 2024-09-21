import { memo, Suspense, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from '@chakra-ui/react';

export const ItineraryActivities = memo(({ response }) => {
    
    const memoizedItinerary = useMemo(() => { return response?.itinerary ?? [] }, [response])

    return (
        <Suspense>
            <Box className="w-full">
                {
                    memoizedItinerary.map((city, cityIndex) => (
                        <Box key={cityIndex} className="flex flex-col md:flex-row items-start justify-between my-4">
                            <Box className="w-full p-4">
                                <Box className="flex justify-between items-center border-b-2 pb-4">
                                    <Text className="text-xl font-bold">{city?.destination}</Text>
                                <Box className="text-gray-500 font-semibold">
                                    {city?.travelDates?.start} to {city?.travelDates?.end}
                                </Box>
                                </Box>
                                {(
                                    city?.dailyActivities ?? []).map((item, activityIndex) => (
                                        <Box key={activityIndex} className="mt-4">
                                            <Text className="text-gray-500 font-bold">{item?.day}</Text>
                                            <Box className="flex flex-col items-start justify-center bg-neutral-100 p-2 rounded-lg">
                                                {item?.activities?.map((activityItem, itemIndex) => (
                                                    <Box key={itemIndex} className="p-1">
                                                        <Text className="text-gray-500">{activityItem?.activity}</Text>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    )
                                )}
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Suspense>
    )
})

ItineraryActivities.displayName = "ItineraryActivities";
ItineraryActivities.propTypes = { response: PropTypes.object.isRequired };