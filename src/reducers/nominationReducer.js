import { CREATE_NOMINATION, DELETE_NOMINATION } from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_NOMINATION:
      return { ...state, [action.payload.imdbID]: action.payload };
    case DELETE_NOMINATION:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
