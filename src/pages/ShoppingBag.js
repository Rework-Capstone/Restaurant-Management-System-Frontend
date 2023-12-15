import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ShoppingBagStyles.css";
import { IoChevronBackOutline } from "react-icons/io5";
import Product from "../assets/images/Meal-Cards.png";
import { VscDash } from "react-icons/vsc";
import { IoIosAdd } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";


function Bag() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollByAmount = (amount) => {
        const carousel = document.querySelector('.Carousel');
        const card = document.querySelector('.Card');

        if (carousel && card) {
            const cardWidth = card.offsetWidth;
            const newScrollPosition = scrollPosition + amount * cardWidth;

            carousel.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth',
            });

            setScrollPosition(newScrollPosition);
        }
    };


    return (
        <div className="ShoppingBag">
            <div className="Container">
                <div className="Heading">
                    <Link to="/MealCategory" className="BackToMenu">
                        <IoChevronBackOutline />
                        <p>Back</p>
                    </Link>
                    <h3>
                        <strong>BAG</strong>
                    </h3>
                </div>
                <div className="Product-List">
                    <div className="Products-In-Bag">
                        <div className="Titles">
                            <p>Product List</p>
                            <p>Quantity</p>
                            <p>Unit Price</p>
                        </div>
                        <hr />
                        <div className="Product">
                            <div className="Preview">
                                <div className="Image">
                                    <img src={Product} alt="Product" />
                                </div>
                                <div className="Summary">
                                    <p>Bacon Ranch Grilled Chicken Salad</p>
                                    <p>200g, 300 Cal.</p>
                                </div>
                            </div>
                            <div className="Quantity">
                                <VscDash />
                                <p>200</p>
                                <IoIosAdd />
                            </div>
                            <div className="Price">
                                <p>$60000</p>
                            </div>
                            <div className="Cancel">
                                <IoCloseOutline />
                            </div>
                        </div>
                        <hr />
                        <div className="Product">
                            <div className="Preview">
                                <div className="Image">
                                    <img src={Product} alt="Product" />
                                </div>
                                <div className="Summary">
                                    <p>Bacon Ranch Grilled Chicken Salad</p>
                                    <p>200g, 300 Cal.</p>
                                </div>
                            </div>
                            <div className="Quantity">
                                <VscDash />
                                <p>200</p>
                                <IoIosAdd />
                            </div>
                            <div className="Price">
                                <p>$60000</p>
                            </div>
                            <div className="Cancel">
                                <IoCloseOutline />
                            </div>
                        </div>
                        <hr />
                        <div className="Product">
                            <div className="Preview">
                                <div className="Image">
                                    <img src={Product} alt="Product" />
                                </div>
                                <div className="Summary">
                                    <p>Bacon Ranch Grilled Chicken Salad</p>
                                    <p>200g, 300 Cal.</p>
                                </div>
                            </div>
                            <div className="Quantity">
                                <VscDash />
                                <p>200</p>
                                <IoIosAdd />
                            </div>
                            <div className="Price">
                                <p>$60000</p>
                            </div>
                            <div className="Cancel">
                                <IoCloseOutline />
                            </div>
                        </div>
                        <hr />
                        <div className="Product">
                            <div className="Preview">
                                <div className="Image">
                                    <img src={Product} alt="Product" />
                                </div>
                                <div className="Summary">
                                    <p>Bacon Ranch Grilled Chicken Salad</p>
                                    <p>200g, 300 Cal.</p>
                                </div>
                            </div>
                            <div className="Quantity">
                                <VscDash />
                                <p>200</p>
                                <IoIosAdd />
                            </div>
                            <div className="Price">
                                <p>$60000</p>
                            </div>
                            <div className="Cancel">
                                <IoCloseOutline />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="Checkout">
                        <div className="Promo-Code">
                            <input type="text" placeholder="Enter a promo code" />
                            <button>Apply</button>
                        </div>
                        <div className="Fees">
                            <div>
                                <p>Items Subtotal:</p>
                                <p>$15.75</p>
                            </div>

                            <div>
                                <p>Delivery Fee:</p>
                                <p>$1</p>
                            </div>

                            <div>
                                <p>Tax & Fees :</p>
                                <p>$2.50</p>
                            </div>

                            <div>
                                <p><strong>Total:</strong></p>
                                <p>$19.25</p>
                            </div>
                        </div>
                        <Link to="/" className="Checkout-Button"><button>Proceed To Checkout</button></Link>
                    </div>
                </div>
                <div className="Related-Products">
                    <div className="Control">
                        <h3><strong>YOU MIGHT <br /> LIKE</strong></h3>
                        <div className="Room">
                            <button onClick={() => scrollByAmount(-1)}> <IoChevronBackOutline /></button>
                            <button onClick={() => scrollByAmount(1)}> <IoChevronForwardOutline /></button>
                        </div>

                    </div>
                    <div className="Carousel">
                        <div className="Card">
                            <img src={Product} alt="" className="Card-Image" />
                            <p className="Card-Title">Quarter Pounder With Cheese Deluxe</p>
                            <div>
                                <p>$5.30</p>
                                <Link to="/" className="Bag-Icon">
                                    <RiShoppingBagLine />
                                </Link>
                            </div>
                        </div>

                        <div className="Card">
                            <img src={Product} alt="" className="Card-Image" />
                            <p className="Card-Title">Quarter Pounder With Cheese Deluxe</p>
                            <div>
                                <p>$5.30</p>
                                <Link to="/" className="Bag-Icon">
                                    <RiShoppingBagLine />
                                </Link>
                            </div>
                        </div>

                        <div className="Card">
                            <img src={Product} alt="" className="Card-Image" />
                            <p className="Card-Title">Quarter Pounder With Cheese Deluxe</p>
                            <div>
                                <p>$5.30</p>
                                <Link to="/" className="Bag-Icon">
                                    <RiShoppingBagLine />
                                </Link>
                            </div>
                        </div>

                        <div className="Card">
                            <img src={Product} alt="" className="Card-Image" />
                            <p className="Card-Title">Quarter Pounder With Cheese Deluxe</p>
                            <div>
                                <p>$5.30</p>
                                <Link to="/" className="Bag-Icon">
                                    <RiShoppingBagLine />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bag;