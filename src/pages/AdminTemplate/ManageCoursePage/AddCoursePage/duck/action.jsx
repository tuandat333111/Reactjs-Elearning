import api from "../../../../../utils/apiUtil";
import { actFetchListUser } from "../../../ManageUserPage/ListUser/action";
import * as ActionType from "./types"

export const actFetchCategoryCourse = () => {
    return async (dispatch) => {
        try {
            const result = await api.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc")
            dispatch(actFetchListUser())
            dispatch({
                type:ActionType.CATEGORY_COURSE_SUCCESS,
                payload:result.data
            })
        }
        catch(error){
            console.log(error?.response)
        }
    }
}

export const actAddCourse = (formData) => {
    return async (dispatch) => {
        try {
            const result = await api.post("QuanLyKhoaHoc/ThemKhoaHocUploadHinh",formData)
            dispatch({
                type:ActionType.ADD_COURSE_SUCCESS,
                payload:result.data
            })
            alert("Thêm khóa học thành công!")
        }
        catch(error){
            console.log(error?.response)
            dispatch({
                type:ActionType.ADD_COURSE_FAIL,
                payload:error?.response
            })
        }
    }
}

// export const actLayDanhSachNguoiDung = () => {
//     return async (dispatch) => {
//         try {
//             const result = await api.get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03")
//             dispatch({
//                 type:ActionType.LAYDANHSACHNGUOIDUNG_SUCCESS,
//                 payload:result.data
//             })
//         }
//         catch(error){
//             console.log(error?.response)
//         }
//     }
// }
