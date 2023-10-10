

import "./Reservation.scss";
import Image from "../assets/chef.jpg";
import { useState } from "react";

const Reservation = () => {
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  return (
    <section className="reservation">
      <div className="container">
        <section className="reservation-wrap">
          <div className="form-wrap">
            
            <h2>Reservations</h2>
            <form action="/confirmed">
              <section className="booking-details">
                <h3 className="section-heading" >Personal Details: </h3>
                <div>
                  <label htmlFor="occasion">Occasion:</label> 
                  <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                  >
                    <option>BabyShower</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Wedding</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="preferences">Seating preferences:</label> 
                  <select
                    id="preferences"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                  >
                    <option>None</option>
                    <option>Indoors</option>
                    <option>Outdoor (Patio)</option>
                    <option>Outdoor (Sidewalk)</option>
                  </select>
                </div>
                <div>
                <label htmlFor="date">Date:</label>
                <input type="date" name="date" id="date" required />
                </div>
                <div>
                <label htmlFor="number">No of Guests:</label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  min="2"
                  max="20"
                  placeholder="No of Guests"
                  required
                />
                </div>
                <label htmlFor="res-time">Choose time:</label>
                <select id="res-time">
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
              </section>

              <section className="booking-details">
                <h3  className="section-heading">Booking Details: </h3>
                <label htmlFor="fullname">Full Name:</label>

                <input
                  type="text"
                  name="FullName"
                  id="fullname"
                  maxLength="30"
                  required
                  placeholder="Full Name"
                />
              <label htmlFor="email">E-mail Id:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="E-mail Id"
                  maxLength="30"
                />
              <label htmlFor="mobile">(+1) Mobile Number</label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  minLength="5"
                  maxLength="10"
                  placeholder="(+1) Mobile Number"
                  required
                />
                <div>
                  <label htmlFor="comments">Special Requests:</label> <br></br>
                  <textarea
                    id="comments"
                    rows={8}
                    cols={50}
                    placeholder="Special requests"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  ></textarea>

                </div>
                <div className="img-wrap">
            <img src={Image} alt="Chef" />
          </div>
              </section>
              <br></br>
              <small>
                <p className="text">
                  NOTE: You cannot edit your reservation after submission. 
                  Please double-check your answer before submitting your reservation request.
                </p>
              </small>
              <div   className="btnReceive">   
              <button type="submit">Confirm Reservation</button>
              </div>
            </form>
          </div>
        
        </section>
        
      </div>
    </section>
  );
};

export default Reservation;









