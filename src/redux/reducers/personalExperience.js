import { SET_PERSONAL_EXPERIENCE } from "../actions";

const initialState = {
  _id: "",
  role: "",
  company: "",
  startDate: "",
  endDate: "",
  description: "",
  area: "",
  username: "",
  createdAt: "",
  updatedAt: "",
  __v: 0,
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONAL_EXPERIENCE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default experienceReducer;
