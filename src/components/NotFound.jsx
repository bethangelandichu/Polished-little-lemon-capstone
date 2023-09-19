import { faRoadBarrier } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NotFound.scss";
const NotFound = () => {
  return (
    <section className="notfound">
      <div className="icon">
        <FontAwesomeIcon icon={faRoadBarrier} />
      </div>
      <p className="text">page under Construction.</p>
    </section>
  );
};

export default NotFound;
