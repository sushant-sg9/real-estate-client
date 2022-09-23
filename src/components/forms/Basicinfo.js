import React, { useState } from "react";
import "./PropertyDetails.css";
// import Tab from "./src/components/Tab/Tab.js"
import { Link, useNavigate } from "react-router-dom";
const Basic = (props) => {
  const navigate = useNavigate();
  const [basicInfo, setBasicInfo] = useState([]);
  const handleSubmit = async (e) => {
    try {
      const basicData = [
        {
          property: e.target.property.value,
          price: e.target.price.value,
          age: e.target.price.value,
          description: e.target.desc.value,
          negotiable: e.target.negotiable.value,
          owner: e.target.owner.value,
          approval: e.target.approval.value,
          loan: e.target.loan.value
        }
      ];
      setBasicInfo([basicData]);
      props.setData([...props.data, ...basicData]);
      props.setDetails();
    } catch (error) {
      alert("error");
    }
  };
  return (
    <div className="main">
      <form action="" className="form-basic" onSubmit={handleSubmit}>
        <div className="form-data1">
          <div className="form-container">
            <div className="space">
            <h4>Property type</h4>
            <select
              className="input"
              name="property"
              id="Type"
              required
              value={
                props.data.length ? props.data[0].property : basicInfo.property
              }
              onChange={(e) =>
                setBasicInfo([{ ...props.data, property: e.target.value }])
              }
            >
              <option value="" disabled selected hidden>
                Select Property type
              </option>
              <option value="Flat">Flat</option>
              <option value="House">House</option>
              <option value="Plot">Plot</option>
            </select>
            </div>
            <div className="space input-space">
            <h4>Price</h4>
            <input
              type="text"
              name="price"
              id="Price"
              value={props.data.length ? props.data[0].price : basicInfo.price}
              onChange={(e) =>
                setBasicInfo([{ ...props.data, price: e.target.value }])
              }
              placeholder="Example: 10000"
              className="input"
            />
            </div>
            <div className="space input-space">
            <h4>Property age</h4>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="Select Property Age"
              className="input"
              value={props.data.length ? props.data[0].age : basicInfo.age}
              onChange={(e) =>
                setBasicInfo([{ ...props.data, age: e.target.value }])
              }
            />
            </div>
            <div className="space input-space">
            <h4>Property Description</h4>
            <input
              type="text"
              id="desc"
              placeholder=""
              name="description"
              className="input"
              value={
                props.data.length
                  ? props.data[0].description
                  : basicInfo.description
              }
              onChange={(e) =>
                setBasicInfo([{ ...props.data, description: e.target.value }])
              }
            />
            </div>
          </div>
          <div className="form-container1">
            <div className="space input-space">
            <h4>Negotiable</h4>
            <input
              type="text"
              id="nego"
              name="negotiable"
              placeholder="name"
              className="input"
              value={
                props.data.length
                  ? props.data[0].negotiable
                  : basicInfo.negotiable
              }
              onChange={(e) =>
                setBasicInfo([{ ...props.data, negotiable: e.target.value }])
              }
            />
            </div>
            <div className="space input-space">
            <h4>Ownership</h4>
            <input
              type="text"
              id="own"
              name="owner"
              placeholder="name"
              className="input"
              value={props.data.length ? props.data[0].owner : basicInfo.owner}
              onChange={(e) =>
                setBasicInfo([{ ...props.data, owner: e.target.value }])
              }
            />
            </div>
            <div className="space input-space">
            <h4>Property Approved</h4>
            <input
              type="text"
              id="approv"
              name="approval"
              placeholder="name"
              className="input"
              value={
                props.data.length ? props.data[0].approval : basicInfo.approval
              }
              onChange={(e) =>
                setBasicInfo([{ ...props.data, approval: e.target.value }])
              }
            />
            </div>
            <div className="space input-space">
            <h4>Bank Loan</h4>
            <input
              type="text"
              id="loan"
              name="loan"
              value={props.data.length ? props.data[0].loan : basicInfo.loan}
              onChange={(e) =>
                setBasicInfo([{ ...props.data, loan: e.target.value }])
              }
              placeholder="name"
              className="input"
            />
            </div>
          </div>
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
