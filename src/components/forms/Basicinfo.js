import React, { useState } from "react";
import "./PropertyDetails.css";
// import Tab from "./src/components/Tab/Tab.js"
import { Link, useNavigate } from "react-router-dom";
const Basic = (props) => {
  const [basicInfo, setBasicInfo] = useState(
    props.basicData != {} ? props.basicData : {}
  );
  const handleSubmit = async (e) => {
    try {
      const basicData = {
        property: e.target.property.value,
        price: e.target.price.value,
        age: e.target.age.value,
        description: e.target.desc.value,
        negotiable: e.target.negotiable.value,
        owner: e.target.owner.value,
        approval: e.target.approval.value,
        loan: e.target.loan.value
      };

      setBasicInfo(basicData);
      props.setBasicDataFun({ ...props.basicData, ...basicData });
      props.setDetails();
    } catch (error) {
      alert("error");
    }
  };

  const changeDetailsData = async (e, key) => {
    debugger;
    const data = {};
    data[key] = e.target.value;
    props.basicData
      ? setBasicInfo({ ...basicInfo, ...props.basicData, ...data })
      : setBasicInfo({ ...data });
    // props.setBasicDataFun({ ...basicInfo });
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
                value={basicInfo.property ? basicInfo.property : ""}
                onChange={(e) => changeDetailsData(e, "property")}
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
                value={basicInfo.price ? basicInfo.price : ""}
                onChange={(e) => changeDetailsData(e, "price")}
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
                value={basicInfo.age ? basicInfo.age : ""}
                onChange={(e) => changeDetailsData(e, "age")}
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
                value={basicInfo.description ? basicInfo.description : ""}
                onChange={(e) => changeDetailsData(e, "description")}
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
                value={basicInfo.negotiable ? basicInfo.negotiable : ""}
                onChange={(e) => changeDetailsData(e, "negotiable")}
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
                value={basicInfo.owner ? basicInfo.owner : ""}
                onChange={(e) => changeDetailsData(e, "owner")}
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
                value={basicInfo.approval ? basicInfo.approval : ""}
                onChange={(e) => changeDetailsData(e, "approval")}
              />
            </div>
            <div className="space input-space">
              <h4>Bank Loan</h4>
              <input
                type="text"
                id="loan"
                name="loan"
                value={basicInfo.loan ? basicInfo.loan : ""}
                onChange={(e) => changeDetailsData(e, "loan")}
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
