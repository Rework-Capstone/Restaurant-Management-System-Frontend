import "../styles/AcctForm.css";
import { IoLockClosedOutline, IoMailOutline, IoPersonOutline, IoWarning, IoWarningOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

function AcctForm(props) {
  const {
    title,
    fullNamePlaceholder,
    emailPlaceholder,
    passwordPlaceholder,
    buttonLabel,
    forgetPassword,
    showpassword,
    termsText,
    botLogos,
    botTeamsText,
    showFullNameInput,
    showEmailInput,
    showPasswordInput,
    dontHaveAcct,
    recaptcha,
  } = props;

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullname.trim() === "" || email.trim() === "" || password.trim() === "") {
      setErr(true);
      return;
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };


  return (
    <div>
      <div className="login-page-new__main-container">
        <div className="login-page-new__main-form">
          <div className="login-page-new__main-form-title-brand"></div>
          <h1 className="login-page-new__main-form-title">{title}</h1>
          <div className="signup_page_new_inserted">
            <form className="signup_form_" onSubmit={handleSubmit}>
              {showFullNameInput && (
                <div className="cu-form__row">
                  <label className="signup_username_label">Full Name</label>
                  <input
                    type="text"
                    placeholder={fullNamePlaceholder}
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    className="signup_username_input"
                  />
                  <div aria-hidden="true" className="cu-form__row-icon">
                    <IoPersonOutline className="icon_color" />
                  </div>
                  {err && fullname === "" ?

                    <p className="cu-form__error">
                      <span class="cu-form__error-icon">
                        <svg>
                          <IoWarningOutline />
                        </svg>
                      </span>
                      <span class="cu-form__error-text"> Full name required! </span>
                    </p>
                    : null}
                </div>
              )}
              {showEmailInput && (
                <div className="cu-form__row">
                  <label className="signup_username_label">Email</label>
                  <input
                    type="text"
                    placeholder={emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="signup_username_input"
                  />
                  <div aria-hidden="true" className="cu-form__row-icon">
                    <IoMailOutline className="icon_color" />
                  </div>
                  {err && email === "" ?

                    <p className="cu-form__error">
                      <span class="cu-form__error-icon">
                        <svg>
                          <IoWarningOutline />
                        </svg>
                      </span>
                      <span class="cu-form__error-text"> email required! </span>
                    </p>
                    : null}
                </div>
              )}
              {showPasswordInput && (
                <div className="cu-form__row">
                  <label className="signup_username_label">Password</label>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder={passwordPlaceholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="signup_username_input"
                  />
                  <div aria-hidden="true" className="cu-form__row-icon">
                    <IoLockClosedOutline className="icon_color" />
                  </div>

                  {forgetPassword && (
                    <div className="forgetPassword_Link">
                      <Link>
                        Forgot
                        <span> Password</span>
                        ?
                      </Link>
                    </div>
                  )}

                  {showpassword && (
                    <div className="forgetPassword_Link" onClick={togglePasswordVisibility}>
                      <Link>
                        {isPasswordVisible ? "Hide" : "Show"}
                      </Link>
                    </div>
                  )}

                  {err && password === "" ?

                    <p className="cu-form__error">
                      <span class="cu-form__error-icon">
                        <svg>
                          <IoWarningOutline />
                        </svg>
                      </span>
                      <span class="cu-form__error-text"> Password required! </span>
                    </p>
                    : null}
                </div>
              )}

              <div className="cu-form__row cu-form__row_last">
                <button type="submit" className="login_page_new__main_form_button" >
                  <span className="cu-btn__text">{buttonLabel}</span>
                  <div className="cu-btn__spinner">
                    <div className="cu-btn__bounce1"></div>
                    <div className="cu-btn__bounce2"></div>
                    <div className="cu-btn__bounce3"></div>
                  </div>
                </button>
              </div>
            </form>
            <div className="cu-onboarding__footer-link ">
              <a href="#" className="ng-star-inserted">or signup with SSO</a>
            </div>

            {termsText && (
              <div className="cu-onboarding__footnote">
                By clicking the button above, you agree to our <a href="#" target="_blank" className="cu-onboarding__footnote-link">Terms of Service</a> and <a href="http://clickup.com/privacy" target="_blank" className="cu-onboarding__footnote-link cu-onboarding__footnote-link_last">Privacy Policy</a>.
              </div>
            )}
          </div>
          <a href="#" target="_blank" className="login-page-new__main-form-help">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6a6 6 0 016-6h4a6 6 0 016-6v4a6 6 0 01-6 6H6a6 6 0 01-6-6V6zm2 0a4 4 0 014-4h4a4 4 0 014 4v4a4 4 0 01-4 4H6a4 4 0 01-4-4V6zm5.117-.483c-.12.25-.34.483-.617.483H6c-.552 0-1.016-.46-.836-.982A3.001 3.001 0 0111 6c0 1.126-.62 1.863-1.538 2.308C9.192 8.44 9 8.7 9 9a1 1 0 01-2 0v-.5c0-.828.724-1.313 1.482-1.647C8.787 6.72 9 6.467 9 6a1 1 0 00-1-1c-.512 0-.761.262-.883.517zM8 13a1 1 0 100-2 1 1 0 000 2z" fill="#fff"></path></svg>
            <div className="login-page-new__main-form-help-text"> Help </div>
          </a>
        </div>

        {botLogos && (
          <div className="login-page-new__main-bot-logos">
            <div className="login-page-new__main-bot-logo login-page-new__main-bot-logo_samsung"></div>
            <div className="login-page-new__main-bot-logo login-page-new__main-bot-logo_booking-com"></div>
            <div className="login-page-new__main-bot-logo login-page-new__main-bot-logo_ibm"></div>
            <div className="login-page-new__main-bot-logo login-page-new__main-bot-logo_padres"></div>
          </div>
        )}
        {botTeamsText && (
          <div className="login-page-new__main-bot-teams"> See why 1,000,000+ teams are more productive with ClickUp </div>
        )}

        {dontHaveAcct && (
          <div className="login-page-new__main-bot">
            <div className="login-page-new__main-bot-text"> Don't have an account?
              <Link className="login-page-new__main-bot-text-link" to="/"> Sign up</Link>
            </div>
          </div>
        )}

        {recaptcha && (
          <div className="login-page-new__main-footerr">
            This site is protected by reCAPTCHA and the Google
            <a href="#" target="_blank" className="login-page-new__main-footer-link"> Privacy Policy </a>
            and
            <a href="#" target="_blank" className="login-page-new__main-footer-link"> Terms of Service </a>
            apply.
          </div>
        )}
      </div>
    </div>
  );
}

export default AcctForm;
