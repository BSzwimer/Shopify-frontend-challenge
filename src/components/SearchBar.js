import React, { useState } from "react";
import { fetchMovies } from "../actions";
import { connect } from "react-redux";
import _ from "lodash";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setSearchedTerm(term);
    props.fetchMovies(term.replace(/\s+/g, " ").trim().toLowerCase());
  };

  const errorRender = () => {
    if (searchedTerm === term) {
      return _.isEmpty(props.errorMessage.error) ? null : (
        <div className="ui error message">
          <div className="header">No results found</div>
          <p>
            {`We didn't find any movies searching for ${searchedTerm}. Please search a different movie`}
          </p>
        </div>
      );
    }
    return null;
  };

  const errorClassName = () => {
    if (searchedTerm === term) {
      return `field ${_.isEmpty(props.errorMessage.error) ? null : "error"}`;
    }
    return "field";
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form error" onSubmit={onSubmit}>
        <div className={errorClassName()}>
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
