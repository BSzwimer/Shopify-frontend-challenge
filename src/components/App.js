import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import NominationList from "./NominationList";
import React from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./App.css";
const options = {
  timeout: 5000,
  position: positions.MIDDLE,
};

const App = () => {
  return (
    <Provider template={AlertTemplate} {...options}>
      <div className="ui container">
        <h1>The Shoppies</h1>
        <SearchBar />
        <div className="ui segment">
          <div className="ui two column very relaxed grid">
            <div className="column ">
              <MovieList />
            </div>
            <div className="column">
              <NominationList />
            </div>
          </div>
          <div className="ui vertical divider"></div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
