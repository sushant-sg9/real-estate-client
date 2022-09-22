import React, { useState } from "react";
import "./Location.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Location = (props) => {
  const [general, setGenInfo] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    debugger;
    console.log(props.data);
    const basicData = [
      {
        email: e.target.email.value,
        locationArea: e.target.locationArea.value,
        address: e.target.address.value,
        latitude: e.target.latitude.value,
        city: e.target.city.value,
        pincode: e.target.pincode.value,
        landmark: e.target.landmark.value,
        longitude: e.target.longitude.value
      }
    ];
    setGenInfo([basicData]);
    const bodyData = [...props.data, ...basicData];
    props.setData([...props.data, ...basicData]);
    const finalObj = {};
    for (let i = 0; i < bodyData.length; i++) {
      Object.assign(finalObj, bodyData[i]);
    }
    console.log(finalObj);
    axios
      .post(`${process.env.REACT_APP_API_URL}/properties`, finalObj)
      .then((res) => {
        alert("Property data created successfully");
      })
      .catch((e) => {
        alert("Error creating property");
      });
  };

  return (
    <div className="basic">
      {/* <Page /> */}
      <div className="main">
        <form action="" className="form-basic" onSubmit={handleSubmit}>
          <div className="form-data1">
            <div className="form-container">
              <h4>Email</h4>
              <input
                type="text"
                placeholder="Email"
                className="input"
                name="email"
                value={
                  props.data.length && props.data[3]
                    ? props.data[3].email
                    : general.email
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, email: e.target.value }])
                }
              />
              <h4>Area</h4>
              <select
                className="input"
                placeholder="select Area"
                name="locationArea"
                value={
                  props.data.length && props.data[3]
                    ? props.data[3].locationArea
                    : general.locationArea
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, locationArea: e.target.value }])
                }
              >
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
              <h4>Address</h4>
              <input
                type="text"
                placeholder="Address"
                className="input"
                name="address"
                value={
                  props.data.length && props.data[3]
                    ? props.data[3].address
                    : general.address
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, address: e.target.value }])
                }
              />
              <h4>Latitude</h4>
              <input
                type="text"
                placeholder="Latitude"
                className="input"
                name="latitude"
                value={
                  props.data.length && props.data[3]
                    ? props.data[3].latitude
                    : general.latitude
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, latitude: e.target.value }])
                }
              />
            </div>

            <div className="form-container1">
              <h4>City</h4>
              <select
                className="input"
                placeholder="select City"
                name="city"
                value={
                  props.data.length && props.data[3]
                    ? props.data[3].city
                    : general.city
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, city: e.target.value }])
                }
              >
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
              <h4>Pincode</h4>
              <select
                className="input"
                placeholder="please select pincode"
                name="pincode"
                value={
                  props.data.length && props.data[3]
                    ? props.data[3].pincode
                    : general.pincode
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, pincode: e.target.value }])
                }
              >
                <option>411062</option>
                <option>451278</option>
                <option>854123</option>
              </select>
              <h4>Landmark</h4>
              <input
                type="text"
                placeholder="Landmark"
                className="input"
                name="landmark"
                value={
                  props.data.length && props.data[3]
                    ? props.data[3].landmark
                    : general.landmark
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, landmark: e.target.value }])
                }
              />
              <h4>Longitude</h4>
              <input
                type="text"
                placeholder="Longitude"
                className="input"
                name="longitude"
                value={
                  props.data.length && props.data[3]
                    ? props.data[3].longitude
                    : general.longitude
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, longitude: e.target.value }])
                }
              />
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
