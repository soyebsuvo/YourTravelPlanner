import { Box, Container } from "@chakra-ui/react";

import { TripFilter } from "./components/Filtering/TripFilter";
import { TripCard } from "./components/TripCard/TripCard";

import SubBanner from "../../Components/Banner/SubBanner";
import Navbar from "../../Components/Navbar/Navbar";
import { Banner } from "@/Components/Banner/Banner";
import { useState } from "react";

const TRIP_CARDS = [
    
  {
    title: "Maldives Tour Package to Cocogiri Island Resort with Water Villa",
    thumbnail: "https://pyt-images.imgix.net/images/campaignitinerary/Maldives-Tour-Package-to-Cocogiri-Island-Resort-with-Water-villa.png?w=530&h=260&fit=crop&dpr=2&auto=format,compress,enhance&q=20",
    description: "Experience the luxury of staying in a water villa at Cocogiri Island Resort in the Maldives.",
    price: "$450",
    rating: 5,
    keypoints: ["POCKET FRIENDLY", "SHARED TRANSFER", "FAMILY FRIENDLY"]
  },
  {
    title: "Romantic Getaway to Bora Bora with Overwater Bungalow",
    thumbnail: "https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85/q_85/activities/fxgey2gpkemn9tfanzsy.webp",
    description: "Stay in an overwater bungalow on a private island in Bora Bora, perfect for honeymooners.",
    price: "$1200",
    rating: 5,
    keypoints: ["LUXURY STAY", "PRIVATE BEACH", "ALL-INCLUSIVE", "POCKET FRIENDLY"]
  },
  {
    title: "Adventure Trip to the Himalayas with Trekking Experience",
    thumbnail: "https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85/q_85/activities/fvtm5fqhdhdlzoii6myk.webp",
    description: "Embark on a thrilling trekking adventure in the Himalayan mountains with expert guides.",
    price: "$750",
    rating: 4,
    keypoints: ["TREKKING", "GUIDED TOURS", "CULTURAL EXPERIENCE"]
  },
  {
    title: "Luxury Stay at Santorini Cliffside Villas",
    thumbnail: "https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85/q_85/activities/igrft7cpcbqqfmdjfaqk.webp",
    description: "Enjoy a luxurious stay in cliffside villas with stunning sea views in Santorini, Greece.",
    price: "$1500",
    rating: 5,
    keypoints: ["ROMANTIC ESCAPE", "SEA VIEW", "POCKET FRIENDLY", "INFINITY POOL"]
  },
  {
    title: "Cultural Tour of Kyoto with Traditional Tea Ceremony",
    thumbnail: "https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85/q_85/activities/dhrm22ckfxfidk1smmtp.webp",
    description: "Immerse yourself in traditional Japanese culture with a guided tour and tea ceremony in Kyoto.",
    price: "$600",
    rating: 3,
    keypoints: ["CULTURAL TOUR", "LOCAL CUISINE", "TRADITIONAL ACCOMMODATION"]
  },
  {
    title: "Safari Adventure in Kenya with Luxury Camping",
    thumbnail: "https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85/q_85/activities/82599d00-Heritage-Trishaw-Ride.webp",
    description: "Discover the wildlife of Kenya with a luxury camping experience in Maasai Mara.",
    price: "$900",
    rating: 4,
    keypoints: ["WILDLIFE SAFARI", "LUXURY CAMPING", "POCKET FRIENDLY", "NIGHT DRIVES"]
  },
  {
    title: "Island Hopping Tour in the Philippines",
    thumbnail: "https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85/q_85/activities/re21eqbw4berjcsajuih.webp",
    description: "Explore the beautiful islands of the Philippines, including Palawan, Boracay, and Cebu.",
    price: "$500",
    rating: 4,
    keypoints: ["ISLAND HOPPING", "SNORKELING", "BEACHFRONT STAYS"]
  },
  {
    title: "Wine Tasting Tour in Napa Valley, California",
    thumbnail: "https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85/q_85/activities/zif3p5bhhgpx5flsoofr.webp",
    description: "Enjoy a wine-tasting tour in the world-renowned Napa Valley, California.",
    price: "$700",
    rating: 4,
    keypoints: ["WINE TASTING", "GOURMET FOOD", "VINEYARD STAYS"]
  },
  {
    title: "Northern Lights Experience in Iceland",
    thumbnail: "https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85/q_85/activities/c69rt4iwuaydiopheiva.webp",
    description: "Witness the magical Northern Lights with a guided tour in Iceland.",
    price: "$1100",
    rating: 5,
    keypoints: ["NORTHERN LIGHTS", "HOT SPRINGS", "GLACIER HIKES"]
  },
  {
    title: "Beach Relaxation at the Great Barrier Reef, Australia",
    thumbnail: "https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85/q_85/activities/kz9lfzfrpqfuv5ccva2l.webp",
    description: "Relax on the stunning beaches of the Great Barrier Reef with snorkeling and diving options.",
    price: "$800",
    rating: 4,
    keypoints: ["BEACH STAY", "SNORKELING", "CORAL REEFS"]
  }


]

export default function Marketplace()
{
    const [tripCards, setTripCards] = useState(TRIP_CARDS);

    return (
        <Box className="space-y-4 bg-theme-base">
            <Container className="w-full">
                <Navbar/>
                <Banner disableInput={true} />                
            </Container>                                            

            <Box className="w-full max-w-screen-xl m-auto space-y-6">
                <TripFilter onFilter={(filteredKeypoint) => {
                    if(filteredKeypoint !== null) {
                        const filteredTrips = TRIP_CARDS.filter((tripCard) => tripCard.keypoints.includes(filteredKeypoint.filter))
                        setTripCards(filteredTrips)
                        //setTripCards(prev => prev.keypoints == filteredKeypoint)
                    }
                }} />
                <Box className="w-full gap-8 grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:p-2">
                    {
                        tripCards.map((tripCard, index) => <TripCard key={index} {...tripCard}/>)
                    }
                </Box>
            </Box>
        </Box>
    )
}
