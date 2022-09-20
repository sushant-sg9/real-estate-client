import "./propertiesList.css";
function PropertiesList() {
  return (
    <>
      <div className="property-table">
        <table>
          <th>
            <td>PPD ID</td>
            <td>Image</td>
            <td>Property</td>
            <td>Contact</td>
            <td>Area</td>
            <td>Views</td>
            <td>Status</td>
            <td>Days Left</td>
            <td>Action</td>
          </th>
        </table>
      </div>
    </>
  );
}

export default PropertiesList;
