import CreateAccNav from "../components/CreateAcctNav"
import "../styles/SignUp.css"
import AcctForm from "../components/AcctForm";


function SignUp() {
  return (
    <div>
      <div className="signUpMainDiv">
        <CreateAccNav AcctText={"Already Playing With stucademy"} AcctBtn={"Login"} />
        <div className="signUp_page_main">
          <div className="signUp_page_main_bg">
          </div>
          <AcctForm title={"Let's go!"} fullNamePlaceholder={"John Doe"} passwordPlaceholder={"Maximum 8 characters"} emailPlaceholder={"example@site.com"} buttonLabel={"Play with stucademy"}  showFullNameInput={true} showEmailInput={true} showPasswordInput={true} showpassword={true} botLogos={true} botTeamsText={true} termsText={true}/>
        </div>
      </div>
    </div>
  )
}

export default SignUp