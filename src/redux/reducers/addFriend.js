import { ADD_NEW_FRIEND } from "../actions";

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
    default:
      return state;
  }
};

export default addFriend;
