import * as ActionType from "./type";
import api from "../../../../utils/apiUtil";
export const actFetchUpdateProfile=(user)=>{
    return(dispatch)=>{
        dispatch(actRequestUpdateProfile());
        api.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung",user)
        .then((result)=>{
            dispatch(actSuccessUpdateProfile(result.data));
        })
        .catch((error)=>{
            dispatch(actFailUpdateProfile(error))
        })
    }
}
export const actRequestUpdateProfile=()=>{
    return{
        type:ActionType.UPDATE_PROFILE_REQUEST,
    }
}
export const actSuccessUpdateProfile=(data)=>{
    return{
        type:ActionType.UPDATE_PROFILE_SUCCESS,
        payload: data,
    }
}
export const actFailUpdateProfile=(error)=>{
    return{
        type:ActionType.UPDATE_PROFILE_FAIL,
        payload:error,
    }
}