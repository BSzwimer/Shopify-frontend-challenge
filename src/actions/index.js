import omdb from "../apis/omdb";
import {
  FETCH_MOVIES,
  CREATE_NOMINATION,
  DELETE_NOMINATION,
  ERROR_MESSAGE,
} from "./types";

export const fetchMovies = (term) => async (dispatch) => {
  const { data } = await omdb.get("", {
    params: {
      s: term,
      type: "movie",
    },
  });

  dispatch({
    type: ERROR_MESSAGE,
    payload: data.Search === undefined ? "No movie found" : "",
  });
  dispatch({ type: FETCH_MOVIES, payload: data.Search });
};

export const createNomination = (movie) => {
  return {
    type: CREATE_NOMINATION,
    payload: movie,
  };
};

export const deleteNomination = (id) => {
  return {
    type: DELETE_NOMINATION,
    payload: id,
  };
};
