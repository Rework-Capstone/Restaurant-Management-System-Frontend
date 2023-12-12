import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/MealCategoryStyles.css";
import MealCards from "../assets/images/Meal-Cards.png";
import { RiShoppingBagLine } from "react-icons/ri";

function MealCategory() {
    const [activeButton, setActiveButton] = useState('Burgers'); // Initial state for the active button

    // Function to handle click event on buttons
    const handleButtonClick = (category) => {
        setActiveButton(category);
    };

    useEffect(() => {
        const buttons = document.querySelectorAll('.category-button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const hr = button.parentNode.querySelector('.category-underline'); // Target the hr associated with the clicked button

                // Change the background color of the hr to red
                hr.style.backgroundColor = 'red';

                // Change the text color of the clicked button to red
                button.classList.add('active');
                const activeButtons = document.querySelectorAll('.category-button.active');
                activeButtons.forEach(activeBtn => {
                    if (activeBtn !== button) {
                        activeBtn.classList.remove('active');
                    }
                });

                console.log('HR Color:', window.getComputedStyle(hr).getPropertyValue('background-color'));
            });
        });

        return () => {
            // Clean up event listeners if necessary
            buttons.forEach(button => {
                button.removeEventListener('click', () => { });
            });
        };
    }, []);


    return (
        <div className="MealCategory">
            <div className="Container">
                <div className="Heading">
                    <h1><strong>MENU</strong></h1>
                    <div className="Category">
                        <Link to="/MenuCategory" className='menu_category_button'>
                            <button>
                                All Products
                            </button>
                        </Link>
                        <Link to="/" className='menu_delivery_button'>
                            <button>
                                For Delivery
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="Categories">
                    <div className="button-wrapper">
                        <button
                            className={`category-button ${activeButton === 'Burgers' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Burgers')}
                        >
                            Burgers
                        </button>
                        <hr className={`category-underline ${activeButton === 'Burgers' ? 'active' : ''}`} />
                    </div>
                    <div className="button-wrapper">
                        <button
                            className={`category-button ${activeButton === 'Beverages' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Beverages')}
                        >
                            Beverages
                        </button>
                        <hr className={`category-underline ${activeButton === 'Beverages' ? 'active' : ''}`} />
                    </div>
                    <div className="button-wrapper">
                        <button
                            className={`category-button ${activeButton === 'ComboMeal' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('ComboMeal')}
                        >
                            Combo Meal
                        </button>
                        <hr className={`category-underline ${activeButton === 'ComboMeal' ? 'active' : ''}`} />
                    </div>
                    <div className="button-wrapper">
                        <button
                            className={`category-button ${activeButton === 'Chicken&Sandwiches' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Chicken&Sandwiches')}
                        >
                            Chicken & Sandwiches
                        </button>
                        <hr className={`category-underline ${activeButton === 'Chicken&Sandwiches' ? 'active' : ''}`} />
                    </div>
                    <div className="button-wrapper">
                        <button
                            className={`category-button ${activeButton === 'Salads' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Salads')}
                        >
                            Salads
                        </button>
                        <hr className={`category-underline ${activeButton === 'Salads' ? 'active' : ''}`} />
                    </div>
                    <div className="button-wrapper">
                        <button
                            className={`category-button ${activeButton === 'Deserts&Shakes' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Deserts&Shakes')}
                        >
                            Deserts & Shakes
                        </button>
                        <hr className={`category-underline ${activeButton === 'Deserts&Shakes' ? 'active' : ''}`} />
                    </div>
                    <div className="button-wrapper">
                        <button
                            className={`category-button ${activeButton === 'Breakfast' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Breakfast')}
                        >
                            Breakfast
                        </button>
                        <hr className={`category-underline ${activeButton === 'Breakfast' ? 'active' : ''}`} />
                    </div>
                    <div className="button-wrapper">
                        <button
                            className={`category-button ${activeButton === 'HappyMeal' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('HappyMeal')}
                        >
                            Happy Meal
                        </button>
                        <hr className={`category-underline ${activeButton === 'HappyMeal' ? 'active' : ''}`} />
                    </div>
                    <div className="button-wrapper">
                        <button
                            className={`category-button ${activeButton === 'McCafeDrinks' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('McCafeDrinks')}
                        >
                            McCafe Drinks
                        </button>
                        <hr className={`category-underline ${activeButton === 'McCafeDrinks' ? 'active' : ''}`} />
                    </div>
                    <div className="button-wrapper">
                        <button
                            className={`category-button ${activeButton === 'IceCream' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('IceCream')}
                        >
                            Ice Cream
                        </button>
                        <hr className={`category-underline ${activeButton === 'IceCream' ? 'active' : ''}`} />
                    </div>

                </div>
                <hr className="Categories-Hr" />
                <div className="Filtered-Meals">
                    <div className="Meal-Card">
                        <Link to="/SingleMeal">
                            <img src={MealCards} alt="Meal" />
                        </Link>
                        <Link to="/SingleMeal" className="Meal-Title">
                            <p>Bacon BBQ Burger</p>
                        </Link>
                        <div>
                            <span className="Meal-Price">
                                <p>$4.90</p>
                            </span>
                            <span className='Bag-Meal'>
                                <Link to="/SingleMeal">
                                    <RiShoppingBagLine />
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="Meal-Card">
                        <Link to="/SingleMeal">
                            <img src={MealCards} alt="Meal" />
                        </Link>
                        <Link to="/SingleMeal" className="Meal-Title">
                            <p>Bacon BBQ Burger</p>
                        </Link>
                        <div>
                            <span className="Meal-Price">
                                <p>$4.90</p>
                            </span>
                            <span className='Bag-Meal'>
                                <Link to="/SingleMeal">
                                    <RiShoppingBagLine />
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="Meal-Card">
                        <Link to="/SingleMeal">
                            <img src={MealCards} alt="Meal" />
                        </Link>
                        <Link to="/SingleMeal" className="Meal-Title">
                            <p>Bacon BBQ Burger</p>
                        </Link>
                        <div>
                            <span className="Meal-Price">
                                <p>$4.90</p>
                            </span>
                            <span className='Bag-Meal'>
                                <Link to="/SingleMeal">
                                    <RiShoppingBagLine />
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="Meal-Card">
                        <Link to="/SingleMeal">
                            <img src={MealCards} alt="Meal" />
                        </Link>
                        <Link to="/SingleMeal" className="Meal-Title">
                            <p>Bacon BBQ Burger</p>
                        </Link>
                        <div>
                            <span className="Meal-Price">
                                <p>$4.90</p>
                            </span>
                            <span className='Bag-Meal'>
                                <Link to="/SingleMeal">
                                    <RiShoppingBagLine />
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="Meal-Card">
                        <Link to="/SingleMeal">
                            <img src={MealCards} alt="Meal" />
                        </Link>
                        <Link to="/SingleMeal" className="Meal-Title">
                            <p>Bacon BBQ Burger</p>
                        </Link>
                        <div>
                            <span className="Meal-Price">
                                <p>$4.90</p>
                            </span>
                            <span className='Bag-Meal'>
                                <Link to="/SingleMeal">
                                    <RiShoppingBagLine />
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="Meal-Card">
                        <Link to="/SingleMeal">
                            <img src={MealCards} alt="Meal" />
                        </Link>
                        <Link to="/SingleMeal" className="Meal-Title">
                            <p>Bacon BBQ Burger</p>
                        </Link>
                        <div>
                            <span className="Meal-Price">
                                <p>$4.90</p>
                            </span>
                            <span className='Bag-Meal'>
                                <Link to="/SingleMeal">
                                    <RiShoppingBagLine />
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="Meal-Card">
                        <Link to="/SingleMeal">
                            <img src={MealCards} alt="Meal" />
                        </Link>
                        <Link to="/SingleMeal" className="Meal-Title">
                            <p>Bacon BBQ Burger</p>
                        </Link>
                        <div>
                            <span className="Meal-Price">
                                <p>$4.90</p>
                            </span>
                            <span className='Bag-Meal'>
                                <Link to="/SingleMeal">
                                    <RiShoppingBagLine />
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="Meal-Card">
                        <Link to="/SingleMeal">
                            <img src={MealCards} alt="Meal" />
                        </Link>
                        <Link to="/SingleMeal" className="Meal-Title">
                            <p>Bacon BBQ Burger</p>
                        </Link>
                        <div>
                            <span className="Meal-Price">
                                <p>$4.90</p>
                            </span>
                            <span className='Bag-Meal'>
                                <Link to="/SingleMeal">
                                    <RiShoppingBagLine />
                                </Link>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MealCategory;