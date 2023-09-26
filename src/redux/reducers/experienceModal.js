import {
  HIDE_EXPERIENCE_MODAL,
  SET_PERSONAL_EXPERIENCE_ID,
  SHOW_EXPERIENCE_MODAL,
  UNSET_PERSONAL_EXPERIENCE_ID,
} from "../actions";

const initialState = {
  show: false,
  id: "",
};

const experienceModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_EXPERIENCE_MODAL:
      return {
        ...state,
        show: true,
      };
    case HIDE_EXPERIENCE_MODAL:
      return {
        ...state,
        show: false,
      };
    case SET_PERSONAL_EXPERIENCE_ID:
      return {
        ...state,
        id: action.payload,
      };
    case UNSET_PERSONAL_EXPERIENCE_ID:
      return {
        ...state,
        id: "",
      };
    default:
      return state;
  }
};

export default experienceModalReducer;
