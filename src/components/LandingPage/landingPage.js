import "./landingPage.css";
import property from "../../images/Property.jpg";
import assistance from "../../images/Assistance.png";
import received from "../../images/imgs/received.png";
import sent from "../../images/imgs/sentInterest.png";
import view from "../../images/eye.png";
import tarrif from "../../images/Tariff.png";
import down from "../../images/down.png";
import user from "../../images/User_icon.png";
import { Link, useNavigate } from "react-router-dom";
import PropertiesList from "../PropertiesList/propertiesList";
import add from "../../images/Add_plus.png";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/searchBar";
import PropertiesTab from "../PropertiesTab/propertiesTab";
function LandingPage(props) {
  const [propertyList, setpropertyList] = useState(true);

  const [data, setData] = useState([]);
  function changePropertyView() {
    setpropertyList(false);
  }
  function setPropertyView() {
    setpropertyList(true);
  }

  function setSearchItem(data) {
    setData(data);
  }
  return (
    <>
      <div className="main-div">
        <div className="left-panel">
          <div className="logo">Logo</div>
          <ul>
            <li
              className="list1"
              style={{ color: "#2289FF" }}
              onClick={setPropertyView}
            >
              {/* <Link
                to="/properties"
                style={{ textDecoration: "none" }}
                className="property-link"
              > */}
              <img src={property} alt="" /> Property
              {/* </Link> */}
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
          {propertyList ? (
            <div className="search">
              <div className="search-input-id">
                <SearchBar setSearchItem={setSearchItem} />
              </div>
              <div className="add-property-btn" onClick={changePropertyView}>
                <div className="add-property">
                  <img src={add} />
                  Add New Property
                </div>
              </div>
            </div>
          ) : (
            <div className="search">
              <div className="add-header">
                <div className="add-id">Add Property</div>
              </div>
            </div>
          )}
          <div className="properties-list">
            {propertyList ? <PropertiesList data={data} /> : <PropertiesTab />}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
