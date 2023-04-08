import * as ActionType from "./types";

const initialState = {
  listUserNotRegistered: null,
  listUserWaiting: null,
  listUserRegistered: null,
  courseRegister2:null,
  cancelCourse2:null,
};

const registerCourseByUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_USER_NOT_REGISTERED: {
      state.listUserNotRegistered = action.payload;
      return { ...state };
    }
    case ActionType.LIST_USER_WAITING: {
      state.listUserWaiting = action.payload;
      return { ...state };
    }

    case ActionType.LIST_USER_REGISTERED: {
      state.listUserRegistered = action.payload;
      return { ...state };
    }
    case ActionType.COURSE_REGISTER2: {
      state.courseRegister2 = action.payload;
      return { ...state };
    }
    case ActionType.CANCEL_REGISTER2: {
      state.cancelCourse2 = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default registerCourseByUserReducer;
