import "../styles/BlogDetails.css";
import BlogDetailsImg1 from "../assets/images/pexels-jan-n-g-u-y-e-n-🍁-2664216 1.png";
import BlogDetailsImg2 from "../assets/images/pexels-suzy-hazelwood-2966196 1.png";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";




function BlogDetails() {
  return (
    <div>
      <div className="blogDetails_container">
        <div className="blogDetails_top_desc">
          <h1>
            The secret tips & tricks to prepare a perfect burger & pizza for our customers
          </h1>
        </div>

        <div className="blogDetails_img1">
          <img src={BlogDetailsImg1} alt="" />
        </div>
        <div className="blogdetails_txt1">
          <div className="blogDetails_question">
            <h3>
              What do you need to prepare a home-made burger?
            </h3>
          </div>

          <div className="blogDetails_question_main">
            <p> Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>

            <p>
              <span>Quality Beef:</span> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
            </p>
            <p>
              <span>Seasoning:</span> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
            </p>
            <p>
              <span> Don’t Overwork the Meat:</span> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
            </p>
            <p>
              <span> Cooking:</span> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
            </p>
            <p>
              <span>Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
            </p>
          </div>
        </div>
        <div className="blogdetails_txt1">
          <div className="blogDetails_question">
            <h3>
              What are the right ingredients to make it delicious?            </h3>
          </div>

          <div className="blogDetails_question_main">
            <p> Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>

            <p>
              <span>Quality Beef:</span> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
            </p>
            <p>
              <span>Seasoning:</span> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
            </p>
            <p>
              <span> Don’t Overwork the Meat:</span> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
            </p>
            <p>
              <span> Cooking:</span> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
            </p>
            <p>
              <span>Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
            </p>
          </div>
        </div>
        <div className="blogDetails_img2">
          <img src={BlogDetailsImg2} alt="" />
        </div>
        <div className="blogdetails_txt2">
          <h3>
            What are the right ingredients to make it delicious?
          </h3>
          <p>
            Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis.
          </p>
        </div>
        <div className="blogdetails_readmore">
          <h2>Read More Articles</h2>
          <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        </div>
        <div className="blogdetails_cards">
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default BlogDetails;