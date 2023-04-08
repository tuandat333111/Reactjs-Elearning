import * as ActionType from "./types";

const initialState = {
  data: null,
  error:null,
  loaiNguoiDung:null
};

const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_USER_SUCCESS: {
      state.data = action.payload;
      return { ...state };
    }
    case ActionType.ADD_USER_FAIL: {
      state.error = action.payload;
      return { ...state };
    }
    case ActionType.LAYDANHSACHLOAINGUOIDUNG: {
      state.loaiNguoiDung = action.payload
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default addUserReducer;
