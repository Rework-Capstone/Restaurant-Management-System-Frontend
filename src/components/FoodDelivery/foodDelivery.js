import '../../styles/foodDelivery.css'
import image from '../../assets/images/food delivery.svg'
import image1 from '../../assets/images/fast food left imag 1.svg'
import image2 from '../../assets/images/fast food image 2.svg'

export default function FoodDelivery(){
    return(
    <div className="food-delivery-container">
        <div className='food-delivery-content'>
            <div className='food-delivery-left'>
                <figure className='food-delivery-fig'>
                    <img src={image} alt="" />
                </figure>
                <div className='food-delivery-fig2'>
                    <div>
                        <figure>
                            <img src={image1} alt="" />
                        </figure> 
                    </div>
                    <div>
                    <figure>
                        <img src={image2} alt="" />
                    </figure>

                    </div>
                </div>
            </div>


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