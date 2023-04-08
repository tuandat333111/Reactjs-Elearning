import * as ActionType from "./types"
import api from "../../../../utils/apiUtil"

export const actAuthLoginApi = (user,navigate) => {
    return async (dispatch) => {
        try {
            const result = await api.post("QuanLyNguoiDung/DangNhap",user)
            if(result.data.maLoaiNguoiDung === "GV"){
                localStorage.setItem("UserAdmin",JSON.stringify(result.data))
                dispatch({
                    type:ActionType.AUTH_LOGIN_SUCCESS,
                    payload:result.data
                })
                navigate("/admin",{replace:true})
            } else if (result.data.maLoaiNguoiDung === "HV"){
                localStorage.setItem("User",JSON.stringify(result.data))
                dispatch({
                    type:ActionType.AUTH_LOGIN_SUCCESS,
                    payload:result.data
                })
                navigate("/",{replace:true})
                alert("Bạn không có quyền truy cập!")
            } else {
                return Promise.reject({
                    response:{
                        data:"Bạn không có quyền truy cập"
                    }
                })
            }

        }
        catch(error){
            console.log(error?.reponse)
        }
    }
}

// const actAuthLogin = (user) => {
//     return api.post("QuanLyNguoiDung/DangNhap",user)
// }
