import * as ActionType from "./types";

const initialState = {
  data: null,
};

const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_USER_SUCCESS: {
      state.data = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default updateUserReducer;
