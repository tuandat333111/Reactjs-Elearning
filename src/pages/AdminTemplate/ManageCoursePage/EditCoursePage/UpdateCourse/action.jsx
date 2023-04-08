import api from "../../../../../utils/apiUtil";
import * as ActionType from "./types";

export const actUpdateCourse= (formData) => {
    return (dispatch) => {
        api
        .post("QuanLyKhoaHoc/CapNhatKhoaHocUpload",formData)
        .then((result) => {
          dispatch(actUpdateCourseSuccess(result.data))
          alert(`Cập nhật khóa học thành công!`)
        })
        .catch((error) => {
          console.log(error?.response)
          dispatch({
            type: ActionType.UPDATE_COURSE_FAIL,
            payload: error?.response,
          })
        });
    };
  };
  
  export const actUpdateCourseSuccess = (data) => {
    return {
      type: ActionType.UPDATE_COURSE_SUCCESS,
      payload: data,
    };
  };
  