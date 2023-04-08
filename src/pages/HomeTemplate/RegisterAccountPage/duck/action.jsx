import * as ActionType from "./type";
import api from "../../../../utils/apiUtil";
export const actFetchRegisterHome=(user,navigate)=>{
    return(dispatch)=>{
        dispatch(actRequestRegisterHome());
        api.post("QuanLyNguoiDung/DangKy",user)
        .then((result)=>{
            dispatch(actSuccessRegisterHome(result.data));
            navigate("/login")
        })
        .catch((error)=>{
            dispatch(actFailRegisterHome(error?.response.data));
        })
    }
}
export const actRequestRegisterHome=()=>{
    return{
        type:ActionType.REGISTER_HOME_REQUEST,
    }
}
export const actSuccessRegisterHome=(data)=>{
    return{
        type:ActionType.REGISTER_HOME_SUCCESS,
        payload: data,
    }
}
export const actFailRegisterHome=(error)=>{
    return{
        type:ActionType.REGISTER_HOME_FAIL,
        payload:error,
    }
}