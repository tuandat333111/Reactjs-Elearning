import * as ActionType from "./type";
import api from "../../../../utils/apiUtil";
export const actFetchCourseHomePage=()=>{
    return(dispatch)=>{
        dispatch(actRequestCourseHomePage());
        api.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=8&MaNhom=GP01`)
        .then((result)=>{
            dispatch(actSucessCourseHomePage(result.data.items));
        })
        .catch((error)=>{
            dispatch(actFailCourseHomePage(error));
        })
    }
}

export const actRequestCourseHomePage = () => {
  return {
    type: ActionType.COURSE_HOMEPAGE_REQUEST,
  };
};
export const actSucessCourseHomePage = (data) => {
  return {
    type: ActionType.COURSE_HOMEPAGE_SUCCESS,
    payload: data,
  };
};
export const actFailCourseHomePage = (error) => {
  return {
    type: ActionType.COURSE_HOMEPAGE_SUCCESS,
    payload: error,
  };
};
