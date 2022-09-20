import "./landingPage.css";
import property from "../../images/Property.jpg";
import assistance from "../../images/Assistance.png";
import received from "../../images/imgs/received.png";
import sent from "../../images/imgs/sentInterest.png";
import view from "../../images/eye.png";
import tarrif from "../../images/Tariff.png";
import down from "../../images/down.png";
import user from "../../images/User_icon.png";
import { Link } from "react-router-dom";
import PropertiesList from "../PropertiesList/propertiesList";
import add from "../../images/Add_plus.png";
import { useEffect } from "react";
import SearchBar from "../SearchBar/searchBar";
function LandingPage(props) {
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
        <div className="right-panel">
          <div className="user-header">
            <div className="user-id">USER ID : 06P123</div>
            <div className="user-name">
              <img src={user} className="user-img" /> User Name{" "}
              <img src={down} />
            </div>
          </div>
          {props.getProperties ? (
            <div className="search">
              <div className="search-input-id">
                <SearchBar />
              </div>
              <div className="add-property-btn">
                <div className="add-property">
                  <img src={add} />
                  Add Property
                </div>
              </div>
            </div>
          ) : (
            <div>Add property</div>
          )}
          <div className="properties-list">
            {props.getProperties ? <PropertiesList /> : <div>Add property</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
