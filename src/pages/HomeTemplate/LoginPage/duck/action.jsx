import * as ActionType from "./type"
import api from "../../../../utils/apiUtil";
export const actFetchLoginHome=(user,navigate)=>{
    return(dispatch)=>{
        dispatch(actRequestLoginHome());
        api.post("QuanLyNguoiDung/DangNhap",user)
        .then((result)=>{
            if(result.data.maLoaiNguoiDung === "GV"){
                localStorage.setItem("UserAdmin",JSON.stringify(result.data))
                dispatch(actSuccessLoginHome(result.data))
                navigate("/",{replace:true})
            }
            else if(result.data.maLoaiNguoiDung === "HV"){
                localStorage.setItem("User",JSON.stringify(result.data))
                dispatch(actSuccessLoginHome(result.data))
                navigate("/",{replace:true})               
            }            
        })
        .catch((error)=>{           
            dispatch(actFailLoginHome(error.response.data));
        })
    
    }
}
export const actRequestLoginHome=()=>{
    return{
        type:ActionType.LOGIN_HOME_REQUEST,
    }
}
export const actSuccessLoginHome=(data)=>{
    return{
        type:ActionType.LOGIN_HOME_SUCCESS,
        payload:data,
    }
}
export const actFailLoginHome=(error)=>{
    return{
        type:ActionType.LOGIN_HOME_FAIL,
        payload:error,
    }
}