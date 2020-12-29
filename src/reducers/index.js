import movieReducer from "./movieReducer";
import { combineReducers } from "redux";
import nominationReducer from "./nominationReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  movies: movieReducer,
  nominations: nominationReducer,
  searchError: searchReducer,
});
