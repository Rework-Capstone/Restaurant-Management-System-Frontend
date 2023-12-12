import BrowseMenu from "../components/BrowseMenu";
import FoodDelivery from "../components/FoodDelivery/foodDelivery";
import Footer from "../components/Footer";
import HealthyFood from "../components/HealthFood/healthFood";
import UniqueService from "../components/UniqueService/UniqueService";
import HomeHero from "../components/homeHero/HomeHero";
import Navigation from "../components/navigation";
import WhatCustomerSays from "../components/whatCustomerSays/whatCustomerSays";

export default function HomePage(){
    return(
        <div>
            <Navigation/>
            <HomeHero/>
            <BrowseMenu/>
            <HealthyFood/>
            <UniqueService/>
            <FoodDelivery/>
            <WhatCustomerSays/>  
            <Footer/>
        </div>
    )
}