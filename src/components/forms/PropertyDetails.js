import React, { useState } from "react";
import "./PropertyDetails.css";
import Page from "../LandingPage/landingPage";
import { Link, useNavigate } from "react-router-dom";

const PropertyInput = (props) => {
  const [propertyDetails, setDetails] = useState({});

  const navigate = useNavigate();

  const calulate = (len, wid) => {
    const length = parseInt(len);
    console.log(length);
    const width = parseInt(wid);
    const area = parseInt(length * width);
    return area;
  };
  const handleSubmit = async (e) => {
    console.log("data", props.data);
    e.preventDefault();
    const length = parseInt(e.target.elements.lengthValue.value);
    const width = parseInt(e.target.elements.width.value);
    const area = parseInt(length * width);
    const basicData = [
      {
        lengthValue: length,
        breadth: width,
        area: area,
        bhkValue: e.target.bhkValue.value,
        furnished: e.target.furnished.value,
        lift: e.target.lift.value,
        facing: e.target.facing.value,
        floorCount: e.target.floorCount.value,
        toilet: e.target.toilet.value,
        parking: e.target.parking.value,
        electricity: e.target.electricity.value
      }
    ];
    setDetails([basicData]);
    props.setData([...props.data, ...basicData]);
    // props.setDetails();

    props.setGeneral();
  };

  return (
    <div className="basic">
      {/* <Page /> */}

      <div className="main">
        <form action="" className="form-basic" onSubmit={handleSubmit}>
          <div className="form-data1">
            <div className="form-container">
              <h4>Length</h4>
              <input
                type="number"
                name="lengthValue"
                id="length"
                required
                value={
                  props.data.length && props.data[1]
                    ? props.data[1].lengthValue
                    : propertyDetails.lengthValue
                }
                onChange={(e) =>
                  setDetails([{ ...props.data, lengthValue: e.target.value }])
                }
                className="input"
                placeholder="Example: 1000"
              />
              <h4>Total Area</h4>
              <input
                type="text"
                id="area"
                name="area"
                value={
                  String(
                    calulate(
                      props.data[1] ? props.data[1].lengthValue : 0,
                      props.data[1] ? props.data[1].breadth : 0
                    )
                  ) === String(NaN)
                    ? 0
                    : calulate(
                        props.data[1] ? props.data[1].lengthValue : 0,
                        props.data[1] ? props.data[1].breadth : 0
                      )
                }
                placeholder="Example: 7500"
                className="input"
              />
              <h4>No of BHK</h4>
              <select
                className="input"
                name="bhkValue"
                value={
                  props.data.length && props.data[1]
                    ? props.data[1].bhkValue
                    : propertyDetails.bhkValue
                }
                onChange={(e) =>
                  setDetails([{ ...props.data, bhkValue: e.target.value }])
                }
              >
                <option value="volvo">select no of BHK</option>
                <option value="saab">1</option>
                <option value="fiat">2</option>
                <option value="audi">3</option>
              </select>
              <h4>Furnished</h4>
              <select
                className="input"
                name="furnished"
                value={
                  props.data.length && props.data[1]
                    ? props.data[1].furnished
                    : propertyDetails.furnished
                }
                onChange={(e) =>
                  setDetails([{ ...props.data, furnished: e.target.value }])
                }
              >
                <option value="volvo">select Furnished</option>
                <option value="saab">Yes</option>
                <option value="fiat">No</option>
              </select>
              <h4>Lift</h4>
              <select
                className="input"
                name="lift"
                value={
                  props.data.length && props.data[1]
                    ? props.data[1].lift
                    : propertyDetails.lift
                }
                onChange={(e) =>
                  setDetails([{ ...props.data, lift: e.target.value }])
                }
              >
                <option value="volvo">select Furnished</option>
                <option value="saab">Yes</option>
                <option value="fiat">No</option>
              </select>{" "}
              <h4>Facing</h4>
              <select
                className="input"
                name="facing"
                value={
                  props.data.length && props.data[1]
                    ? props.data[1].facing
                    : propertyDetails.facing
                }
                onChange={(e) =>
                  setDetails([{ ...props.data, facing: e.target.value }])
                }
              >
                <option value="volvo">select Facing</option>
                <option value="saab">Yes</option>
                <option value="fiat">No</option>
              </select>
            </div>

            <div className="form-container1">
              <h4>Breadth</h4>
              <input
                type="number"
                id="width"
                required
                name="breadth"
                value={
                  props.data.length && props.data[1]
                    ? props.data[1].breadth
                    : propertyDetails.breadth
                }
                onChange={(e) =>
                  setDetails([{ ...props.data, breadth: e.target.value }])
                }
                placeholder="Example: 1000"
                className="input"
              />
              <h4>Area Unit</h4>
              <select
                className="input"
                name="area"
                value={
                  props.data.length && props.data[1]
                    ? props.data[1].area
                    : propertyDetails.area
                }
                onChange={(e) =>
                  setDetails([{ ...props.data, area: e.target.value }])
                }
              >
                <option value="volvo">Area Unit</option>
                <option value="saab">Sq.m</option>
                <option value="fiat">Sq.cms</option>
              </select>
              <h4>No of Floor</h4>
              <select
                className="input"
                name="floorCount"
                value={
                  props.data.length && props.data[1]
                    ? props.data[1].floorCount
                    : propertyDetails.floorCount
                }
                onChange={(e) =>
                  setDetails([{ ...props.data, floorCount: e.target.value }])
                }
              >
                <option value="volvo">No of floors</option>
                <option value="saab">3</option>
                <option value="fiat">4</option>
                <option value="fiat">5</option>
              </select>
              <h4>Western toilet</h4>
              <select
                className="input"
                name="toilet"
                value={
                  props.data.length && props.data[1]
                    ? props.data[1].toilet
                    : propertyDetails.toilet
                }
                onChange={(e) =>
                  setDetails([{ ...props.data, toilet: e.target.value }])
                }
              >
                <option value="saab">Western toilet</option>
                <option value="fiat">Yes</option>
                <option value="fiat">No</option>
              </select>
              <h4>Car Parking</h4>
              <select
                className="input"
                name="parking"
                value={
                  props.data.length && props.data[1]
                    ? props.data[1].parking
                    : propertyDetails.parking
                }
                onChange={(e) =>
                  setDetails([{ ...props.data, parking: e.target.value }])
                }
              >
                <option value="saab">Car Parking</option>
                <option value="fiat">Yes</option>
                <option value="fiat">No</option>
              </select>
              <h4>Electricity</h4>
              <input
                type="text"
                id="electricity"
                name="electricity"
                placeholder="Example: 3 phase"
                className="input"
                value={
                  props.data.length && props.data[1]
                    ? props.data[1].electricity
                    : propertyDetails.electricity
                }
                onChange={(e) =>
                  setDetails([{ ...props.data, electricity: e.target.value }])
                }
              />
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
