import { HIDE_POST_MODAL, SET_POST_MODAL_ID, SHOW_POST_MODAL, UNSET_POST_MODAL_ID } from "../actions";

const initialState = {
  show: true,
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
    case SET_POST_MODAL_ID:
      return {
        ...state,
        id: action.payload,
      };
    case UNSET_POST_MODAL_ID:
      return {
        ...state,
        id: "",
      };
    default:
      return state;
  }
};

export default postModalReducer;
