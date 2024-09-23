import { VStack } from '@chakra-ui/react';
import { ModulerDestinationsContainer } from './components/ModulerDestinationsContainer';

const FavouriteDestinationLocations = [
    { name: "Dubai", description: "The City Of Gold", image: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?cs=srgb&dl=pexels-ivan-siarbolin-1513699-3787839.jpg&fm=jpg" },
    { name: "Singapore", description: "The Lion City", image: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?cs=srgb&dl=pexels-kin-pastor-251088-777059.jpg&fm=jpg" },
    { name: "Australia", description: "Land of Down Under", image: "https://www.storylines.com/hs-fs/hubfs/Blogs/Australia/shutterstock_590390942.jpg?width=800&name=shutterstock_590390942.jpg" },
    { name: "New Zealand", description: "The Adventure Capital", image: "https://lh5.googleusercontent.com/p/AF1QipP3n44eFopNPKKYPCyuMVMvMVjhmhlc_h17Tbg=w675-h390-n-k-no" },
    { name: "Azerbaijan", description: "The Land of Fire", image: "https://images.pexels.com/photos/1118871/pexels-photo-1118871.jpeg" },
    { name: "Bali", description: "Cultural Paradise", image: "https://lh5.googleusercontent.com/p/AF1QipPv-Cl6vCitJXDPPgGnOfDsn6aCpKlP8srXwafK=w675-h390-n-k-no" },
    { name: "Maldives", description: "Create Memories", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRhCquwVjPiz7NKec1tddzlhRk-yTbNxjgOYJQUHWFexieebEAiiO3GVT6TFJ6886yqPjpccT3uzLpzEVQJmvU3aRURCziCW9fSJmmyHg" },
    { name: "Thailand", description: "The Kingdom of Thailand", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_i5SmavwIpYEsRCxACYloqc6Lmog5MBDHRw&s" },
    { name: "Vietnam", description: "Land of Ascending Dragon", image: "https://lh5.googleusercontent.com/p/AF1QipNScqrwdnIoEdHZYKVM1hpmOpM0i3mlvRzxiI-A=w540-h312-n-k-no" },
    { name: "Sri Lanka", description: "Fall in Love", image: "https://lh5.googleusercontent.com/p/AF1QipM1ovTbL6agD4qQ-Ywe4vX3q59f1vWxVKN3jUtO=w675-h390-n-k-no" },
];
const QuickGateWaysDestinationLocations = [
    { name: "Maidives", description: "Tropical Beach Paradise", image: "https://static8.depositphotos.com/1179847/1009/i/450/depositphotos_10094269-stock-photo-hammock-and-sunset.jpg" },
    { name: "Thailand", description: "Land of Smiles", image: "https://www.outlooktravelmag.com/media/thailand-1-1582543319.profileImage.2x-jpg.webp" },
    { name: "Mauritius", description: "Pristine Island Escape", image: "https://www.andbeyond.com/wp-content/uploads/sites/5/GettyImages-1205111263-RS.jpg" },
    { name: "Sri Lanka", description: "Serene Cultural Haven", image: "https://static01.nyt.com/images/2019/02/03/travel/03frugal-srilanka01/merlin_148552275_74c0d250-949c-46e0-b8a1-e6d499e992cf-superJumbo.jpg" },
    { name: "Nepal", description: "Gateway to Himalayas", image: "https://www.andbeyond.com/wp-content/uploads/sites/5/nepal-village.jpg" },
    { name: "Bhutan", description: "Land Of Happiness", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19VGD78W7lAHTiOAm8ifrjmqidqVTTxzSiw&s" },
    { name: "Bail, Indonesia", description: "Island Of Gods", image: "https://www.hollywoodreporter.com/wp-content/uploads/2023/08/Hero-2-H-2023.jpg?w=1296&h=730&crop=1" },
    { name: "Seychelles", description: "Luxury Island Gateway", image: "https://admin.seychelles.com/sites/default/files/2024-01/About_Seychelles.jpg" },
    { name: "Malaysia", description: "Truly Asia Adventure", image: "https://cdn.britannica.com/49/102749-050-B4874C95/Kuala-Lumpur-Malaysia.jpg" },
    { name: "Dubai UAE", description: "City Of Gold", image: "https://t3.ftcdn.net/jpg/05/21/39/66/360_F_521396698_RYmt6WYWdnezujQwLKFs1ZEWL1H1PETc.jpg" },
];

export const TravelHotspot = () => {
    return (
        <VStack className='space-y-4 max-w-screen-xl m-auto'>
            <ModulerDestinationsContainer locations={FavouriteDestinationLocations} label={"Favourite Destinations"} />
            <ModulerDestinationsContainer locations={QuickGateWaysDestinationLocations} label={"Quick Gateways"} />
        </VStack>
    )
}
