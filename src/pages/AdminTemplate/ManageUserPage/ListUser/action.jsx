import api from "../../../../utils/apiUtil";
import * as ActionType from "./types";

export const actFetchListUser = (keyword="") => {
  return (dispatch) => {

    if (keyword.trim() !== ''){
      api
      .get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${keyword}`)
      .then((result) => {
        dispatch(actListUserSuccess(result.data))
      })
      .catch((error) => {
        console.log(error?.response)
      });
    } else {
      api
      .get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01`)
      .then((result) => {
        dispatch(actListUserSuccess(result.data))
      })
      .catch((error) => {
        console.log(error?.response)
      });
    }
    
  };
}; 

export const actListUserSuccess = (data) => {
  return {
    type: ActionType.LIST_USER_SUCCESS,
    payload: data,
  };
};

export const actDeletetUser = (userDelete) => {
  return (dispatch) => {
      api
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userDelete}`)
      .then((result) => {
        dispatch(actDeleteUserSuccess(result.data))
        alert(`Xóa tài khoản ${userDelete} thành công!`)
        dispatch(actFetchListUser())
      })
      .catch((error) => {
        console.log(error?.reponse)
      });
  };
};

export const actDeleteUserSuccess = (data) => {
  return {
    type: ActionType.DELETE_USER_SUCCESS,
    payload: data,
  };
};


/**
 * Async - Await
 */
// export const actFetchListUser = () => {
//   return async (dispatch) => {
//     try {
//       const result = await actGetListUser();
//       dispatch({
//         type:ActionType.LIST_USER_SUCCESS,
//         payload:result.data
//       })
//     }
//     catch(error){
//       console.log(error)
//     }
//   }
// }

// const actGetListUser = () => {
//   return api.get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02")
// }


// const actAddUser = (user) => {
//   return async (dispatch) => {
//     try {
//       const result = await ThemNguoiDung(user)
//       dispatch({
//         type:"ADD_USER_SUCCESS",
//         payload:result.data
//       })
//     }
//     catch(error) {
//       console.log(error)
//     }
//   }
// }

// const ThemNguoiDung = (user) => {
//   return api.post("QuanLyNguoiDung/ThemNguoiDung",user)
// }