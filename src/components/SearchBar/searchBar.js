import line from "../../images/Line.png";
import search from "../../images/search.png";
import "./searchBar.css";
import axios from "axios";
function SearchBar(props) {
  function searchId(e) {
    const value = document.getElementById("search-bar").value;
    value
      ? axios
          .get(`${process.env.REACT_APP_API_URL}/properties/${value}`)
          .then((res) => {
            console.log(res.data.data);
            props.setSearchItem([res.data.data]);
          })
      : axios.get(`${process.env.REACT_APP_API_URL}/properties`).then((res) => {
          console.log(res.data.data);
          props.setSearchItem(res.data.data);
        });
  }
  return (
    <>
      <div className="search-input">
        <input type="text" id="search-bar" placeholder="Search PPD ID" />
        <img src={line} className="line" alt='' />
        <img src={search} className="search-icon" alt='' onClick={searchId} />
      </div>
    </>
  );
}

export default SearchBar;
