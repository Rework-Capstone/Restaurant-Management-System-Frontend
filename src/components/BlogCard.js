import "../styles/BlogCard.css";
import menuImg1 from "../assets/images/pexels-daniela-constantini-5591664 1.png"



function BlogCard() {

  return (
    <div>
      <div className="blogCard_main">
        <div className="blogCard_img">
          <img src={menuImg1} alt="" />
        </div>
        <div className="blogCard_txt">
          <p className="blogCard_date">january 3, 2023</p>
          <span className="blogCard_method">
            How to prepare a delicious gluten free sushi
          </span>
        </div>
      </div>

    </div>
  );
}

export default BlogCard;
