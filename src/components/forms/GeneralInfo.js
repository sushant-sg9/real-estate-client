import React, { useEffect, useState } from "react";
import "./PropertyDetails.css";

import { Link, useNavigate } from "react-router-dom";
const General = (props) => {
  const [general, setGenInfo] = useState({});

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const basicData = [
      {
        ownerName: e.target.ownerName.value,
        postedBy: e.target.postedBy.value,
        featured: e.target.featured.value,
        contact: e.target.contact.value,
        saleType: e.target.saleType.value
      }
    ];
    setGenInfo([basicData]);
    props.setData([...props.data, ...basicData]);
    props.setLocation();
  };

  return (
    <div className="basic">
      {/* <Page /> */}
      <div className="main">
        <form action="" className="form-basic" onSubmit={handleSubmit}>
          <div className="form-data1">
            <div className="form-container">
              <h4>Name</h4>
              <select
                className="input"
                name="ownerName"
                value={
                  props.data.length && props.data[2]
                    ? props.data[2].ownerName
                    : general.ownerName
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, ownerName: e.target.value }])
                }
              >
                <option value="owner">owner</option>
                <option value="saab">broker</option>
              </select>
              <h4>Posted by</h4>
              <select
                className="input"
                name="postedBy"
                value={
                  props.data.length && props.data[2]
                    ? props.data[2].postedBy
                    : general.postedBy
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, postedBy: e.target.value }])
                }
              >
                <option value="" disabled selected hidden>
                  posted by
                </option>
                <option value="saab">broker</option>
                <option value="saab">owner</option>
              </select>
              <h4>Featured package</h4>
              <select
                className="input"
                name="featured"
                placeholder="please select"
                value={
                  props.data.length && props.data[2]
                    ? props.data[2].featured
                    : general.featured
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, featured: e.target.value }])
                }
              >
                <option value="volvo">10L</option>
                <option value="saab">15L</option>
                <option value="fiat">20L</option>
                <option value="audi">25L</option>
              </select>
            </div>

            <div className="form-container1">
              <h4>Mobile</h4>
              <input
                type="text"
                id="contact"
                required
                name="contact"
                value={
                  props.data.length && props.data[2]
                    ? props.data[2].contact
                    : general.contact
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, contact: e.target.value }])
                }
                placeholder="enter your mobile number"
                className="input"
              />
              <h4>Sale type</h4>
              <select
                className="input"
                name="saleType"
                placeholder="please select"
                value={
                  props.data.length && props.data[2]
                    ? props.data[2].saleType
                    : general.saleType
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, saleType: e.target.value }])
                }
              >
                <option value="volvo">Installment</option>
                <option value="saab">Emi</option>
                <option value="fiat">single payment</option>
              </select>
              <h4>PPD package</h4>
              <select
                className="input"
                name="ppdPackage"
                placeholder="please select"
                value={
                  props.data.length && props.data[2]
                    ? props.data[2].ppdPackage
                    : general.ppdPackage
                }
                onChange={(e) =>
                  setGenInfo([{ ...props.data, ppdPackage: e.target.value }])
                }
              >
                <option value="saab">3L</option>
                <option value="fiat">4L</option>
                <option value="fiat">5L</option>
              </select>
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
