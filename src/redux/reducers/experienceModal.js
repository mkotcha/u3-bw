import { HIDE_EXPERIENCE_MODAL, SHOW_EXPERIENCE_MODAL } from "../actions";

const initialState = {
  show: true,
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

    default:
      return state;
  }
};

export default experienceModalReducer;
