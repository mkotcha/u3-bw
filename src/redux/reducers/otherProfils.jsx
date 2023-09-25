import { SET_OTHER_PROFILES } from "../actions";

const initialState = {
  profiles: [],
};

const otherProfilesReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_OTHER_PROFILES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default otherProfilesReducers;
