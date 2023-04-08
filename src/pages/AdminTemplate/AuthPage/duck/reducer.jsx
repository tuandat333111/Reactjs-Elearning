import * as ActionType from "./types";

const initialState = {
  data: null,
};

const authLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTH_LOGIN_SUCCESS: {
        state.data = action.payload;
        return { ...state };
    }
    default:
      return { ...state };
  }
};

export default authLoginReducer;
