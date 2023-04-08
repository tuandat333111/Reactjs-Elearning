import api from "../../../../../utils/apiUtil";
import * as ActionType from "./types";

export const actFetchListUserNotRegistered = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      const result = await api.post(
        "QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
        maKhoaHoc
      );
      dispatch({
        type: ActionType.LIST_USER_NOT_REGISTERED,
        payload: result.data,
      });
    } catch (error) {
      console.log(error?.response);
    }
  };
};

export const actFetchListUserWaiting = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      const result = await api.post(
        `QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`,
        maKhoaHoc
      );
      dispatch({
        type: ActionType.LIST_USER_WAITING,
        payload: result.data,
      });
    } catch (error) {
      console.log(error?.response);
    }
  };
};

export const actFetchListUserRegistered = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      const result = await api.post(
        "QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc",
        maKhoaHoc
      );
      dispatch({
        type: ActionType.LIST_USER_REGISTERED,
        payload: result.data,
      });
    } catch (error) {
      console.log(error?.response);
    }
  };
};

export const actRegisterCourse2 = (course) => {
  return async (dispatch) => {
    try {
      const result = await api.post(`QuanLyKhoaHoc/GhiDanhKhoaHoc`, course);
      dispatch({
        type: ActionType.COURSE_REGISTER2,
        payload: result.data,
      });
      const maKhoaHocObj = {
        maKhoaHoc:course.maKhoaHoc
      }
      dispatch(actFetchListUserRegistered(maKhoaHocObj))
      dispatch(actFetchListUserNotRegistered(maKhoaHocObj))
      dispatch(actFetchListUserWaiting(maKhoaHocObj))
      alert("Ghi danh khóa học thành công!");
    } catch (error) {
      console.log(error?.response);
    }
  };
};

export const actCancelCourse2 = (user) => {
  return async (dispatch) => {
    try {
      const result = await api.post("QuanLyKhoaHoc/HuyGhiDanh",user);
      dispatch({
        type: ActionType.CANCEL_REGISTER2,
        payload: result.data,
      });
      const maKhoaHocObj = {
        maKhoaHoc:user.maKhoaHoc
      }
      dispatch(actFetchListUserRegistered(maKhoaHocObj))
      dispatch(actFetchListUserNotRegistered(maKhoaHocObj))
      alert('Hủy ghi danh khóa học thành công!')
    } catch (error) {
      console.log(error?.response);
    }
  };
}
