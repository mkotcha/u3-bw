import { SET_PERSONAL_PROFILE } from "../actions";

const initialState = {
  _id: "",
  name: "",
  surname: "",
  email: "",
  username: "",
  title: "",
  bio: "",
  area: "",
  image: "",
  createdAt: "",
  updatedAt: "",
  __v: 0,
};

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONAL_PROFILE:
      return {
        ...state,
        me: action.payload,
      };

    default:
      return state;
  }
};

export default meReducer;
