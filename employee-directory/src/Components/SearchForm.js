import React from "react";
import "./Search.css";

function SearchForm(props) {
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
        margin: "30px",
        borderBottom: "1px solid rgb(212, 212, 212)",
      }}
    >
      <div className="form-group">
        <label className="search" htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by Last Name"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
