import { JOB_SEARCH_RESULT } from "../actions";

const inistialState = {
  search: "",
};

const jobSearchReducer = (state = inistialState, action) => {
  switch (action.type) {
    case JOB_SEARCH_RESULT:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default jobSearchReducer;
