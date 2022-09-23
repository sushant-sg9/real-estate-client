import React, { useState } from "react";
import "./PropertyDetails.css";
import axios from "axios";

const Location = (props) => {
  const [basicInfo, setBasicInfo] = useState(
    props.locationData !== {} ? props.locationData : {}
  );

  const handleSubmit = async (e) => {
    debugger;
    const basicData = {
      email: e.target.email.value,
      locationArea: e.target.locationArea.value,
      address: e.target.address.value,
      latitude: e.target.latitude.value,
      city: e.target.city.value,
      pincode: e.target.pincode.value,
      landmark: e.target.landmark.value,
      longitude: e.target.longitude.value
    };

    setBasicInfo(basicData);
    props.setLocationDataFun({ ...props.locationData, ...basicData });

    const bodyData = {
      ...props.basicData,
      ...props.generalData,
      ...props.detailsData,
      ...props.locationData
    };

    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/properties`, { ...bodyData })
        .then((res) => {
          alert("Property data created successfully");
        });
    } catch (err) {
      alert("Error creating property");
    }
  };

  const changeDetailsData = async (e, key) => {
    debugger;
    const data = {};
    data[key] = e.target.value;
    props.locationData
      ? setBasicInfo({ ...basicInfo, ...props.basicData, ...data })
      : setBasicInfo({ ...data });
    // props.setLocationDataFun({ ...basicInfo });
  };

  return (
    <div className="basic">
      {/* <Page /> */}
      <div className="main">
        <form action="" className="form-basic" onSubmit={handleSubmit}>
          <div className="form-data1">
            <div className="form-container">
              <div className="space input-space">
              <h4>Email</h4>
              <input
                type="text"
                placeholder="Email"
                className="input"
                name="email"
                value={basicInfo.email ? basicInfo.email : ""}
                onChange={(e) => changeDetailsData(e, "email")}
              />
              </div>
              <div className="space">
              <h4>Area</h4>
              <select
                className="input"
                placeholder="select Area"
                name="locationArea"
                value={basicInfo.locationArea ? basicInfo.locationArea : ""}
                onChange={(e) => changeDetailsData(e, "locationArea")}
              >
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
              </div>
              <div className="space input-space">
              <h4>Address</h4>
              <input
                type="text"
                placeholder="Address"
                className="input"
                name="address"
                value={basicInfo.address ? basicInfo.address : ""}
                onChange={(e) => changeDetailsData(e, "address")}
              />
              </div>
              <div className="space input-space">
              <h4>Latitude</h4>
              <input
                type="text"
                placeholder="Latitude"
                className="input"
                name="latitude"
                value={basicInfo.latitude ? basicInfo.latitude : ""}
                onChange={(e) => changeDetailsData(e, "latitude")}
              />
            </div>
            </div>

            <div className="form-container1">
              <div className="space">
              <h4>City</h4>
              <select
                className="input"
                placeholder="select City"
                name="city"
                value={basicInfo.city ? basicInfo.city : ""}
                onChange={(e) => changeDetailsData(e, "city")}
              >
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
              </div>
              <div className="space">
              <h4>Pincode</h4>
              <select
                className="input"
                placeholder="please select pincode"
                name="pincode"
                value={basicInfo.pincode ? basicInfo.pincode : ""}
                onChange={(e) => changeDetailsData(e, "pincode")}
              >
                <option>411062</option>
                <option>451278</option>
                <option>854123</option>
              </select>
              </div>
              <div className="space input-space">
              <h4>Landmark</h4>
              <input
                type="text"
                placeholder="Landmark"
                className="input"
                name="landmark"
                value={basicInfo.landmark ? basicInfo.landmark : ""}
                onChange={(e) => changeDetailsData(e, "landmark")}
              />
              </div>
              <div className="space input-space">
              <h4>Longitude</h4>
              <input
                type="text"
                placeholder="Longitude"
                className="input"
                name="longitude"
                value={basicInfo.longitude ? basicInfo.longitude : ""}
                onChange={(e) => changeDetailsData(e, "longitude")}
              />
            </div>
            </div>
          </div>

          <div className="button">
            <button className="btn1" onClick={props.setGeneral}>
              Previous
            </button>

            <button className="btn2">Add property</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Location;
