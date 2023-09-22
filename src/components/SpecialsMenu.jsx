import GreekSalad from "../assets/greek salad.jpg";
import LemonDesert from "../assets/lemon dessert.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import { ReactComponent as ScooterSVG } from "../assets/scooter.svg";
import { Link } from "react-router-dom";
import "./SpecialsMenu.scss";
const SpecialsMenu = () => {
  return (
    <section className="special-menu">
      <div className="container">
        <section className="special-menu-wrap">
          <div className="heading">
            <p className="title">This weeks specials!</p>
            <Link className="cta" to="/Online Menu">
              Online Menu
            </Link>
          </div>
          <div className="flex-items">
            <div className="flex-item">
              <div className="img-wrap">
                <img src={GreekSalad} alt="Greek Salad" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">GreekSalad.</p>
                  <p className="price">$12.99</p>
                </div>
                <p className="desc">
                The famous greek salad of crispy lettuce, peppers, 
                olives and our Chicago style feta cheese, 
                garnished with crunchy garlic and rosemary croutons. 
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i>
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Bruchetta} alt="Bruchetta" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Bruchetta</p>
                  <p className="price">$5.99</p>
                </div>
                <p className="desc">
                Our Bruschetta is made from grilled bread
                 that has been smeared with garlic and seasoned 
                 with salt and olive oil. 
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i>
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={LemonDesert} alt="Lemon Desert" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">LemonDesert</p>
                  <p className="price">$5.00</p>
                </div>
                <p className="desc">
                This comes straight from grandma’s recipe book,
                 every last ingredient has been sourced 
                 and is as authentic as can be imagined.
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i>
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SpecialsMenu;
