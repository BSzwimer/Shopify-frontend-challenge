import React from "react";
import { connect } from "react-redux";
import { deleteNomination } from "../actions";

const NominationItem = (props) => {
  return (
    <div className="item" key={props.nomination.imdbID}>
      <div className="content">
        <div className="description">
          <h3>{props.nomination.Title}</h3>
          <p>{props.nomination.Year}</p>
        </div>
        <button
          className="ui right floated negative button"
          onClick={() => props.deleteNomination(props.nomination.imdbID)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default connect(null, { deleteNomination })(NominationItem);
