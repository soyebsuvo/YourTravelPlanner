import { Box, Select, Text } from "@chakra-ui/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

export const TripFilter = () => {

    const FILTERS = [
        {
            name : "Budget",
            options : [
                {
                    label : "option 1",
                    value : "value 1"
                },
                {
                    label : "option 2",
                    value : "value 2"
                },
                {
                    label : "option 3",
                    value : "value 3"
                }
            ]
        },
        {
            name : "no of days",
            options : [
                {
                    label : "1",
                    value : "value 1"
                },
                {
                    label : "2",
                    value : "value 2"
                },
                {
                    label : "3",
                    value : "value 3"
                }
            ]
        },
        {
            name : "hotel ratings",
            options : [
                {
                    label : "1 start",
                    value : "value 1"
                },
                {
                    label : "2 star",
                    value : "value 2"
                },
                {
                    label : "3 star",
                    value : "value 3"
                }
            ]
        }
    ]

    const handleClick = (option) => {
        console.log(option);
    }

    return (
        <Box className="w-full p-2 bg-neutral-100 space-x-4">

            {
                FILTERS.map((filter, index) => (
                    <DropdownMenu key={index}>
                        <DropdownMenuTrigger className="bg-neutral-200 p-2 rounded-lg">{filter.name}</DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-emerald-900 p-4 space-y-4">
                            {
                                filter.options.map((option, index) => (
                                    <DropdownMenuItem onClick={(e) => handleClick(option)} key={index} className="text-white">
                                        {option.label}
                                    </DropdownMenuItem>
                                ))
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                ))
            }
          
        </Box>
    )
}
