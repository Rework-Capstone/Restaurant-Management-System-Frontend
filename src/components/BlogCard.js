import "../styles/BlogCard.css";

function BlogCard(props) {

  const {
    image,
    date,
    title
  } = props;

  return (
    <div>
      <div className="blogCard_main">
        <div className="blogCard_img">
          <img src={image} alt="" />
        </div>
        <div className="blogCard_txt">
          <p className="blogCard_date">{date}</p>
          <span className="blogCard_method">
           {title}
          </span>
        </div>
      </div>

    </div>
  );
}

export default BlogCard;
