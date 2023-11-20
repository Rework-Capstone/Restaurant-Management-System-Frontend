import MenuCard from "../components/MenuCard";
import "../styles/MenuPage.css";
import menuimg1 from "../assets/images/1.svg";
import menuimg2 from "../assets/images/1 (1).svg";
import menuimg3 from "../assets/images/2.svg";
import menuimg4 from "../assets/images/2 (1).svg";
import menuimg5 from "../assets/images/3.svg";
import menuimg6 from "../assets/images/3 (1).svg";
import menuimg7 from "../assets/images/Group.svg";
import menuimg8 from "../assets/images/Vector.svg";
import menuimg9 from "../assets/images/Vector (1).svg";
import Footer from "../components/Footer";
import menucardImg1 from "../assets/images/pexels-daniela-constantini-5591664 1.png"

function MenuPage() {

  const menucarditem = [
    {
      image: menucardImg1,
      price: "₦3000",
      product: "Fried Eggs",
      title: "Made With eggs, lettuce, salt, oil and other ingredients."
    },
    {
      image: menucardImg1,
      price: "₦4000",
      product: "Fried Eggs",
      title: "Made With eggs, lettuce, salt, oil and other ingredients."
    },
    {
      image: menucardImg1,
      price: "₦5000",
      product: "Fried Eggs",
      title: "Made With eggs, lettuce, salt, oil and other ingredients."
    },
    {
      image: menucardImg1,
      price: "₦6000",
      product: "Fried Eggs",
      title: "Made With eggs, lettuce, salt, oil and other ingredients."
    },
    {
      image: menucardImg1,
      price: "₦7000",
      product: "Fried Eggs",
      title: "Made With eggs, lettuce, salt, oil and other ingredients."
    },
  ]

  return (
    <div>
      <div className="menu_top_desc">
        <h1>Our Menu</h1>
        <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      </div>
      <div className="menu_top_btns">
        <button className="menu_top_btn1">All</button>
        <button className="menu_top_btns_not_active">Breakfast</button>
        <button className="menu_top_btns_not_active">Main Dishes</button>
        <button className="menu_top_btns_not_active">Drinks</button>
        <button className="menu_top_btns_not_active">Desserts</button>
      </div>

      <div className="menu_section1">
        <div className="menu_grid">
          {menucarditem.map((item, index) => (
            <MenuCard
              key={index}
              image={item.image}
              price={item.price}
              product={item.product}
              title={item.title}
            />
          ))}
        </div>
      </div>

      <div className="menu_section2">
        <div className="menu_section2_contents">
          <div className="menu_section2_contents_text">
            <h2>
              You can order through apps
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>
          <div className="menu_section2_contents_img">
            <div className="menu_section2_contents_img_col1">
              <img src={menuimg1} alt="" />
              <img src={menuimg3} alt="" />
              <img src={menuimg5} alt="" />

            </div>
            <div className="menu_section2_contents_img_col2">
              <img src={menuimg8} alt="" />
              <img src={menuimg7} alt="" />
              <img src={menuimg9} alt="" />
            </div>
            <div className="menu_section2_contents_img_col3">
              <img src={menuimg2} alt="" />
              <img src={menuimg4} alt="" />
              <img src={menuimg6} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MenuPage;