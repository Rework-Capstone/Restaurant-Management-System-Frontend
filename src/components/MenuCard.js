import "../styles/MenuCard.css";
import menuImg1 from "../assets/images/pexels-daniela-constantini-5591664 1.png"



function MenuCard() {

  return (
    <div>
      <div className="menuCard_main">
        <div className="menuCard_img">
          <img src={menuImg1} alt="" />
        </div>
        <div className="menuCard_txt">
          <h3 className="menuCard_price">$ 9.99</h3>
          <p className="menuCard_product">Fried Eggs</p>
          <span className="menuCard_ingredients">
            Made With eggs, lettuce, salt, oil and other ingredients.
          </span>
        </div>
      </div>

    </div>
  );
}

export default MenuCard;
