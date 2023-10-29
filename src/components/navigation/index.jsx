import logo from '../../assets/icons/Restaurant logo.svg'
import '../../styles/navigation.css'
export default function Navigation(){
    return(
        <div className='navigation'>
        <div className='navigation-container'>
            {/* <div className='navigation-content'> */}

                <div className='nav-left'>
                    <figure>
                        <img src={logo} alt="" />
                    </figure>
                    <header>
                    <h2>Bistro Bliss</h2>
                    </header>
                </div>

                <div  className='nav-right'>

                    <div className='nav-right-list'>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu </li>
                            <li>Page </li>
                            <li>Contact  </li>
                        </ul>
                    </div>


                    <div  className='nav-right-button'>
                    <button>Book A Table</button>
                    </div>
                </div>
            {/* </div> */}
        </div>
        </div>
    )
}