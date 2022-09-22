import { useEffect, useState } from "react";
import imageIcon from "../../images/image_icon.png";
import eye from "../../images/eye.png";
import edit from "../../images/edit.png";
import "./propertiesTab.css";
import axios from "axios";
import Basic from "../forms/Basicinfo";
import PropertyInput from "../forms/PropertyDetails";
import General from "../forms/GeneralInfo";
import Location from "../forms/Location";
function PropertiesTab(props) {
  const [data, setDataValue] = useState([]);
  const [properties, setProperties] = useState({
    basic: true,
    details: false,
    general: false,
    location: false
  });
  function setBasic() {
    setProperties({
      basic: true,
      details: false,
      general: false,
      location: false
    });
  }
  function setDetails() {
    setProperties({
      basic: false,
      details: true,
      general: false,
      location: false
    });
  }
  function setGeneral() {
    setProperties({
      basic: false,
      details: false,
      general: true,
      location: false
    });
  }
  function setLocation() {
    setProperties({
      basic: false,
      details: false,
      general: false,
      location: true
    });
  }

  function setData(value) {
    debugger;
    setDataValue(value);
  }
  return (
    <>
      <div className="main-tab">
        <div className="tab">
          <div
            className={properties.basic ? "choose" : "choose1"}
            onClick={(e) => setBasic(e)}
          >
            <div>
              <span className={properties.basic ? "digit" : "digit1"}>1</span>{" "}
              Basic info
            </div>
          </div>
          <div
            className={properties.details ? "choose" : "choose1"}
            onClick={setDetails}
          >
            <div>
              <span className={properties.details ? "digit" : "digit1"}>2</span>
              Property Detail
            </div>
          </div>
          <div
            className={properties.general ? "choose" : "choose1"}
            onClick={setGeneral}
          >
            <div>
              <span className={properties.general ? "digit" : "digit1"}>3</span>
              General Info
            </div>
          </div>
          <div
            className={
              properties.location
                ? "location-end choose"
                : "location-end choose1"
            }
            onClick={setLocation}
          >
            <div>
              <span className={properties.location ? "digit" : "digit1"}>
                4
              </span>
              Location info
            </div>
          </div>
        </div>
        <div>
          {properties.basic && (
            <Basic setDetails={setDetails} setData={setData} data={data} />
          )}
          {properties.details && (
            <PropertyInput
              setBasic={setBasic}
              setGeneral={setGeneral}
              setData={setData}
              data={data}
            />
          )}
          {properties.general && (
            <General
              setDetails={setDetails}
              setLocation={setLocation}
              setData={setData}
              data={data}
            />
          )}
          {properties.location && (
            <Location setGeneral={setGeneral} setData={setData} data={data} />
          )}
        </div>
      </div>
    </>
  );
}

export default PropertiesTab;
