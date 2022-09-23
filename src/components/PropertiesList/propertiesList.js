import { useEffect, useState } from "react";
import imageIcon from "../../images/image_icon.png";
import eye from "../../images/eye.png";
import edit from "../../images/edit.png";
import "./propertiesList.css";
import axios from "axios";
function PropertiesList(props) {
  let [propertiesList, setPropertiesList] = useState([]);
  let [status, setStatus] = useState("Unsold");
  useEffect(() => {
    console.log("data", props.data);
    axios.get(`${process.env.REACT_APP_API_URL}/properties`).then((res) => {
      console.log(res.data.data);
      setPropertiesList(props.data.length > 0 ? props.data : res.data.data);
    });
  }, [status, props.data]);

  function statusChange(e) {
    axios
      .put(`${process.env.REACT_APP_API_URL}/properties/${e.target.id}`, {
        status: "Sold",
        duration: 0
      })
      .then((res) => {
        setStatus(status === "Unsold" ? "Sold" : "Unsold");
      });
  }
  return (
    <>
      {/* <div className="property-table"> */}
      <table className="imgs">
        <tr>
          <th>PPD ID</th>
          <th>Image</th>
          <th>Property</th>
          <th>Contact</th>
          <th>Area</th>
          <th>Views</th>
          <th>Status</th>
          <th>Days Left</th>
          <th>Action</th>
        </tr>

        {propertiesList &&
          propertiesList.map((item) => (
            <>
              <tr>
                <td>{item.ppid}</td>
                <td>
                  <img src={imageIcon} alt='' />
                </td>
                <td>{item.property}</td>
                <td>{item.contact}</td>
                <td>{item.area}</td>
                <td>{item.views}</td>
                <td>
                  <div
                    className="status-div"
                    id={item.ppid}
                    onClick={(e) => statusChange(e)}
                  >
                    {item.status}
                  </div>
                </td>
                <td>
                  {item.status.toLowerCase() === "unsold" ? item.duration : "00"}
                </td>
                <td>
                  <img src={eye} alt='' />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={edit} alt='' />
                </td>
              </tr>
            </>
          ))}
      </table>
      {/* </div> */}
    </>
  );
}

export default PropertiesList;
