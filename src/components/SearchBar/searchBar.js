import line from "../../images/Line.png";
import search from "../../images/search.png";
import "./searchBar.css";
function SearchBar() {
  function searchId(e) {}
  return (
    <>
      <div className="search-input">
        <input type="text" id="search-bar" placeholder="Search PPD ID" />
        <img src={line} className="line" />
        <img src={search} className="search-icon" onClick={searchId} />
      </div>
    </>
  );
}

export default SearchBar;
