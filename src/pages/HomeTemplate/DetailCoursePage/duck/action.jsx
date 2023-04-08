import * as ActionType from "./type";
import api from "../../../../utils/apiUtil";
export const actFetchDetailCourse=(id)=>{
    return(dispatch)=>{
        dispatch(actRequestDetailCourse());
        api.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
        .then((result)=>{
            dispatch(actSuccessDetailCourse(result.data));
        })
        .catch((error)=>{
            dispatch(actFailDetailCourse(error));
        })
    }
}
export const actRequestDetailCourse=()=>{
    return{
        type: ActionType.DETAIL_COURSE_REQUEST,
    }
}
export const actSuccessDetailCourse=(data)=>{
    return{
        type:ActionType.DETAIL_COURSE_SUCCESS,
        payload:data,
    }
}
export const actFailDetailCourse=(error)=>{
    return{
        type:ActionType.DETAIL_COURSE_FAIL,
        payload:error,
    }
}