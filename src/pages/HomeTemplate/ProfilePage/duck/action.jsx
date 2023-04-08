import * as ActionType from "./type";
import api from "../../../../utils/apiUtil";
export const actFetchProfile=()=>{
    return (dispatch)=>{
        dispatch(actRequestProfile());
        api.post("QuanLyNguoiDung/ThongTinNguoiDung")
        .then((result)=>{
            dispatch(actSuccessProfile(result.data));
            
        })
        .catch((error)=>{
            dispatch(actFailProfile(error))
        })
    }
}
export const actRequestProfile=()=>{
    return{
        type:ActionType.PROFILE_REQUEST,
    }
}
export const actSuccessProfile=(data)=>{
    return{
        type:ActionType.PROFILE_SUCCESS,
        payload: data,
    }
}
export const actFailProfile=(error)=>{
    return{
        type:ActionType.PROFILE_FAIL,
        payload:error,
    }
}

export const actFetchUpdateProfile=(profile)=>{
    return(dispatch)=>{        
        api.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung",profile)
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            dispatch(actFailUpdateProfile(error))
        })
    }
}
export const actFailUpdateProfile=(error)=>{
    return{
        type: ActionType.UPDATE_PROFILE_FAIL,
        payload:error,
    }
}