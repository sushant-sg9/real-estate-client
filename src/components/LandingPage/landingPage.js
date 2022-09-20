import "./landingPage.css";
import property from "../../images/Property.jpg";
import assistance from "../../images/Assistance.png";
import received from "../../images/imgs/received.png";
import sent from "../../images/imgs/sentInterest.png";
import view from "../../images/eye.png";
import tarrif from "../../images/Tariff.png";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <div className="main-div">
        <div className="left-panel">
          <div className="logo">Logo</div>
          <ul>
            <li style={{ color: "#2289FF" }}>
              <Link
                to="/properties"
                style={{ textDecoration: "none" }}
                className="property-link"
              >
                <img src={property} alt="" /> Property
              </Link>
            </li>

            <li>
              <img src={assistance} alt="" />
              Assistance
            </li>
            <li>
              <img src={received} alt="" /> Received Interest
            </li>
            <li>
              <img src={sent} alt="" />
              Sent Interest
            </li>
            <li>
              <img src={view} alt="" />
              Property Views
            </li>
            <li>
              <img src={tarrif} alt="" />
              Tariff Plan
            </li>
          </ul>
        </div>
        <div className="right-panel"></div>
      </div>
    </>
  );
}

export default LandingPage;
