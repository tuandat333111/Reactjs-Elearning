import React from 'react'
import { NavLink } from "react-router-dom";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actUpdateUser } from './UpdateUser/action';
import * as Yup from "yup"

export default function EditUserPage() {
    const user = JSON.parse(localStorage.getItem('UserEdit'))

    const onFinish = (values) => {
        console.log("Success:", values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

      const dispatch = useDispatch()
    
      const formik = useFormik({
        initialValues:{
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau,
            hoTen: user.hoTen,
            soDt: user.soDt,
            maLoaiNguoiDung: user.maLoaiNguoiDung,
            maNhom: "GP03",
            email: user.email,
        },
        validationSchema: Yup.object({
          matKhau: Yup.string()
            .required("Mật khẩu không được để trống!")
            .matches(
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
              "Vui lòng mật khẩu có chữ thường,chữ in hoa,số và kí tự đặc biệt!"
            ),
          email: Yup.string()
            .required("Email không được để trống!")
            .matches(
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              "Vui lòng nhập đúng dịnh dạng email!"
            ),
          soDt: Yup.string()
            .required("Số điện thoại không được để trống!")
            .matches(/^[0-9]+$/, "Vui lòng nhập số điện thoại hợp lệ!"),
          hoTen: Yup.string()
            .required("Họ tên không được để trống!")
            .matches(
              "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
              "Vui lòng không nhập số!"
            ),
          maLoaiNguoiDung: Yup.string()
            .required("Loại người dùng không được để trống!")
        }),
        onSubmit:(values) => {
            console.log(values)
            dispatch(actUpdateUser(values))
        } 
      })

      console.log(formik.errors.soDt)
    
      const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
    
      const handleChangeLoaiNguoiDung = (value) => {
        formik.setFieldValue('maLoaiNguoiDung',value)
      };

  return (
        <div className="container mt-3" style={{ backgroundColor: "white" }}>
      <ol className="breadcrumb mb-4 p-2">
        <li className="breadcrumb-item">
          <NavLink to="/admin">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink to="/admin/manage-user">Manage User</NavLink>
        </li>
        <li className="breadcrumb-item active">Edit User</li>
      </ol>

      <form className="text-black rounded py-3 text-center bg-white">
        <h2>Chỉnh sửa người dùng</h2>
      </form>

      <Form
        onSubmitCapture={formik.handleSubmit}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        // style={{
        //   maxWidth: 600,
        // }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="row">
          <div className="col-6">
            <Form.Item label="Tài khoản">
              <Input name="taiKhoan" onChange={formik.handleChange} value={formik.values.taiKhoan} disabled={true} />
            </Form.Item>

            <Form.Item label="Mật khẩu">
              <Input name="matKhau"  onChange={formik.handleChange} value={formik.values.matKhau} onBlur = {formik.handleBlur} />
              {formik.touched.matKhau && formik.errors.matKhau && (
                <p className="alert alert-danger mt-2 mb-0">
                  {formik.errors.matKhau}
                </p>
              )}
            </Form.Item>

            <Form.Item label="Họ tên">
              <Input name="hoTen"  onChange={formik.handleChange} value={formik.values.hoTen} onBlur = {formik.handleBlur}/>
              {formik.touched.hoTen && formik.errors.hoTen && (
                <p className="alert alert-danger mt-2 mb-0">
                  {formik.errors.hoTen}
                </p>
              )}
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item label="Email">
              <Input name="email"  onChange={formik.handleChange}  value={formik.values.email} onBlur = {formik.handleBlur} />
              {formik.touched.email && formik.errors.email && (
                <p className="alert alert-danger mt-2 mb-0">
                  {formik.errors.email}
                </p>
              )}
            </Form.Item>

            <Form.Item label="Số điện thoại">
              <Input name="soDt" onChange={formik.handleChange} value={formik.values.soDt} onBlur={formik.handleBlur} />
              {formik.touched.soDt && formik.errors.soDt && (
                <p className="alert alert-danger mt-2 mb-0">
                  {formik.errors.soDt}
                </p>
              )}
            </Form.Item>

            <Form.Item label="Loại người dùng">
              <Select
                options={[
                {value:'GV',label:'Giáo vụ'},
                {value:'HV',label:'Học viên'}
                ]}
                onChange={handleChangeLoaiNguoiDung}
                placeholder="Chọn loại người dùng"
                value={formik.values.maLoaiNguoiDung}
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item style={{textAlign:"left",marginTop:"30px",marginLeft:"200px"}}>
          <Button type="submit" htmlType="submit" className="btn-warning me-3">
            Cập nhật
          </Button>
        </Form.Item>
        
      </Form>
    </div>
  )
}
