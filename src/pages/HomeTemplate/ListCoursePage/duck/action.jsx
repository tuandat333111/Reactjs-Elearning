import * as ActionType from "./type"
import api from "../../../../utils/apiUtil";
export const actFetchListCourse=(page)=>{
    return(dispatch)=>{
        dispatch(actRequestListCourse());
        api.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=12&MaNhom=GP01`)
        .then((result)=>{
            dispatch(actSuccessListCourse(result.data));            
        })
        .catch((error)=>{
            dispatch(actFailListCourse(error));
        })
    }
}
export const actRequestListCourse=()=>{
    return{
        type: ActionType.LIST_COURSE_REQUEST,
    }
}
export const actSuccessListCourse=(data)=>{
    return{
        type: ActionType.LIST_COURSE_SUCCESS,
        payload:data,
        
    }
}
export const actFailListCourse=(error)=>{
    return{
        type: ActionType.LIST_COURSE_FAIL,
        payload:error,
    }
}