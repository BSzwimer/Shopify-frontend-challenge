import React, { useState } from "react";
import { fetchMovies } from "../actions";
import { connect } from "react-redux";
import _ from "lodash";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.fetchMovies(term.replace(/\s+/g, " ").trim().toLowerCase());
  };

  const errorRender = () => {
    return _.isEmpty(props.errorMessage.error) ? null : (
      <div className="ui error message">
        <div className="header">No results found</div>
        <p>
          {`We didn't find any movies related to your last search. Please search a different movie`}
        </p>
      </div>
    );
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form error" onSubmit={onSubmit}>
        <div
          className={`field ${
            _.isEmpty(props.errorMessage.error) ? null : "error"
          }`}
        >
          <label> Search For a Movie</label>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
        {errorRender()}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { errorMessage: state.searchError };
};

export default connect(mapStateToProps, { fetchMovies })(SearchBar);
