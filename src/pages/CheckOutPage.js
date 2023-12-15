import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import "../styles/CheckOutPageStyles.css";
import Product from "../assets/images/Meal-Cards.png";

function CheckOutPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [selectedDeliveryTimeOption, setSelectedDeliveryTimeOption] =
    useState("");
  const [selectedTimeOption, setSelectedTimeOption] = useState("");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [selectedTerminalOption, setSelectedTerminalOption] = useState("");
  const [selectedOnlinePaymentOption, setSelectedOnlinePaymentOption] =
    useState("");

  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedField(event.target.value);
  };

  const handleDeliveryTimeCheckboxChange = (event) => {
    if (event.target.checked) {
      setSelectedTimeOption("");
      setSelectedDeliveryTimeOption(event.target.value);
    } else {
      setSelectedDeliveryTimeOption("");
    }
  };

  const handleSelectTimeCheckboxChange = (event) => {
    if (event.target.checked) {
      setSelectedDeliveryTimeOption("");
      setSelectedTimeOption(event.target.value);
    } else {
      setSelectedTimeOption("");
    }
  };

  const handlePaymentCheckboxChange = (event) => {
    if (event.target.checked) {
      setSelectedPaymentOption(event.target.value);
      setSelectedTerminalOption("");
      setSelectedOnlinePaymentOption("");
    } else {
      setSelectedPaymentOption("");
    }
  };

  const handleTerminalCheckboxChange = (event) => {
    if (event.target.checked) {
      setSelectedTerminalOption(event.target.value);
      setSelectedPaymentOption("");
      setSelectedOnlinePaymentOption("");
    } else {
      setSelectedTerminalOption("");
    }
  };

  const handleOnlinePaymentCheckboxChange = (event) => {
    if (event.target.checked) {
      setSelectedOnlinePaymentOption(event.target.value);
      setSelectedPaymentOption("");
      setSelectedTerminalOption("");
    } else {
      setSelectedOnlinePaymentOption("");
    }
  };

  const [items] = useState([]);
  const [itemWidth, setItemWidth] = useState("100%");

  useEffect(() => {
    if (items.length <= 3) {
      setItemWidth("33.33%");
    } else {
      setItemWidth("100%");
    }
  }, [items]);

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
              <h6>
                <strong>Contact Information</strong>
              </h6>
              <div>
                <input type="text" placeholder="Name*" />
                <input type="number" placeholder="Phone*" />
              </div>
            </div>
            <div className="User-Order-Type">
              <h6>
                <strong>Order Type</strong>
              </h6>
              <div className="Type">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="delivery"
                    className="checkbox-custom-input"
                    name="orderType"
                    value="delivery"
                    checked={selectedOption === "delivery"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="delivery" className="checkbox-custom"></label>
                  <label htmlFor="delivery">Delivery</label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="pickup"
                    className="checkbox-custom-input"
                    name="orderType"
                    value="pickup"
                    checked={selectedOption === "pickup"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="pickup" className="checkbox-custom"></label>
                  <label htmlFor="pickup">Pickup</label>
                </div>
              </div>
            </div>
            <div className="Users-Address">
              <select
                id="options"
                value={selectedField}
                onChange={handleSelectChange}
              >
                <option value="">Select Address From Your Saved</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              <input type="text" placeholder="Address*" className="Address" />
              <div className="Flat">
                <input type="text" placeholder="Flat/Office*" />
                <input type="text" placeholder="Floor*" />
                <input type="text" placeholder="Entrace Number*" />
              </div>
              <textarea placeholder="Comments For Courier*"></textarea>
            </div>
            <div className="User-Delivery-Type">
              <h6>
                <strong>Delivery Type</strong>
              </h6>
              <div className="Type">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="delivery-time"
                    className="checkbox-custom-input"
                    name="orderType"
                    value="delivery-time"
                    checked={selectedDeliveryTimeOption === "delivery-time"}
                    onChange={handleDeliveryTimeCheckboxChange}
                  />
                  <label
                    htmlFor="delivery-time"
                    className="checkbox-custom"
                  ></label>
                  <label htmlFor="delivery-time">As soon as possible</label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="select-time"
                    className="checkbox-custom-input"
                    name="orderType"
                    value="SelectTime"
                    checked={selectedTimeOption === "SelectTime"}
                    onChange={handleSelectTimeCheckboxChange}
                  />
                  <label
                    htmlFor="select-time"
                    className="checkbox-custom"
                  ></label>
                  <label htmlFor="select-time">Select Time</label>
                </div>
              </div>
              {selectedTimeOption === "SelectTime" && (
                <input
                  type="datetime-local"
                  className="User-Select-Local-Time"
                />
              )}
            </div>
            <div className="User-Payment-Method">
              <h6>
                <strong>Payment Type</strong>
              </h6>
              <div className="Type">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="cash"
                    className="checkbox-custom-input"
                    name="orderType"
                    value="payment"
                    checked={selectedPaymentOption === "payment"}
                    onChange={handlePaymentCheckboxChange}
                  />
                  <label htmlFor="cash" className="checkbox-custom"></label>
                  <label htmlFor="cash">Cash</label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="terminal"
                    className="checkbox-custom-input"
                    name="orderType"
                    value="terminal"
                    checked={selectedTerminalOption === "terminal"}
                    onChange={handleTerminalCheckboxChange}
                  />
                  <label htmlFor="terminal" className="checkbox-custom"></label>
                  <label htmlFor="terminal">Through Terminal</label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="online-payment"
                    className="checkbox-custom-input"
                    name="orderType"
                    value="online-payment"
                    checked={selectedOnlinePaymentOption === "online-payment"}
                    onChange={handleOnlinePaymentCheckboxChange}
                  />
                  <label
                    htmlFor="online-payment"
                    className="checkbox-custom"
                  ></label>
                  <label htmlFor="online-payment">Online Payment</label>
                </div>
              </div>
            </div>
          </div>
          <div className="ProductSum">
            <h6 className="Title">
              <strong>Order Details</strong>
            </h6>
            <div className="Products-Grid">
              {/* {items.map((item, index) => ( */}
              <div
                className="Item"
                key={0}
                style={{
                  width: itemWidth,
                  height: "fit-content",
                  textAlign: "center",
                }}
              >
                <img src={Product} alt="Product" className="Products-Images" />
                <p>x10</p>
              </div>

              <div
                className="Item"
                key={1}
                style={{
                  width: itemWidth,
                  height: "fit-content",
                  textAlign: "center",
                }}
              >
                <img src={Product} alt="Product" className="Products-Images" />
                <p>x10</p>
              </div>

              <div
                className="Item"
                key={2}
                style={{
                  width: itemWidth,
                  height: "fit-content",
                  textAlign: "center",
                }}
              >
                <img src={Product} alt="Product" className="Products-Images" />
                <p>x10</p>
              </div>

              <div
                className="Item"
                key={3}
                style={{
                  width: itemWidth,
                  height: "fit-content",
                  // padding: "10px",
                  // backgroundColor: "blue",
                  textAlign: "center",
                }}
              >
                <img src={Product} alt="Product" className="Products-Images" />
                <p>x10</p>
              </div>
              {/* ))} */}
            </div>
            <div className="Products-Subtotal">
              <h6>Items Subtotal:</h6>
              <p>$15.75</p>
            </div>
            <div className="Products-Delivery-Fee">
              <h6>Delivery Fee:</h6>
              <p>$1</p>
            </div>
            <div className="Product-Tax-Fees">
              <h6>Tax And Fees:</h6>
              <p>$2.50</p>
            </div>
            <div className="Product-Total">
              <h4>Total:</h4>
              <p>$19.25</p>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
