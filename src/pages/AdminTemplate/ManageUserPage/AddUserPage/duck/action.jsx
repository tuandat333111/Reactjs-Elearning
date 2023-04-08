import api from "../../../../../utils/apiUtil";
import * as ActionType from "./types";

export const actAddUser = (user) => {
  return (dispatch) => {
      api
      .post(`QuanLyNguoiDung/ThemNguoiDung`,user)
      .then((result) => {
        dispatch(actAddUserSuccess(result.data))
        alert(`Thêm tài khoản ${user.taiKhoan} thành công!`)
      })
      .catch((error) => {
        console.log(error?.reponse)
        dispatch(actAddUserFail(error?.response))
      });

  };
};

export const actFetchLoaiNguoiDung = () => {
  return async (dispatch) => {
    try {
      const result = await api.get("QuanLyNguoiDung/LayDanhSachLoaiNguoiDung")
      dispatch({
        type:ActionType.LAYDANHSACHLOAINGUOIDUNG,
        payload:result.data
      })
    }
    catch(error){
      console.log(error?.response)
    }
  }
}

export const actAddUserSuccess = (data) => {
  return {
    type: ActionType.ADD_USER_SUCCESS,
    payload: data,
  };
};

export const actAddUserFail = (error) => {
  return {
    type:ActionType.ADD_USER_FAIL,
    payload:error
  }
}

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