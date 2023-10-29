import "../../../styles/homeHero.css"

export default function HomeHero(){
    return(
        <div className="home-hero-container">
            <div className="home-hero ">
                <div className="home-hero-content">
                    <header>
                        <h1>Best food for your taste </h1>
                    </header>
                    <div className="home-hero-Discover">
                    <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
                    </div>
                    <div className="home-botton" >
                        <button>Book A Table </button>
                        <button>Explore Menu </button>
                    </div>
                </div>
            </div>
        </div>
    )
}