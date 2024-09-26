import { VStack } from '@chakra-ui/react';
import { ModulerDestinationsContainer } from './components/ModulerDestinationsContainer';

const FavouriteDestinationLocations = [
    { name: "Dubai", description: "The City Of Gold", image: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?cs=srgb&dl=pexels-ivan-siarbolin-1513699-3787839.jpg&fm=jpg" },
    { name: "Paris, France", description: "City of Love", image: "https://lh6.googleusercontent.com/proxy/VSDBMeOlHFia1rVgjtrzdD42kC-HsycxOoAOJ_VCsdrf1eGyS8-438Q3d5ZNb2nr8rNFxLRn6010qqIibO88yCK8tSWGlI9c4nZ4SpC3OuHk_771MhIgkGMUPNdhXZ3ytMcfVc54246Fipdt8_4UvcyhIAcAkKg=w675-h390-n-k-no" },
    { name: "London, United Kingdom", description: "Timeless British Charm", image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRGQjRiDpsaU2knNgWKXAZEhzHVQyFMwY7XsO4SmYrR3O6WUW3QwUnjioFGGJgv8A6i-gURpH3qPZMLoz5RkIR5_GYqVIrcE0Y57c03AQ" },
    { name: "Singapore", description: "The Lion City", image: "https://lh5.googleusercontent.com/p/AF1QipPqszG7PL6Ua3mXhTK1HlB4z5T-pm7jT3N-uwK6=w675-h390-n-k-no" },
    { name: "Bangkok & Phuket, Thailand", description: "Land of Smile", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSoRF3TbJgUlxro3YJc9ah_Wq9NGcFxi3xf-6nbeRKds5YsIgrswcvjEarktfcSUkR4w9GwWgRhA7bTGLLHUmsfhjpMle6pZWDZqX2hTg" },
    { name: "Switzerland", description: "Heaven on Earth", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTmjaSMS-TS_szvOgbCa217DEZBKwbGOkyiyEOWQP992nQlH1U2UfawX4UGFug4M89L61jdL4R9MqZmBsWj6WAxYyicmV3DS_dptCwRLg" },
    { name: "Maldives", description: "Tropical Paradise Islands", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTKYmJBU4TAA9PgrF_WMIX0iIiTpWnlJEzDJZsn3PvWE9qN8o8p6RnL2fbG5hetm7NKHUwGakxnee0LoJazPUbPKpDYNwbkmURssVi9rQ" },
    { name: "Bali, Indonesia", description: "Island of Gods", image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSWozmUfIc1217cJ0PtD3IHhYVNa267gaFTACOP2sONuwBhsKe_eVj6bCKGXsdX3a2E_hY8Am3abZYEdmrHFHZyPdId7duiLEt_pG-nyw" },
    { name: "New York City, USA", description: "The Big Apple", image: "https://lh3.googleusercontent.com/proxy/g-ljxmC9hqYpgbNRM2dhT4x30UsLIeylGkNR8j7xU75F3uXUHTB-hNcdjNy_H5_ZxgnbUxNUvne8TOZBcYT-BwoIQZgXwXlkyciXBHBPkNH2SavG7WhWDqT383O5PPPhie3Pw0fSRriv3TF8TEb8cu7JuH5-_Q=w675-h390-n-k-no" },
    { name: "Istanbul, Turkey", description: "Where East Meets West", image: "https://lh5.googleusercontent.com/p/AF1QipM3QO27wHjhSkM8NevNtc6zSDQ4bnhZ1DoF1eBB=w675-h390-n-k-no" },
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
