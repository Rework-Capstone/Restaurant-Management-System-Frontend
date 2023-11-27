import "../styles/MenuCard.css";
import menuImg1 from "../assets/images/pexels-daniela-constantini-5591664 1.png"
import SingleFoodModal from "../pages/SingleFoodModal";
import { useState } from "react";

function MenuCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  }


  const {
    image,
    price,
    product,
    title
  } = props;

  return (
    <div>
      <div className="menuCard_main" onClick={handleOpenModal}>
        <div className="menuCard_img">
          <img src={image} alt="" />
        </div>
        <div className="menuCard_txt">
          <h3 className="menuCard_price">{price}</h3>
          <p className="menuCard_product">{product}</p>
          <span className="menuCard_ingredients">
            {title}
          </span>
        </div>
      </div>

      <SingleFoodModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default MenuCard;
