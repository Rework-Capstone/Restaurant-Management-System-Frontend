import "../styles/CreateAccNav.css";
import { Link } from "react-router-dom";
import NavLogo from "../assets/icons/logo.svg"

function CreateAccNav(props) {

  const{AcctText, AcctBtn} = props

  const path = AcctBtn.toLowerCase() === 'sign up' ? '/' : '/login';


  return (
    <div>
      <nav className="createAccNavbar">
        <Link className="NavLogoLink" to="/">
          <img src={NavLogo} alt="" />
        </Link>
        <div className="login-page-new__top-right">
          <div className="login-page-new__top-right-text">{AcctText}</div>
          <Link to={path} className="signUpBtn">{AcctBtn}</Link>
        </div>
      </nav>
      
    </div>
  )
}

export default CreateAccNav;