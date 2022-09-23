import React, { useState } from "react";
import "./PropertyDetails.css";

const General = (props) => {
  const [basicInfo, setBasicInfo] = useState(
    props.generalData !== {} ? props.generalData : {}
  );
  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();

    try {
      const basicData = {
        ownerName: e.target.ownerName.value,
        postedBy: e.target.postedBy.value,
        featured: e.target.featured.value,
        contact: e.target.contact.value,
        saleType: e.target.saleType.value,
        ppdPackage: e.target.ppdPackage.value
      };
      setBasicInfo(basicData);
      props.setGeneralDataFun({ ...props.generalData, ...basicData });
      props.setLocation();
    } catch (error) {
      alert("error");
    }
  };

  const changeDetailsData = async (e, key) => {
    debugger;
    const data = {};
    data[key] = e.target.value;
    props.generalData
      ? setBasicInfo({ ...basicInfo, ...props.generalData, ...data })
      : setBasicInfo({ ...data });
    // props.setBasicDataFun({ ...basicInfo });
  };

  return (
    <div className="basic">
      {/* <Page /> */}
      <div className="main">
        <form action="" className="form-basic" onSubmit={handleSubmit}>
          <div className="form-data1">
            <div className="form-container">
              <div className="space">
              <h4>Name</h4>
              <select
                className="input"
                name="ownerName"
                value={basicInfo.ownerName ? basicInfo.ownerName : ""}
                onChange={(e) => changeDetailsData(e, "ownerName")}
              >
                <option value="owner">owner</option>
                <option value="saab">broker</option>
              </select>
              </div>
              <div className="space">
              <h4>Posted by</h4>
              <select
                className="input"
                name="postedBy"
                value={basicInfo.postedBy ? basicInfo.postedBy : ""}
                onChange={(e) => changeDetailsData(e, "postedBy")}
              >
                <option value="">posted by</option>
                <option value="saab">broker</option>
                <option value="owner">owner</option>
              </select>
              </div>
              <div className="space">
              <h4>Featured package</h4>
              <select
                className="input"
                name="featured"
                placeholder="please select"
                value={basicInfo.featured ? basicInfo.featured : ""}
                onChange={(e) => changeDetailsData(e, "featured")}
              >
                <option value="volvo">10L</option>
                <option value="saab">15L</option>
                <option value="fiat">20L</option>
                <option value="audi">25L</option>
              </select>
              </div>
            </div>

            <div className="form-container1">
              <div className="space input-space">
              <h4>Mobile</h4>
              <input
                type="text"
                id="contact"
                required
                name="contact"
                value={basicInfo.contact ? basicInfo.contact : ""}
                onChange={(e) => changeDetailsData(e, "contact")}
                placeholder="enter your mobile number"
                className="input"
              />
              </div>
              <div className="space">
              <h4>Sale type</h4>
              <select
                className="input"
                name="saleType"
                placeholder="please select"
                value={basicInfo.saleType ? basicInfo.saleType : ""}
                onChange={(e) => changeDetailsData(e, "saleType")}
              >
                <option value="volvo">Installment</option>
                <option value="saab">Emi</option>
                <option value="fiat">single payment</option>
              </select>
              </div>
              <div className="space">
              <h4>PPD package</h4>
              <select
                className="input"
                name="ppdPackage"
                placeholder="please select"
                value={basicInfo.ppdPackage ? basicInfo.ppdPackage : ""}
                onChange={(e) => changeDetailsData(e, "ppdPackage")}
              >
                <option value="saab">3L</option>
                <option value="fiat">4L</option>
                <option value="fiat">5L</option>
              </select>
              </div>
            </div>
          </div>

          <div className="button">
            <button className="btn1 " onClick={props.setDetails}>
              Previous
            </button>
            <button className="btn2">Save & continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default General;
