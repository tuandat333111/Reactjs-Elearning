import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
} from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { actFetchCategoryCourse } from "../AddCoursePage/duck/action";
import { actUpdateCourse } from "./UpdateCourse/action";
import * as Yup from "yup";

export default function EditCoursePage() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [image, setImg] = useState("");
  const dispatch = useDispatch();
  const { categoryCourse } = useSelector((state) => state.addCourseReducer);
  const {error} = useSelector((state) => state.updatCourseReducer)
  const listUser = useSelector((state) => state.listUserReducer.data);

  const convertNguoiTao = () => {
    let listUserGV = listUser?.filter((user) => user.maLoaiNguoiDung === "GV");
    return listUserGV?.map((user, index) => {
      return { value: user.hoTen, label: user.hoTen };
    });
  };

  const renderNoti = () => {
    return (
      error && (
        <div className="alert alert-danger d-inline-block">{error.data}</div>
      )
    );
  };

  useEffect(() => {
    dispatch(actFetchCategoryCourse());
  }, []);

  const data = JSON.parse(localStorage.getItem("courseEdit"));
  // console.log(data)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: data.maKhoaHoc,
      tenKhoaHoc: data.tenKhoaHoc,
      moTa: data.moTa,
      luotXem: data.luotXem,
      danhGia: 10,
      hinhAnh: null,
      maNhom: "GP01",
      ngayTao: data.ngayTao,
      maDanhMucKhoaHoc: data.danhMucKhoaHoc.tenDanhMucKhoaHoc,
      taiKhoanNguoiTao: data.nguoiTao.hoTen,
    },
    validationSchema: Yup.object({
      tenKhoaHoc: Yup.string()
        .required("Tên học không được để  trống!")
        .min(3, "Mã khóa học phải trên 3 kí tự!"),
      moTa: Yup.string().required("Mô tả không được để trống!"),
      danhGia: Yup.string().required("Đánh giá không được để trống"),
      luotXem: Yup.string().required("Lượt xem không được để trống"),
      ngayTao: Yup.string().required("Ngày tạo không được để trống!"),
      maDanhMucKhoaHoc: Yup.string().required(
        "Danh mục khóa học không được để trống!"
      ),
      taiKhoanNguoiTao: Yup.string().required("Người tạo không được để trống!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      let formData = new FormData();
      for (let key in values) {
        if (key != "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh != null) {
            formData.append("file", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      dispatch(actUpdateCourse(formData));
    },
  });

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeDatePicker = (value) => {
    let ngayTao = dayjs(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayTao", ngayTao);
  };

  const handleChangetaiKhoanNguoiTao = (value) => {
    formik.setFieldValue("taiKhoanNguoiTao", value);
  };

  const handleChangeDanhMuc = (value) => {
    formik.setFieldValue("maDanhMucKhoaHoc", value);
  };

  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type === "image/png" ||
      file.type === "image/jpg"
    ) {
      await formik.setFieldValue("hinhAnh", file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImg(e.target.result);
      };
    }
  };

  return (
    <div className="container mt-3" style={{ backgroundColor: "white" }}>
      <ol className="breadcrumb mb-4 p-2">
        <li className="breadcrumb-item">
          <NavLink to="/admin">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink to="/admin/manage-course">Manage Course</NavLink>
        </li>
        <li className="breadcrumb-item active">Edit Course</li>
      </ol>

      <form className="text-black rounded py-3 text-center bg-white">
        <h2>Chỉnh sửa khóa học</h2>
        {renderNoti()}
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
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="row">
          <div className="col-6">
            <Form.Item label="Mã khóa học">
              <Input
                name="maKhoaHoc"
                onChange={formik.handleChange}
                value={formik.values.maKhoaHoc}
                disabled={true}
              />
            </Form.Item>

            <Form.Item label="Tên khóa học">
              <Input
                name="tenKhoaHoc"
                onChange={formik.handleChange}
                value={formik.values.tenKhoaHoc}
                onBlur={formik.handleBlur}
              />
              {formik.touched.tenKhoaHoc && formik.errors.tenKhoaHoc && (
                <p className="alert alert-danger mt-2 mb-0">
                  {formik.errors.tenKhoaHoc}
                </p>
              )}
            </Form.Item>

            <Form.Item label="Danh mục khóa học">
              <Select
                options={categoryCourse?.map((item, index) => {
                  return { value: item.maDanhMuc, label: item.tenDanhMuc };
                })}
                onChange={handleChangeDanhMuc}
                placeholder="Chọn danh mục khóa học"
                value={formik.values.maDanhMucKhoaHoc}
              />
            </Form.Item>

            <Form.Item label="Ngày tạo">
              <DatePicker
                format={"DD/MM/YYYY"}
                onChange={handleChangeDatePicker}
                defaultValue={dayjs(formik.values.ngayTao, "DD/MM/YYYY")}
              />
            </Form.Item>

            <Form.Item label="Mô tả">
              <Input
                name="moTa"
                onChange={formik.handleChange}
                value={formik.values.moTa}
                onBlur={formik.handleBlur}
              />
              {formik.touched.moTa && formik.errors.moTa && (
                <p className="alert alert-danger mt-2 mb-0">
                  {formik.errors.moTa}
                </p>
              )}
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item label="Đánh giá">
              <InputNumber
                onChange={handleChangeInputNumber("danhGia")}
                min={1}
                max={10}
                value={formik.values.danhGia}
                onBlur={formik.handleBlur}
                name="danhGia"
              />
              {formik.touched.danhGia && formik.errors.danhGia && (
                <p className="alert alert-danger mt-2 mb-0">
                  {formik.errors.danhGia}
                </p>
              )}
            </Form.Item>

            <Form.Item label="Lượt xem">
              <InputNumber
                onChange={handleChangeInputNumber("luotXem")}
                min={1}
                max={100}
                value={formik.values.luotXem}
                name="luotXem"
                onBlur={formik.handleBlur}
              />
              {formik.touched.luotXem && formik.errors.luotXem && (
                <p className="alert alert-danger mt-2 mb-0">
                  {formik.errors.luotXem}
                </p>
              )}
            </Form.Item>

            <Form.Item label="Người tạo">
              <Select
                options={convertNguoiTao()}
                onChange={handleChangetaiKhoanNguoiTao}
                placeholder="Chọn người tạo"
                value={formik.values.taiKhoanNguoiTao}
              />
            </Form.Item>

            <Form.Item label="Hình ảnh">
              <input
                type="file"
                onChange={handleChangeFile}
                accept="image/png,image/jpeg,image/gif,image,png"
              />
              <img
                className="my-2"
                alt=""
                src={image === "" ? data.hinhAnh : image}
                style={{ width: 200, height: 200 }}
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          style={{ textAlign: "left", marginTop: "30px", marginLeft: "200px" }}
        >
          <Button htmlType="submit" className="btn-warning me-3">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
