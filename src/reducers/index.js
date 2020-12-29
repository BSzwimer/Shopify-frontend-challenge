import movieReducer from "./movieReducer";
import { combineReducers } from "redux";
import nominationReducer from "./nominationReducer";

export default combineReducers({
  movies: movieReducer,
  nominations: nominationReducer,
});
