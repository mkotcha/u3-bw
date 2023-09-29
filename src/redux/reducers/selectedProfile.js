import { SET_SELECTED_PROFILE } from "../actions";

const initialState = {
  _id: "",
  name: "",
  surname: "",
  email: "",
  username: "",
  title: "",
  bio: "",
  area: "",
  createdAt: "",
  updatedAt: "",
  __v: 0,
};

const selectedProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PROFILE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default selectedProfileReducer;
