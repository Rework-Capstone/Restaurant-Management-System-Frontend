import "../styles/ContactUsPage.css";
import Footer from "../components/Footer";
import { useState } from "react";





function ContactUsPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
      setErr(true);
      return;
    }
  };





  return (
    <div>
      <div className="ContactUsPage_background">
        <div className=" ContactUsPage_decs">
          <h1>Contact Us</h1>
          <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        </div>
        <div className="ContactUsPage_form">
          <form onSubmit={handleSubmit}>
            <div className="ContactUsPage_form_column">
              <div className="ContactUsPage_form_label_input">
                <div className="ContactUsPage_form_row2_name">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Enter yout Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {err && name === "" ?
                    <p className="validation_error">Name Required</p>
                    : null}
                </div>
                <div className="ContactUsPage_form_row2_phone">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="x-xxx-xxx-xxxx"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {err && email === "" ?
                    <p className="validation_error">Phone Required</p>
                    : null}
                </div>
              </div>
            </div>

            <div className="ContactUsPage_form_row3">
              <div className="ContactUsPage_form_row2_name">
                <label>Subject</label>
                <input
                  type="tel"
                  placeholder="x-xxx-xxx-xxxx"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                {err && subject === "" ?
                  <p className="validation_error">Subject Required</p>
                  : null}
              </div>
            </div>

            <div className="ContactUsPage_form_row4">
              <div className="ContactUsPage_form_row4_name">
                <label>Message</label>
                <textarea
                  placeholder="Write a Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {err && message === "" ?
                  <p className="validation_error">Message Required</p>
                  : null}
              </div>
            </div>

            <div className="ContactUsPage_form_row5">
              <button>send</button>
            </div>
          </form>
        </div>
        <div className="call_hours_location">
          <div>
            <h4>Call Us</h4>
            <p>+1-234-567-8900</p>
          </div>

          <div>
            <h4>Hours</h4>
            <p>Mon-Fri: 11am-8pm</p>
            <p>Sat,Sun: 9am-10pm</p>
          </div>

          <div>
            <h4>Our Location</h4>
            <p>123 Bridge Street</p>
            <p>Nowhere Land, Abuja 12345</p>
            <p>Nigeria</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ContactUsPage;