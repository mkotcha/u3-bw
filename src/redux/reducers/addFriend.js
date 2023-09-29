import { ADD_NEW_FRIEND, REM_A_FRIEND } from "../actions";

const initialState = {
  friendsList: [],
};

const addFriend = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_FRIEND:
      return {
        ...state,
        friendsList: [action.payload],
      };
    case REM_A_FRIEND:
      return {
        ...state,
        friendsList: state.friendsList.filter(el => el._id !== action.payload),
      };
    default:
      return state;
  }
};

export default addFriend;
