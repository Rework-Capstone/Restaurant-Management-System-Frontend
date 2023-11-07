import "../styles/Footer.css"
import footerLogo from "../assets/icons/japanese-food.svg"
import footertwitter from "../assets/icons/1.svg"
import footerfacebook from "../assets/icons/2.svg"
import footerinsta from "../assets/icons/3.svg"
import footergithub from "../assets/icons/4.svg"
import footerImg1 from "../assets/images/pexels-steve-3789885 1.png"
import footerimg2 from "../assets/images/eiliv-aceron-d5PbKQJ0Lu8-unsplash 1.png"
import footerimg3 from "../assets/images/pexels-ella-olsson-1640772 1.png"
import footerimg4 from "../assets/images/pexels-ash-376464 1.png"


function Footer() {
  return (
    <div>
      <footer className="footer_main">
        <div className="footer_main_container">
          <div className="footer_row">
            <div className="footer_row_col1 footer-col">
              <div>
                <img src={footerLogo} alt="" />
                <h3>Bistro Bliss</h3>
              </div>
              <ul>
                <li>
                  <span>In the new era of technology we look a in the future with certainty and pride to for our company and.</span>
                </li>
                <li>
                  <img src={footertwitter} alt="" />
                  <img src={footerfacebook} alt="" />
                  <img src={footerinsta} alt="" />
                  <img src={footergithub} alt="" />
                </li>
              </ul>

            </div>
            <div className="footer_row_col2 footer-col">
              <h3>Pages</h3>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Delivery</li>
              </ul>
            </div>

            <div className="footer_row_col3 footer-col">
              <h3>Utility pages</h3>
              <ul>
                <li>Start Here</li>
                <li>Styleguide</li>
                <li>Password </li>
                <li>404 Not</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>Veiw More</li>
              </ul>
            </div>

            <div className="footer_row_col4 footer-col">
              <h3>Follow Us On Instagram</h3>
              <div className="FooterGrid">
                <img src={footerImg1} alt="" />
                <img src={footerimg2} alt="" />
                <img src={footerimg3} alt="" />
                <img src={footerimg4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr className="footer_hr" />
        <div className="footer_copyRight">
          Copyright © 2023 Hashtag Developer. All Rights Reserved
        </div>
      </footer>
    </div>
  )
}

export default Footer;