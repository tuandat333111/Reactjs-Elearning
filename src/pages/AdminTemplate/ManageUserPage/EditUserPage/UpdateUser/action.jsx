import api from "../../../../../utils/apiUtil";
import * as ActionType from "./types";

export const actUpdateUser = (userUpdate) => {
    return (dispatch) => {

        api
        .put(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`,userUpdate)
        .then((result) => {
          dispatch(actUpdateUserSuccess(result.data))
          alert(`Cập nhật tài khoản ${userUpdate.taiKhoan} thành công!`)
        })
        .catch((error) => {
          console.log(error?.reponse)
        });
    };
  };
  

  export const actUpdateUserSuccess = (data) => {
    return {
      type: ActionType.UPDATE_USER_SUCCESS,
      payload: data,
    };
  };
  