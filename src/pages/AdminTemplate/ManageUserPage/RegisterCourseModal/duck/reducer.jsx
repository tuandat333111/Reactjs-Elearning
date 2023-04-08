import * as ActionType from "./types";

const initialState = {
  listCourseNotRegistered: null,
  listCourseRegistered: null,
  listCourseWaiting: null,
  courseRegister:null,
  cancelCourse:null,
};

const registerCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_COURSE_NOT_REGISTERED: {
      state.listCourseNotRegistered = action.payload;
      return { ...state };
    }
    case ActionType.LIST_COURSE_REGISTERED: {
      state.listCourseRegistered = action.payload;
      return { ...state };
    }
    case ActionType.LIST_COURSE_REGISTERED: {
      state.listCourseWaiting = action.payload;
      return { ...state };
    }
    case ActionType.COURSE_REGISTER: {
      state.courseRegister = action.payload;
      return { ...state };
    }
    case ActionType.CANCEL_REGISTER: {
      state.cancelCourse = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default registerCourseReducer;
