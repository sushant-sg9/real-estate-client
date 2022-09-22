import React, { useState } from "react";
import "./Basicinfo.css";
// import Tab from "./src/components/Tab/Tab.js"
import { Link, useNavigate } from "react-router-dom";

import Page from "../LandingPage/landingPage";
const Basic = (props) => {
  const navigate = useNavigate();
  const [basicInfo, setBasicInfo] = useState({});

  const handleSubmit = async (e) => {
    try {
      debugger;
      const PPID = parseInt(Math.random() * 10000);
      const Views = parseInt(Math.random() * 10);
      const Duration = parseInt(Math.random() * 100);
      var ppi = PPID.toString();
      ppi = "PPID" + ppi;
      setBasicInfo({
        property: e.target.cars.value,
        price: e.target.price.value
      });
      props.setData(basicInfo);
      props.setDetails();
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div className="main">
      <form action="" className="form-basic" onSubmit={handleSubmit}>
        <div className="form-container">
          <h4>Property type</h4>

          <select
            className="input"
            name="cars"
            id="Type"
            required
            value={props.data ? props.data.property : basicInfo.property}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, property: e.target.value })
            }
          >
            <option value="" disabled selected hidden>
              Select Property type
            </option>
            <option value="Flat">Flat</option>
            <option value="House">House</option>
            <option value="Plot">Plot</option>
          </select>

          <h4>Price</h4>
          <input
            type="text"
            name="price"
            id="Price"
            value={props.data ? props.data.property : basicInfo.property}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, price: e.target.value })
            }
            placeholder="Example: 10000"
            className="input"
          />
          <h4>Property age</h4>
          <input
            type="text"
            id="age"
            placeholder="Select Property Age"
            className="input"
          />
          <h4>Property Description</h4>
          <input type="text" id="desc" placeholder="" className="input" />
        </div>

        <div className="form-container1">
          <h4>Negotiable</h4>
          <input type="text" id="nego" placeholder="name" className="input" />
          <h4>Ownership</h4>
          <input type="text" id="own" placeholder="name" className="input" />
          <h4>Property Approved</h4>
          <input type="text" id="approv" placeholder="name" className="input" />
          <h4>Bank Loan</h4>
          <input
            type="text"
            id="loan"
            // value={loan}
            // onChange={(e) => setLoan(e.target.value)}
            placeholder="name"
            className="input"
          />
        </div>
        <div className="button">
          <Link to="/property">
            <button
              className="btn1"
              style={{ borderRadius: "40px", width: "7vw" }}
            >
              Cancel
            </button>
          </Link>
          <button
            className="btn2"
            style={{ borderRadius: "40px", width: "8vw" }}
          >
            Save & continue
          </button>
        </div>
      </form>
    </div>
  );
};
export default Basic;
