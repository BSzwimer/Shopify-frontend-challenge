import React, { useState } from "react";
import { fetchMovies } from "../actions";
import { connect } from "react-redux";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.fetchMovies(term.replace(/\s+/g, " ").trim().toLowerCase());
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label> Search For a Movie</label>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default connect(null, { fetchMovies })(SearchBar);
