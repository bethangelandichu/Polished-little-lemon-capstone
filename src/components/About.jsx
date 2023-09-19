import "./About.scss";
import chefs from "../assets/chefs.jpg";
import restaurant from "../assets/restaurant.jpg";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-wrap">
          <div className="text-content">
            <h2 className="heading">Little Lemon</h2>
            <h3 className="location">Chicago</h3>
            <div className="desc">
Little lemon opened in 1995 by two italian
brothers,Adrian and Mario.
Despite the city’s diversity,the two brothers recognized the
lack of Mediterranean cuisine in Chicago,and
were inspired to bring the flavors of their hometown
in Italy to the people of Chicago. 
The two brothers
continue to oversee the Little Lemon restaurant,nearly
thirty years later.
            </div>
          </div>
          <section className="img-wrap">
          <img src={chefs} alt="Two Chef's smiling" />
          <img src={restaurant} alt="restaurant foto" />
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
