import { HIDE_POST_MODAL, SET_PERSONAL_POST_ID, SHOW_POST_MODAL, UNSET_PERSONAL_POST_ID } from "../actions";

const initialState = {
  show: false,
  id: "",
};

const postModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POST_MODAL:
      return {
        ...state,
        show: true,
      };
    case HIDE_POST_MODAL:
      return {
        ...state,
        show: false,
      };
    case SET_PERSONAL_POST_ID:
      return {
        ...state,
        id: action.payload,
      };
    case UNSET_PERSONAL_POST_ID:
      return {
        ...state,
        id: "",
      };
    default:
      return state;
  }
};

export default postModalReducer;
