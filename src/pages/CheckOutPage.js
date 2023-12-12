// import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import "../styles/CheckOutPageStyles.css";


function CheckOutPage() {

  return (
    <div className="CheckOutPage">
      <div className="Container">
        <div className="Heading">
          <Link className="BackToMenu">
            <IoChevronBackOutline />
            <p>Back</p>
          </Link>
          <h3>
            <strong>CHECKOUT</strong>
          </h3>
        </div>
        <div className="CheckOutDetails">
          <div className="UserDetails">
            <div className="Contact-Information">
              <h6><strong>Contact Information</strong></h6>
              <div>
                <input type="text" placeholder="Name*" />
                <input type="number" placeholder="Phone*" />
              </div>
            </div>
            <div className="User-Order-Type">
              <h6><strong>Order Type</strong></h6>
              <div className="Type">
                <div className="checkbox-container">
                  <input type="checkbox" id="delivery" className="checkbox-custom-input" />
                  <label htmlFor="delivery" className="checkbox-custom"></label>
                  <label htmlFor="delivery">Delivery</label>
                </div>
                <div className="checkbox-container">
                  <input type="checkbox" id="pickup" className="checkbox-custom-input" />
                  <label htmlFor="pickup" className="checkbox-custom"></label>
                  <label htmlFor="pickup">Pickup</label>
                </div>
              </div>

            </div>
          </div>
          <div className="ProductSum"></div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
