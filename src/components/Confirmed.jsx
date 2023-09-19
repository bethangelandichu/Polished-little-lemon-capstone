import "./Confirmed.scss";
import { ReactComponent as Verified } from "../assets/Verified.svg";
import { Link } from "react-router-dom";
const Confirmed = () => {
  return (
    <section className="confirmed container">
      <div className="img-wrap">
        <Verified />
      </div>
      <h2>Reservation Confirmed</h2>
      <p className="text">
        <b>Thank You.!</b> You're Reservation is confirmed and an email has been
        sent with the reservation details. 

        See you soon!
      </p>
      <section className="redirect-buttons">
        {/* <a
          className="redirect-button"
          href={require("../../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          Browse Menu
        </a> */}
        <div>
        <Link className="redirect-button" to="/order">
          Order Online.

        </Link>
        </div>
        <div>
        <Link className="redirect-button" to="/">
    
          Home Page.
        </Link>
        </div>

       
      </section>


    </section>
  );
};

export default Confirmed;
