import CreateAccNav from "../components/CreateAcctNav"
import "../styles/Login.css"
import AcctForm from "../components/AcctForm";



function Login() {
  return (
    <div>
      <div className="loginMainDiv">
        <CreateAccNav
          AcctText={"Don't have an Account"}
          AcctBtn={"Sign up"}
        />
        <div className="login_page_main">
          <div className="login_page_main_bg">
          </div>
          <AcctForm
            title={"Welcome back!"}
            passwordPlaceholder={"Enter password"}
            forgetPassword={true}
            emailPlaceholder={"Enter your email"}
            buttonLabel={"Log in"}
            showEmailInput={true}
            showPasswordInput={true}
            dontHaveAcct={true}
            recaptcha={true}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login;