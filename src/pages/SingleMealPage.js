import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SingleMealPageStyles.css";
// import Navigation from "../components/navigation/index";
import { IoChevronBackOutline } from "react-icons/io5";
import Meal from "../assets/images/Meal.png";
import QuarterPoundBun from "../assets/images/Quarter-Pound-Bun.png";
import QuarterPoundBeefPatty from "../assets/images/Quarter-Pound-Beef-Patty.png";
import PasteurizedAmericanCheese from "../assets/images/Pateurized-Process-American-Cheese.png";
import PickleSlices from "../assets/images/Pickle-Slices.png";
import Ketchup from "../assets/images/ketchup.png";
import Mustard from "../assets/images/mustard.png";
import { IoChevronForwardOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import MealCards from "../assets/images/Meal-Cards.png";
// import Footer from "../components/Footer";

function SingleMeal() {
    const [activeButton, setActiveButton] = useState(1); // Initial state for the active button
    const [visibleSection, setVisibleSection] = useState(1);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleButtonClick = (buttonIndex) => {
        setVisibleSection(buttonIndex);
        setActiveButton(buttonIndex);
      };
    
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
        <div className="SingleMealPage">
            {/* <Navigation/> */}
            <div className="Container">
                <Link to="/MealCategory" className="BackToMenu">
                    <IoChevronBackOutline />
                    <p>Back to menu</p>
                </Link>
                <div className="Meal">
                    <div className="Image">
                        <img src={Meal} alt="Meal" />
                    </div>
                    <div className="Meal_Summary">
                        <h2>QUARTER POUNDER WITH CHEESE</h2>
                        <div className="Classes">
                            <span>
                                <p>Calories:</p>
                                <h6>510 Cal.</h6>
                            </span>
                            <span>
                                <p>Carbonhydrates:</p>
                                <h6>42g</h6>
                            </span>
                            <span>
                                <p>Protein</p>
                                <h6>30g</h6>
                            </span>
                            <span>
                                <p>Fats</p>
                                <h6>25g</h6>
                            </span>
                        </div>
                        <div className="Summary">
                            <p>Each Quarter Pounder with Cheese burger features a 1/4 lb.* of 100% fresh beef <br />
                                that's hot, deliciously juicy. It's seasoned with just a pinch of salt and pepper, <br />
                                sizzled on a flat iron grill, then topped with silvered onions, tangy pickles and <br />
                                two slices of melty cheese on the seesame seed bun.
                            </p>
                        </div>
                        <div className="Bag">
                            <h6>$4.15</h6>
                            <button>Add to bag</button>
                        </div>
                    </div>
                </div>
                <div className="Meal_Properties">
                    <div className="Heading">
                        <button
                            className={activeButton === 1 ? 'active' : ''}
                            onClick={() => handleButtonClick(1)}>
                            Ingredients
                        </button>
                        <button
                            className={activeButton === 2 ? 'active' : ''}
                            onClick={() => handleButtonClick(2)}>
                            Nutrition Summary
                        </button>
                        <button
                            className={activeButton === 3 ? 'active' : ''}
                            onClick={() => handleButtonClick(3)}>
                            Allergies
                        </button>
                    </div>
                    <hr />
                    <div className="ContentWrapper">
                        {visibleSection === 1 && (
                            /* Display this component when Ingredients button is active */
                            <div className="Components">
                                <div>
                                    <img src={QuarterPoundBun} alt="" />
                                    <p>Quarter Pound Bun</p>
                                </div>
                                <div>
                                    <img src={QuarterPoundBeefPatty} alt="" />
                                    <p>Quarter Pound 100% Beef Patty</p>
                                </div>
                                <div>
                                    <img src={PasteurizedAmericanCheese} alt="" />
                                    <p>Pasteurized Process American Cheese</p>
                                </div>

                                <div>
                                    <img src={PickleSlices} alt="" />
                                    <p>Pickle Slices</p>
                                </div>
                                <div>
                                    <img src={Ketchup} alt="" />
                                    <p>Ketchup</p>
                                </div>
                                <div>
                                    <img src={Mustard} alt="" />
                                    <p>Mustard</p>
                                </div>
                            </div>
                        )}
                        {visibleSection === 2 && (
                            /* Display this component when Nutrition Summary button is active */
                            <div className="Nutrition-Summary">
                                <span>
                                    <h3><strong>Nutritional Information :</strong></h3>
                                    <ul>
                                        <li>Calories: 510 <strong>Calories</strong></li>
                                        <li>Protein: <strong>30g</strong></li>
                                        <li>Carbohydrates: <strong>42g</strong></li>
                                        <li>Fats: <strong>25g</strong></li>
                                    </ul>
                                </span>
                                <span>
                                    <h3><strong>Ingredients:</strong> </h3>
                                    <ul>
                                        <li>1/4 lb. (113 grams) of 100% fresh beef patty</li>
                                        <li>Pinch of salt and pepper</li>
                                        <li>Silvered onions</li>
                                        <li>Tangy pickles</li>
                                        <li>Two slices of melty cheese</li>
                                        <li>Sesame seed bun</li>
                                    </ul>
                                </span>
                            </div>
                        )}
                        {visibleSection === 3 && (
                            /* Display this component when Allergies button is active */
                            <div className="Allergies">
                                <h2><strong>Allergies</strong></h2>
                                <ul>
                                    <li>
                                        <strong>Beef:</strong> Some individuals may be allergic to beef, although beef allergies are not as common as other food allergies.
                                    </li>
                                    <li>
                                        <strong>Dairy:</strong> The cheese in the Quarter Pounder contains milk. People allergic to milk or dairy products may experience allergic reactions.
                                    </li>
                                    <li>
                                        <strong>Sesame seeds:</strong> Sesame seeds are present in the sesame seed bun. Sesame seed allergies are becoming more recognized and can cause allergic reactions in some individuals.
                                    </li>
                                    <li>
                                        <strong>Pepper:</strong> A pinch of pepper is used to season the beef. People with allergies to black pepper might react to this ingredient.
                                    </li>
                                    <li>
                                        <strong>Onions and Pickles:</strong> While less common, some individuals may have allergies to onions or pickles.
                                    </li>
                                    <li>
                                        <strong>Salt:</strong> Salt allergies are rare, but in very few cases, individuals might have sensitivities to salt.
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className="Related-Products">
                    <div className="Control">
                        <h3><strong>RELATED <br /> PRODUCTS</strong></h3>
                        <div className="Room">
                            <button onClick={() => scrollByAmount(-1)}> <IoChevronBackOutline /></button>
                            <button onClick={() => scrollByAmount(1)}> <IoChevronForwardOutline /></button>
                        </div>

                    </div>
                    <div className="Carousel">
                        <div className="Card">
                            <img src={MealCards} alt="" className="Card-Image" />
                            <p className="Card-Title">Quarter Pounder With Cheese Deluxe</p>
                            <div>
                                <p>$5.30</p>
                                <Link to="/" className="Bag-Icon">
                                    <RiShoppingBagLine/>
                                </Link>
                            </div>
                        </div>

                        <div className="Card">
                            <img src={MealCards} alt="" className="Card-Image" />
                            <p className="Card-Title">Quarter Pounder With Cheese Deluxe</p>
                            <div>
                                <p>$5.30</p>
                                <Link to="/" className="Bag-Icon">
                                    <RiShoppingBagLine/>
                                </Link>
                            </div>
                        </div>

                        <div className="Card">
                            <img src={MealCards} alt="" className="Card-Image" />
                            <p className="Card-Title">Quarter Pounder With Cheese Deluxe</p>
                            <div>
                                <p>$5.30</p>
                                <Link to="/" className="Bag-Icon">
                                    <RiShoppingBagLine/>
                                </Link>
                            </div>
                        </div>

                        <div className="Card">
                            <img src={MealCards} alt="" className="Card-Image" />
                            <p className="Card-Title">Quarter Pounder With Cheese Deluxe</p>
                            <div>
                                <p>$5.30</p>
                                <Link to="/" className="Bag-Icon">
                                    <RiShoppingBagLine/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default SingleMeal;