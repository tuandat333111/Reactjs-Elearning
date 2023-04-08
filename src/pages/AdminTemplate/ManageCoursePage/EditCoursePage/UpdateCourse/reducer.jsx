import * as ActionType from "./types";

const initialState = {
  data: null,
  error:null,
};

const updatCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_COURSE_SUCCESS: {
      state.data = action.payload;
      return { ...state };
    }
    case ActionType.UPDATE_COURSE_FAIL: {
      state.error = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default updatCourseReducer;
