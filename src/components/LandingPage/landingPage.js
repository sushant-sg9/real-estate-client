import "./landingPage.css";
import property from "../../images/Property.jpg";
import assistance from "../../images/Assistance.png";
import received from "../../images/imgs/received.png";
import sent from "../../images/imgs/sentInterest.png";
import view from "../../images/eye.png";
import tarrif from "../../images/Tariff.png";
import down from "../../images/down.png";
import user from "../../images/User_icon.png";
import { useNavigate } from "react-router-dom";
import PropertiesList from "../PropertiesList/propertiesList";
import add from "../../images/Add_plus.png";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/searchBar";
import PropertiesTab from "../PropertiesTab/propertiesTab";

function LandingPage(props) {
  const [propertyList, setpropertyList] = useState(true);
  const [name, setName] = useState("DEFAULT");
  const [id, setId] = useState("UU123");
  const [showLogout, setShowLogout] = useState(false);
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

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      setName(localStorage.getItem("name"));
      setId(localStorage.getItem("id"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    // navigate("/");
    window.location.reload(false);
  };
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
              <img src={property} alt="" /> Property
              {/* </Link> */}
            </li>

            <li className="list1">
              <img src={assistance} alt="" />
              Assistance
            </li>
            <li className="list1">
              <img src={received} alt="" /> Received Interest
            </li>
            <li className="list1">
              <img src={sent} alt="" />
              Sent Interest
            </li>
            <li className="list1">
              <img src={view} alt="" />
              Property Views
            </li>
            <li className="list1">
              <img src={tarrif} alt="" />
              Tariff Plan
            </li>
          </ul>
        </div>
        <div className="right-panel">
          <div
            className="user-header"
            onMouseLeave={() => setShowLogout(false)}
          >
            <div className="user-id">USER ID : {id}</div>
            <div
              className="user-name"
              onClick={() => setShowLogout(!showLogout)}
            >
              <img src={user} className="user-img" alt="" />
              {name}
              <img src={down} alt="" />
            </div>
            {showLogout && (
              <div className="logout-dropdown">
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
          {propertyList ? (
            <div className="search">
              <div className="search-input-id">
                <SearchBar setSearchItem={setSearchItem} />
              </div>
              <div className="add-property-btn" onClick={changePropertyView}>
                <div className="add-property">
                  <img src={add} alt="" />
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
