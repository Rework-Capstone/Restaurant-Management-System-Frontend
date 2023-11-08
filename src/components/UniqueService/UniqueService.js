import BrowseMenuCard from "../BrowseMenuCard";
import "../../styles/uniqueService.css"
import UniqueServiceCard from "./uniqueServiceCard";
export default function UniqueService(){
    return(
        <div className='unique-service-container'>
        <header>
            <h2>We also offer unique services for your events</h2>
        </header>
        <div>
            <UniqueServiceCard/>
        </div>
    </div>
    )
}