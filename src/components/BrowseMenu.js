import '../styles/BrowseMenu.css'
import BrowseMenuCard from './BrowseMenuCard'

export default function BrowseMenu(){
    return(
        <div className='browse-menu-container'>
            <header>
                <h2>Browse Our Menu</h2>
            </header>
            <div>
                <BrowseMenuCard/>
            </div>
        </div>
    )
}