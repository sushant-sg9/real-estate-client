import React, { useState } from "react";
import "./PropertyDetails.css";

const PropertyInput = (props) => {
  const [detailsInfo, setDetailsInfo] = useState(
    props.detailsData != {} ? props.detailsData : {}
  );

  const calulate = (len, wid) => {
    const length = parseInt(len);
    console.log(length);
    const width = parseInt(wid);
    const area = parseInt(length * width);
    return area;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const length = parseInt(e.target.lengthValue.value);
      const width = parseInt(e.target.breadth.value);
      const area = parseInt(length * width);
      const basicData = {
        lengthValue: length,
        breadth: width,
        area: area,
        areaUnit: e.target.areaUnit.value,
        bhkValue: e.target.bhkValue.value,
        attached: e.target.attached.value,
        furnished: e.target.furnished.value,
        lift: e.target.lift.value,
        facing: e.target.facing.value,
        floorCount: e.target.floorCount.value,
        toilet: e.target.toilet.value,
        parking: e.target.parking.value,
        electricity: e.target.electricity.value
      };

      setDetailsInfo(basicData);
      props.setDetailsDataFun({ ...props.detailsData, ...basicData });
      props.setGeneral();
    } catch (error) {
      alert("error");
    }
  };

  const changeDetailsData = async (e, key) => {
    debugger;
    const data = {};
    data[key] = e.target.value;
    props.detailsData
      ? setDetailsInfo({ ...detailsInfo, ...props.detailsData, ...data })
      : setDetailsInfo({ ...data });
    // props.setDetailsDataFun({ ...detailsInfo });
  };

  return (
    <div className="basic">
      {/* <Page /> */}

      <div className="main">
        <form action="" className="form-basic" onSubmit={handleSubmit}>
          <div className="form-data1">
            <div className="form-container">
              <div className="space input-space">
                <h4>Length</h4>
                <input
                  type="text"
                  name="lengthValue"
                  id="length"
                  required
                  value={detailsInfo.lengthValue ? detailsInfo.lengthValue : ""}
                  onChange={(e) => changeDetailsData(e, "lengthValue")}
                  className="input"
                  placeholder="Example: 1000"
                />
              </div>
              <div className="space input-space">
                <h4>Total Area</h4>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={
                    String(
                      calulate(
                        detailsInfo.lengthValue ? detailsInfo.lengthValue : 0,
                        detailsInfo.breadth ? detailsInfo.breadth : 0
                      )
                    ) === String(NaN)
                      ? 0
                      : calulate(
                          detailsInfo.lengthValue ? detailsInfo.lengthValue : 0,
                          detailsInfo.breadth ? detailsInfo.breadth : 0
                        )
                  }
                  placeholder="Example: 7500"
                  className="input"
                />
              </div>
              <div className="space">
                <h4>No of BHK</h4>
                <select
                  className="input"
                  name="bhkValue"
                  value={detailsInfo.bhkValue ? detailsInfo.bhkValue : ""}
                  onChange={(e) => changeDetailsData(e, "bhkValue")}
                >
                  <option value="volvo">select no of BHK</option>
                  <option value="saab">1</option>
                  <option value="fiat">2</option>
                  <option value="audi">3</option>
                </select>
              </div>
              <div className="space">
                <h4>Attached</h4>
                <select
                  className="input"
                  name="attached"
                  value={detailsInfo.attached ? detailsInfo.attached : ""}
                  onChange={(e) => changeDetailsData(e, "attached")}
                >
                  <option value="volvo">select Attched</option>
                  <option value="saab">Yes</option>
                  <option value="fiat">No</option>
                </select>
              </div>
              <div className="space">
                <h4>Furnished</h4>
                <select
                  className="input"
                  name="furnished"
                  value={detailsInfo.furnished ? detailsInfo.furnished : ""}
                  onChange={(e) => changeDetailsData(e, "furnished")}
                >
                  <option value="volvo">select Furnished</option>
                  <option value="saab">Yes</option>
                  <option value="fiat">No</option>
                </select>
              </div>
              <div className="space">
                <h4>Lift</h4>
                <select
                  className="input"
                  name="lift"
                  value={detailsInfo.lift ? detailsInfo.lift : ""}
                  onChange={(e) => changeDetailsData(e, "lift")}
                >
                  <option value="volvo">select Lift</option>
                  <option value="saab">Yes</option>
                  <option value="fiat">No</option>
                </select>{" "}
              </div>
              <div className="space">
                <h4>Facing</h4>
                <select
                  className="input"
                  name="facing"
                  value={detailsInfo.facing ? detailsInfo.facing : ""}
                  onChange={(e) => changeDetailsData(e, "facing")}
                >
                  <option value="volvo">select Facing</option>
                  <option value="saab">Yes</option>
                  <option value="fiat">No</option>
                </select>
              </div>
            </div>

            <div className="form-container1">
              <div className="space input-space">
                <h4>Breadth</h4>
                <input
                  type="text"
                  id="width"
                  required
                  name="breadth"
                  value={detailsInfo.breadth ? detailsInfo.breadth : ""}
                  onChange={(e) => changeDetailsData(e, "breadth")}
                  placeholder="Example: 1000"
                  className="input"
                />
              </div>
              <div className="space">
                <h4>Area Unit</h4>
                <select
                  className="input"
                  name="areaUnit"
                  value={detailsInfo.areaUnit ? detailsInfo.areaUnit : ""}
                  onChange={(e) => changeDetailsData(e, "areaUnit")}
                >
                  <option value="volvo">Area Unit</option>
                  <option value="saab">Sq.m</option>
                  <option value="fiat">Sq.cms</option>
                </select>
              </div>
              <div className="space">
                <h4>No of Floor</h4>
                <select
                  className="input"
                  name="floorCount"
                  value={detailsInfo.floorCount ? detailsInfo.floorCount : ""}
                  onChange={(e) => changeDetailsData(e, "floorCount")}
                >
                  <option value="volvo">No of floors</option>
                  <option value="saab">3</option>
                  <option value="fiat">4</option>
                  <option value="fiat">5</option>
                </select>
              </div>
              <div className="space">
                <h4>Western toilet</h4>
                <select
                  className="input"
                  name="toilet"
                  value={detailsInfo.toilet ? detailsInfo.toilet : ""}
                  onChange={(e) => changeDetailsData(e, "toilet")}
                >
                  <option value="saab">Western toilet</option>
                  <option value="fiat">Yes</option>
                  <option value="fiat">No</option>
                </select>
              </div>
              <div className="space">
                <h4>Car Parking</h4>
                <select
                  className="input"
                  name="parking"
                  value={detailsInfo.parking ? detailsInfo.parking : ""}
                  onChange={(e) => changeDetailsData(e, "parking")}
                >
                  <option value="saab">Car Parking</option>
                  <option value="fiat">Yes</option>
                  <option value="fiat">No</option>
                </select>
              </div>
              <div className="space input-space">
                <h4>Electricity</h4>
                <input
                  type="text"
                  id="electricity"
                  name="electricity"
                  placeholder="Example: 3 phase"
                  className="input"
                  value={detailsInfo.electricity ? detailsInfo.electricity : ""}
                  onChange={(e) => changeDetailsData(e, "electricity")}
                />
              </div>
            </div>
          </div>

          <div className="button">
            <button className="btn1 " onClick={props.setBasic}>
              Previous
            </button>
            <button className="btn2">Save & continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyInput;
