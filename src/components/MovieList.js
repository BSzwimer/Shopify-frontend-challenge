import React from "react";
import { connect } from "react-redux";
import { fetchMovies, createNomination } from "../actions";
import _ from "lodash";
import "./MovieItem.css";

class MovieList extends React.Component {
  renderList() {
    const beenNominated = this.alreadyNominated();

    return this.props.movies.map((movie) => {
      const buttonClassName = this.buttonClassName(movie, beenNominated);

      return (
        <div className="ui segment item" key={movie.imdbID}>
          <div className="ui image">
            <img
              className="ui centered image"
              src={movie.Poster === "N/A" ? null : movie.Poster}
            />
          </div>
          <div className=" content">
            <div className="header">{movie.Title}</div>
            <div className="description">{movie.Year}</div>
            <div className="extra">
              <button
                className={buttonClassName}
                onClick={() => this.props.createNomination(movie)}
              >
                Nominate
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  alreadyNominated() {
    return _.intersectionWith(
      this.props.nominations,
      this.props.movies,
      _.isEqual
    );
  }
  buttonClassName(movie, searchAndNominated) {
    return `ui primary button ${
      _.some(searchAndNominated, movie) || this.props.nominations.length === 5
        ? "disabled"
        : ""
    }`;
  }

  render() {
    return (
      //"ui relaxed divided animated list"
      <div className="ui relaxed divided items">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: Object.values(state.movies),
    nominations: Object.values(state.nominations),
  };
};

export default connect(mapStateToProps, { fetchMovies, createNomination })(
  MovieList
);
