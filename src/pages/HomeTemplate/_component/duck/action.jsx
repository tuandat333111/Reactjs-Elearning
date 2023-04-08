import * as ActionType from "./type"
import api from "../../../../utils/apiUtil";
export const fetchCourseMenu=()=>{
    return (dispatch)=>{
        dispatch(actRequestCourseMenu());
        api.get(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`)
        .then((result)=>{
            dispatch(actSuccessCourseMenu(result.data));                      
        })        
        .catch((error)=>{
            dispatch(actFailCourseMenu(error));
        })
    }
}

export const actRequestCourseMenu=()=>{
    return{
        type:ActionType.COURSE_MENU_REQUEST,
    }
}
export const actSuccessCourseMenu=(data)=>{
    return{
        type:ActionType.COURSE_MENU_SUCCESS,
        payload:data,
    }
}
export const actFailCourseMenu=(error)=>{
    return{
        type:ActionType.COURSE_MENU_FAIL,
        payload:error,
    }
}