import { HIDE_PROFILE_MODAL, SHOW_PROFILE_MODAL } from "../actions";

const initialState = {
  show: false,
};

const profileModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PROFILE_MODAL:
      return {
        ...state,
        show: true,
      };
    case HIDE_PROFILE_MODAL:
      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
};

export default profileModalReducer;
