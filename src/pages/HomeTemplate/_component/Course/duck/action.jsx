import * as ActionType from "./type";
import api from "../../../../../utils/apiUtil";
//Call API to register Course
export const actFetchRegisterCourse=(info)=>{
    return(dispatch)=>{
        dispatch(actRequestRegisterCourse());
        api.post("QuanLyKhoaHoc/DangKyKhoaHoc",info)
        .then((result)=>{
            dispatch(actSuccessRegisterCourse(result.data));
        })
        .catch((error)=>{
            dispatch(actFailRegisterCourse(error));
        })
    }
}
export const actRequestRegisterCourse=()=>{
    return{
        type: ActionType.REGISTER_COURSE_REQUEST,
    }
}
export const actSuccessRegisterCourse=(data)=>{
    return{
        type: ActionType.REGISTER_COURSE_SUCCESS,
        payload:data,
    }
}
export const actFailRegisterCourse=(error)=>{
    return{
        type: ActionType.REGISTER_COURSE_FAIL,
        payload:error,
    }
}
//Call API to cancel Course
export const actFetchCancelCourse=(info)=>{
    return(dispatch)=>{
        dispatch(actRequestCancelCourse());
        api.post("QuanLyKhoaHoc/HuyGhiDanh",info)
        .then((result)=>{
            dispatch(actSuccessCancelCourse(result.data));
        })
        .catch((error)=>{
            dispatch(actFailCancelCourse(error));
        })
    }
}
export const actRequestCancelCourse=()=>{
    return{
        type: ActionType.CANCEL_COURSE_REQUEST,
    }
}
export const actSuccessCancelCourse=(data)=>{
    return{
        type: ActionType.CANCEL_COURSE_SUCCESS,
        payload:data,
    }
}
export const actFailCancelCourse=(error)=>{
    return{
        type: ActionType.CANCEL_COURSE_FAIL,
        payload:error,
    }
}