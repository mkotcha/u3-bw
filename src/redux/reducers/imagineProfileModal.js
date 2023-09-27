import { HIDE_PROFILE_IMAGE_MODAL, SHOW_PROFILE_IMAGE_MODAL } from "../actions";

const initialState = {
  showImage: false,
};

const profileImageModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PROFILE_IMAGE_MODAL:
      return {
        ...state,
        showImage: true,
      };
    case HIDE_PROFILE_IMAGE_MODAL:
      return {
        ...state,
        showImage: false,
      };

    default:
      return state;
  }
};

export default profileImageModalReducer;
