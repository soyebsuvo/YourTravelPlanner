import { AccordianQuestion } from "@/Components/accordianQuestion/AccordianQuestion";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const TRAVELER_CANCELLATION_POLICY = [
    {
        label: 'Before Accepting an Offer',
        options : [
            "No Penalty: Travelers can cancel their bid or modify trip details at any time before accepting an offer from a travel agency or a partner organization. There are no penalties or fees for making changes or canceling during this period."
        ],
    },
    {
        label: 'After Accepting an Offer',
        options : [
            "Cancellation Window: If a traveler needs to cancel after accepting an offer, they must do so within 24 hours of acceptance to avoid any penalties. The 24-hour window allows travelers to reconsider and make changes without incurring fees.",
            "Partial Refund: Cancellations made after the 24-hour window but more than 14 days before the trip start date will be eligible for a partial refund. The refund amount will be calculated based on the terms set by the travel agency or the partner organization and may include service fees.",
            "No Refund: Cancellations made within 14 days of the trip start date are not eligible for a refund, except in cases of documented emergencies. Each case will be reviewed individually.",
        ],
    },
    {
        label: 'Emergencies and Special Circumstances',
        options : [
            "In the event of an emergency (such as illness, natural disaster, or other unforeseeable events), travelers should contact WanderGenie LLM support immediately. We will work with the travel agency or the partner organization to find a suitable resolution, which may include rescheduling the trip or issuing a partial refund."
        ],
    },
]

const TRAVEL_AGENCY_PARTNER_ORGANIZATION_CANCELLATION_POLICY = [
    {
        label: 'Offer Withdrawal',
        options : [
            "Before Traveler Acceptance: Agencies can withdraw their offers at any time before a traveler accepts. There are no penalties for withdrawing offers during this period.",
            "After Traveler Acceptance: If an agency needs to cancel an offer after it has been accepted by a traveler, they must do so within 24 hours of acceptance. The agency must provide a valid reason for the cancellation. Repeated cancellations may result in penalties or suspension from the platform"
        ],
    },
    {
        label: 'Traveler-Initiated Cancellations',
        options : [
            "In cases where a traveler cancels after accepting an offer, the agency will be notified immediately. Agencies will retain any non-refundable deposits as per their terms and conditions. WanderGenie LLM will facilitate the communication and ensure any eligible refunds are processed promptly."
        ],
    },
]

const REFUND_PROCESS = [
    {
        label: 'Refund Timeline',
        options : [
            "Refunds, where applicable, will be processed within 7-10 business days from the cancellation date. The exact time frame may vary depending on the travel agency's or the  partner organization’s policies and the payment method used"
        ],
    },
    {
        label: 'Refund Method',
        options : [
            "Refunds will be issued using the original payment method. Travelers will receive a confirmation email once the refund has been processed."
        ],
    },
]


export default function Cancellations()
{
    return (
        <Box className='bg-theme-base pt-20'>
            <Navbar className="bg-theme-header" />
            <Container className='max-w-6xl mx-auto md:px-16 my-4 pb-10 rounded-2xl border border-theme-header'>
                <Box>
                    <Heading className='text-3xl font-semibold my-8 text-black'>WanderGenie LLM Cancellation Policy</Heading>
                    <Box className='space-y-8 mb-8'>
                        <Text className='text-black'>
                            At WanderGenie LLM, we understand that plans can change.
                            Our cancellation policy aims to provide clarity and fairness for both travelers and travel agencies.
                            Please read through the following terms carefully to understand how cancellations are handled on our platform.
                        </Text>
                    </Box>
                </Box>
                <VStack className="w-full mx-auto text-gray-600">
                    <Box className="grid grid-cols-1 gap-6">
                        <Box className="p-4 space-y-4 border border-theme-header rounded-xl">
                            <Heading className="text-black text-xl font-bold">Traveler Cancellation Policy</Heading>
                            <AccordianQuestion options={TRAVELER_CANCELLATION_POLICY} />
                        </Box>
                        <Box className="p-4 space-y-4 border border-theme-header rounded-xl">
                            <Heading className="text-black text-xl font-bold">Travel Agency/Partner Organization Cancellation Policy</Heading>
                            <AccordianQuestion options={TRAVEL_AGENCY_PARTNER_ORGANIZATION_CANCELLATION_POLICY} />
                        </Box>
                        <Box className="p-4 space-y-4 border border-theme-header rounded-xl">
                            <Heading className="text-black text-xl font-bold">Refund Process</Heading>
                            <AccordianQuestion options={REFUND_PROCESS} />
                        </Box>

                        <Box>
                            <Heading className="text-xl font-bold text-black">Contact Us</Heading>
                            <Text className="text-black">
                                If you have any questions or need assistance with a cancellation, please contact our support team at support@WanderGenie LLM.com. {"We're"} here to help ensure your travel planning experience is smooth and enjoyable, even when plans change.
                                Thank you for choosing WanderGenie LLM!
                            </Text>
                        </Box>
                    </Box>
                </VStack>
            </Container>
            <Footer />
        </Box>
    )
}
