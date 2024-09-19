import { Button } from '@/shadecn/ui/button';
import { Switch } from '@/shadecn/ui/switch';
import { Box, VStack, HStack, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

// Example data structure
const switchData = [
    {
      parent: 'Reservation emails',
      description: 'Emails you receive after making a reservation. This includes invitations to review the properties you stayed in.',
      children: [
        { name: 'Upcoming booking', enabled: false },
        { name: 'Review invites', enabled: false },
        { name: 'Offers in confirmation emails', enabled: false },
        { name: 'Booking confirmation emails', enabled: false },
      ],
    },
  ];

export const ReservationsTab = () => {

    const [switchGroups, setSwitchGroups] = useState(switchData);

    const handleParentSwitch = (parent) => {
        setSwitchGroups((prevSwitchGroups) => {
            const newSwitchGroups = [...prevSwitchGroups];

            newSwitchGroups[parent] = {
                ...newSwitchGroups[parent],
                parentEnabled: !newSwitchGroups[parent].parentEnabled,
                children: newSwitchGroups[parent].parentEnabled
                    ? newSwitchGroups[parent].children
                    : newSwitchGroups[parent].children.map((child) => ({
                          ...child,
                          enabled: false,
                      })),
            }
    
            return newSwitchGroups;
        })
    }
    

    const handleChildSwitch = (parentIndex, childIndex) => {
        setSwitchGroups((prevSwitchGroups) => {
            return prevSwitchGroups.map((group, pIdx) => {
                if (pIdx === parentIndex) {
                    if (group.parentEnabled) {
                        return {
                            ...group,
                            children: group.children.map((child, cIdx) =>
                                cIdx === childIndex
                                    ? { ...child, enabled: !child.enabled }
                                    : child
                            ),
                        }
                    }
                }
                return group;
            })
        })
    }

    const handleUnsubscribeToAll = () => {
        setSwitchGroups((prevSwitchGroups) => {
            return prevSwitchGroups.map((group) => {
                return {
                    ...group,
                    parentEnabled: false,
                    children: group.children.map((child) => ({
                        ...child,
                        enabled: false,
                    })),
                }
            })
        })
    }

    useEffect(() => {
        setSwitchGroups(prev => {
            return prev.map(group => {
                return {
                    ...group,
                    children: group.children.map(child => {
                        return {
                            ...child,
                            enabled: group.parentEnabled ? child.enabled : false
                        }
                    })
                }
            })
        })
    }, [switchGroups])
    

    return (
        <VStack className="w-full space-y-4">
            {
                switchGroups.map((group, parentIndex) => (
                    <Box key={parentIndex} className="w-full space-y-4">
                        <HStack className="w-full flex flex-row items-center justify-between">
                            <Box className="space-y-2">
                                <Heading className="font-bold text-xl max-md:text-lg">{group.parent}</Heading>
                                <Text className="text-sm max-md:text-xs">{group.description}</Text>
                            </Box>
                            <Switch
                                checked={group.parentEnabled}
                                onClick={() => handleParentSwitch(parentIndex)}
                            />
                        </HStack>

                        <VStack className="ml-5 space-y-2">
                            {
                                group.children.map((child, childIndex) => (
                                    <Box key={childIndex} className="w-full flex flex-row items-center justify-between border-b-2 border-neutral-300 py-2">
                                        <Heading className="font-bold text-base max-md:text-sm">{child.name}</Heading>
                                        <Switch
                                            checked={child.enabled && group.parentEnabled}
                                            disabled={!group.parentEnabled}
                                            onClick={() => handleChildSwitch(parentIndex, childIndex)}
                                        />
                                    </Box>
                                ))
                            }
                        </VStack>
                    </Box>
                ))
            }

            <Button className="w-full bg-red-500 hover:bg-red-400" onClick={handleUnsubscribeToAll}>Unsubcribe from all newsletters and services</Button>
        </VStack>
    )
}
