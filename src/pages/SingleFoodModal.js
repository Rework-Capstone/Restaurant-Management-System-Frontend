import Footer from "../components/Footer";
import "../styles/SingleFoodModal.css"
import { IoAdd, IoCloseOutline, IoRemoveOutline } from "react-icons/io5";
import productImg from "../assets/images/pexels-daniela-constantini-5591664 1.png"
import { useRef, useState } from "react";


function SingleFoodModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  const modalClass = isOpen ? "UserPostModal_outer_div modal-overlay" : "UserPostModal_outer_div";



  return (
    <>
      <div className={modalClass}>
        <div className="UserPostModal_outer_div">
          <div className="UserPostModal_outerdiv1">
            <div className="UserPostModal_opacity">
              <div className="UserPostModal_opacity1"></div>
            </div>
            <div className="userPostModal_main">
              <div className="userPostModal_main1">
                <div className="userPostModal_main1_top">
                  <div className="userPostModal_main1_top_left">
                  </div>
                  <button onClick={onClose}>
                    <IoCloseOutline className="newNotebtn" />
                  </button>
                </div>

                <div className="singleFoodModal_main">
                  <div className="singleFoodModal_img_text">
                    <div className="singleFoodModal_product_img">
                      <div className="singleFoodModal_product_img_main">
                        <picture>
                          <img src={productImg} alt="" />
                        </picture>
                      </div>
                    </div>

                    <div className="singleFoodModal_txt">
                      <h1 class="product_details_name">
                        Postinor *2 Tabs
                      </h1>

                      <div class="product_details_price">
                        <div class="product_price">
                          <span>
                            ₦1,300.00
                          </span>
                        </div>
                      </div>

                      <div class="product_details_description">
                        <span>
                          Stops your ovaries from releasing an egg; preventing sperm from fertilising any egg you may have already released. Postinor-1 can only prevent you from becoming pregnant if you take it within 72 hours of unprotected sex
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="whatsYourmind?">
                  <div className="whatsYourmind_bottom">
                    <div className="addToCart_btn">
                      <button className="plusbtn" ><IoRemoveOutline /></button>
                      <span>33</span>
                      <button className="plusbtn" ><IoAdd /></button>
                    </div>
                    <button className="postbtn2" >Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleFoodModal;