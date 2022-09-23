import React, { useEffect, useState } from "react";
import "./PropertyDetails.css";

import { Link, useNavigate } from "react-router-dom";
const General = (props) => {
  const [contact, setConact] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log(props.data);
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e.target.elements.contact.value);

    // setData({ ...data, Contact: e.target.elements.contact.value });
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
              <select className="input" name="cars">
                <option value="owner">owner</option>
                <option value="saab">broker</option>
              </select>
              <h4>Posted by</h4>
              <select className="input" name="cars">
                <option value="" disabled selected hidden>
                  posted by
                </option>
                <option value="saab">broker</option>
                <option value="saab">owner</option>
              </select>
              <h4>Featured package</h4>
              <select className="input" name="cars" placeholder="please select">
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
                value={contact}
                onChange={(e) => setConact(e.target.value)}
                placeholder="enter your mobile number"
                className="input"
              />
              <h4>Sale type</h4>
              <select className="input" name="cars" placeholder="please select">
                <option value="volvo">Installment</option>
                <option value="saab">Emi</option>
                <option value="fiat">single payment</option>
              </select>
              <h4>PPD package</h4>
              <select className="input" name="cars" placeholder="please select">
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
