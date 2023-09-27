import { GENERAL_POSTS } from '../actions';

const initialState = {
  posts: [],
};

const mainPagePostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERAL_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    default:
      return state;
  }
};

export default mainPagePostsReducer;
