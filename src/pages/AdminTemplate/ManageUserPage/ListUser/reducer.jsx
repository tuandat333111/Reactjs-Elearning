import * as ActionType from "./types";

const initialState = {
  data: null,
  userDelete:null,
};

const listUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_USER_SUCCESS: {
      state.data = action.payload;
      return { ...state };
    }
    case ActionType.DELETE_USER_SUCCESS: {
      state.userDelete = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default listUserReducer;
