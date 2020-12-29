import React from "react";
import { connect } from "react-redux";
import { deleteNomination } from "../actions";
import NominationItem from "./NominationItem";
import "./NominationList.css";

import PopUp from "./PopUp";

const NominationList = (props) => {
  const renderedList = props.nominations.map((nomination) => {
    return <NominationItem key={nomination.imdbID} nomination={nomination} />;
  });

  const headerDisplay = () => {
    return props.nominations.length != 5
      ? `Choose ${5 - props.nominations.length} movies to be nominated`
      : "Your Nominations";
  };
  return (
    <div className="nominations">
      {props.nominations.length === 5 ? <PopUp /> : ""}
      <h2 className="ui header">{headerDisplay()}</h2>
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { nominations: Object.values(state.nominations) };
};

export default connect(mapStateToProps, { deleteNomination })(NominationList);
