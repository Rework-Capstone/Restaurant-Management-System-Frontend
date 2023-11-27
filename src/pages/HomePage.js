import BrowseMenu from "../components/BrowseMenu";
import FoodDelivery from "../components/FoodDelivery/foodDelivery";
import HealthyFood from "../components/HealthFood/healthFood";
import UniqueService from "../components/UniqueService/UniqueService";
import HomeHero from "../components/homeHero/HomeHero";
import Navigation from "../components/navigation";

export default function HomePage(){
    return(
        <div>
            <Navigation/>
            <HomeHero/>
            <BrowseMenu/>
            <HealthyFood/>
            <UniqueService/>
            <FoodDelivery/>
        </div>
    )
}