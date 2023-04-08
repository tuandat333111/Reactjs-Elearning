import * as ActionType from "./type";
import api from "../../../../utils/apiUtil";
export const actFetchFindCourse=()=>{
    return(dispatch)=>{
        dispatch(actRequestFindCourse());
        api.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
        .then((result)=>{
            dispatch(actSuccessFindCourse(result.data));
        })
        .catch((error)=>{
            dispatch(actFailFindCourse(error));
        })
    }
}
export const actRequestFindCourse=()=>{
    return{
        type: ActionType.FIND_COURSE_REQUEST,
    }
}
export const actSuccessFindCourse=(data)=>{
    return{
        type: ActionType.FIND_COURSE_SUCCESS,
        payload:data,
    }
}
export const actFailFindCourse=(error)=>{
    return{
        type: ActionType.FIND_COURSE_FAIL,
        payload:error,
    }
}
export const actKeyword=(keyword)=>{
    return{
        type: ActionType.FIND_COURSE_KEYWORD,
        payload:keyword,
    }
}