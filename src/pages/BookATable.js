import "../styles/BookATable.css";
import img1 from "../assets/images/image 112.png";
import Footer from "../components/Footer";
import { useState } from "react";





function BookATable() {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [totalPerson, setTotalPerson] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date.trim() === "" || time.trim() === "" || name.trim() === "" || phone.trim() === "" || totalPerson.trim() === "") {
      setErr(true);
      return;
    }
  };







  return (
    <div>
      <div className="book_table_top_background">
        <div className="book_table_top_desc">
          <h1>Book A Table</h1>
          <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        </div>
        <div className="Book_table_form">
          <form onSubmit={handleSubmit}>
            <div className="Book_table_form_column">
              <div className="Book_table_form_row1 Book_table_form_label_input">
                <div className="Book_table_form_row1_date ">
                  <label>Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  {err && date === "" ?
                    <p className="validation_error">Date Required</p>
                    : null}
                </div>
                <div className="Book_table_form_row1_time ">
                  <label>Time</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                  {err && time === "" ?
                    <p className="validation_error">Time Required</p>
                    : null}
                </div>
              </div>
              <div className="Book_table_form_row2 Book_table_form_label_input">
                <div className="Book_table_form_row2_name">
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
                <div className="Book_table_form_row2_phone">
                  <label>Phone</label>
                  <input
                    type="tel"
                    placeholder="x-xxx-xxx-xxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {err && phone === "" ?
                    <p className="validation_error">Phone Required</p>
                    : null}
                </div>
              </div>
            </div>

            <div className="Book_table_form_row3">
              <div className="Book_table_form_row2_name">
                <label>Total Person</label>
                <select value={totalPerson}
                  onChange={(e) => setTotalPerson(e.target.value)}
                >
                  <option value="" disabled>Select total person</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                {err && totalPerson === "" ?
                  <p className="validation_error">Total Person Required</p>
                  : null}
              </div>
            </div>
            <div className="Book_table_form_row4">
              <button>Book A Table</button>
            </div>
          </form>
        </div>
        <div className="book_table_img">
          <img src={img1} alt="" />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default BookATable;