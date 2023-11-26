import React, { useState, useEffect } from "react";
import "../styles/CheckOutPage.css";
import image1 from "../assets/images/pexels-daniela-constantini-5591664 1.png";
import logo from "../assets/icons/logo.svg"


function CheckOutPage() {

  return (
    <>
      <div className="checkout">
        <div className='checkout_container'>
          <div className='window'>
            <div className='order-info'>
              <div className='order-info-content'>
                <h2>Order Summary</h2>
                <div className='line'></div>
                <table className='order-table'>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={image1}
                          alt='Product 1'
                          className='full-width'
                        />
                      </td>
                      <td>
                        <span className='thin'>Fried Egg</span>
                        <br />
                        <span className='thin small'>Made With eggs, lettuce, salt, oil and other ingredients.</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='price'>$99.95</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className='line'></div>
                <table className='order-table'>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={image1}
                          alt='Product 1'
                          className='full-width'
                        />
                      </td>
                      <td>
                        <span className='thin'>Fried Egg</span>
                        <br />
                        <span className='thin small'>Made With eggs, lettuce, salt, oil and other ingredients.</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='price'>$99.95</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className='line'></div>
                <table className='order-table'>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={image1}
                          alt='Product 1'
                          className='full-width'
                        />
                      </td>
                      <td>
                        <span className='thin'>Fried Egg</span>
                        <br />
                        <span className='thin small'>Made With eggs, lettuce, salt, oil and other ingredients.</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='price'>$99.95</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className='line'></div>
                <div className='total'>
                  <span className="vat_delivery">
                    <div className='thin dense'>VAT 19%</div>
                    <div className='thin dense'>Delivery</div>
                    TOTAL
                  </span>
                  <span className="total_price">
                    <div className='thin dense'>$0.00</div>
                    <div className='thin dense'>$0.00</div>
                    $0.00
                  </span>
                </div>
              </div>
            </div>
            <div className='credit-info'>
              <div className='credit-info-content'>
                <img
                  src={logo}
                  alt='Visa Card'
                  height='80'
                  className='credit-card-image'
                  id='credit-card-image'
                />
                <div>Card Number</div>
                <input type="number" className='input-field'></input>
                <div>Card Holder</div>
                <input type="number" className='input-field'></input>
                <table className='half-input-table'>
                  <tr>
                    <td>
                      Expires
                      <input type="number" className='input-field'></input>
                    </td>
                    <td>
                      CVC
                      <input type="number" className='input-field'></input>
                    </td>
                  </tr>
                </table>
                <button className='pay-btn'>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOutPage;
