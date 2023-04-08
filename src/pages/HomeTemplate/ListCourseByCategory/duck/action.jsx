import * as ActionType from "./type";
import api from "../../../../utils/apiUtil";
export const actFetchListCourseByCategory=(id)=>{
    return(dispatch)=>{
        dispatch(actRequestListCourseByCategory());
        api.get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=GP01`)
        .then((result)=>{
            dispatch(actSuccessListCourseByCategory(result.data));
        })
        .catch((error)=>{
            dispatch(actFailListCourseByCategory(error));
        })
    }
}
export const actRequestListCourseByCategory=()=>{
    return{
        type: ActionType.LIST_COURSE_BYCATEGORY_REQUEST,
    }
}
export const actSuccessListCourseByCategory=(data)=>{
    return{
        type: ActionType.LIST_COURSE_BYCATEGORY_SUCCESS,
        payload:data,
    }
}
export const actFailListCourseByCategory=(error)=>{
    return{
        type: ActionType.LIST_COURSE_BYCATEGORY_FAIL,
        payload:error,
    }
}
