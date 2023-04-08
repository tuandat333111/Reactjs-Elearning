import api from "../../../../../utils/apiUtil";
import * as ActionType from "./types";

export const actFetchListCourseNotRegistered = (user) => {
  return async (dispatch) => {
    try {
      const result = await api.post(
        `QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${user}`
      );
      dispatch({
        type: ActionType.LIST_COURSE_NOT_REGISTERED,
        payload: result.data,
      });
    } catch (error) {
      console.log(error?.response);
    }
  };
};

export const actRegisterCourse = (course) => {
  return async (dispatch) => {
    try {
      const result = await api.post(`QuanLyKhoaHoc/GhiDanhKhoaHoc`, course);
      dispatch({
        type: ActionType.COURSE_REGISTER,
        payload: result.data,
      });
      dispatch(actFetchListCourseRegistered(course))
      dispatch(actFetchListCourseNotRegistered(course.taiKhoan))
      alert("Ghi danh khóa học thành công!");
    } catch (error) {
      console.log(error?.response);
    }
  };
};

export const actFetchListCourseWaiting = (user) => {
  return async (dispatch) => {
    try {
      const result = await api.post(
        `QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
        user
      );
      dispatch({
        type: ActionType.LIST_COURSE_WAITING,
        payload: result.data,
      });
    } catch (error) {
      console.log(error?.response);
    }
  };
};

export const actFetchListCourseRegistered = (user) => {
  return async (dispatch) => {
    try {
      const result = await api.post("QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet",user);
      dispatch({
        type: ActionType.LIST_COURSE_REGISTERED,
        payload: result.data,
      });
    } catch (error) {
      console.log(error?.response);
    }
  };
}

export const actCancelCourse = (user) => {
  return async (dispatch) => {
    try {
      const result = await api.post("QuanLyKhoaHoc/HuyGhiDanh",user);
      dispatch({
        type: ActionType.CANCEL_REGISTER,
        payload: result.data,
      });
      dispatch(actFetchListCourseRegistered(user))
      dispatch(actFetchListCourseNotRegistered(user.taiKhoan))
      alert('Hủy ghi danh khóa học thành công!')
    } catch (error) {
      console.log(error?.response);
    }
  };
}