import { func } from "prop-types"


export default function ChakraProvider ({ children }) {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>  
    )
}
