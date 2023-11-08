import '../../styles/healthyfood.css'
import image from '../../assets/images/healty food image.svg'

export default function HealthyFood(){
    return(
        <div className="health-food-container">
            <div className='health-food-content'>

                <figure  className="health-food-left">
                    <img src={image} alt="" />
                </figure>

                <div className="health-food-right">
                    <header>
                        <h2>We provide healthy food for your family.</h2>
                    </header>
                    <p>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                    <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    <button>More About Us </button>
                </div>
            </div>
        </div>
    )
}