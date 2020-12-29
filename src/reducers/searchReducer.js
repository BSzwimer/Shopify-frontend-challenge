import { ERROR_MESSAGE } from "../actions/types";

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
