import {
  HIDE_EXPERIENCE_MODAL,
  SET_EXPERIENCE_MODAL_ID,
  SHOW_EXPERIENCE_MODAL,
  UNSET_EXPERIENCE_MODAL_ID,
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
    case SET_EXPERIENCE_MODAL_ID:
      return {
        ...state,
        id: action.payload,
      };
    case UNSET_EXPERIENCE_MODAL_ID:
      return {
        ...state,
        id: "",
      };
    default:
      return state;
  }
};

export default experienceModalReducer;
