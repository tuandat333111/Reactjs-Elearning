import React, { Fragment, useEffect, useState } from "react";
import { Table, Input, Button, Modal, Select, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { actRegisterCourse2 } from "./duck/action";
import { actCancelCourse2 } from "./duck/action";

export default function RegisterCourseModal(props) {
  const dispatch = useDispatch();

  const columnsListUserNotRegistered = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        } else return -1;
      },
      render: (text, user) => {
        return <Fragment>{user.taiKhoan}</Fragment>;
      },
      width: "5%",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        } else return -1;
      },
      render: (text, user) => {
        return <Fragment>{user.hoTen}</Fragment>;
      },
      width: "10%",
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, user) => {
        return (
          <Fragment>
            <Button
              onClick={() => {
                const newUserObj = {
                  maKhoaHoc: course.maKhoaHoc,
                  taiKhoan: user.taiKhoan,
                };
                console.log(newUserObj);
                dispatch(actRegisterCourse2(newUserObj));
              }}
              style={{ fontSize: "13px" }}
              className="text-success me-2"
              key={1}
            >
              Xác thực
            </Button>
            <Button
              key={2}
              style={{ fontSize: "13px", cursor: "pointer" }}
              className="text-danger"
              to="/"
              onClick={() => {
                const newUserObj = {
                  maKhoaHoc: course.maKhoaHoc,
                  taiKhoan: user.taiKhoan,
                };
                if (
                  window.confirm(
                    `Bạn có muốn hủy khóa học ${course.tenKhoaHoc} không?`
                  )
                ) {
                  dispatch(actCancelCourse2(newUserObj));
                }
              }}
            >
              Hủy
            </Button>
          </Fragment>
        );
      },
      width: "10%",
    },
  ];

  const columnsListUsersRegistered = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        } else return -1;
      },
      render: (text, user) => {
        return <Fragment>{user.taiKhoan}</Fragment>;
      },
      width: "20%",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        } else return -1;
      },
      render: (text, user) => {
        return <Fragment>{user.hoTen}</Fragment>;
      },
      width: "20%",
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, user) => {
        return (
          <Fragment>
            <Button
              key={3}
              style={{ fontSize: "13px", cursor: "pointer" }}
              className="text-danger"
              onClick={() => {
                const newUserObj = {
                  maKhoaHoc: course.maKhoaHoc,
                  taiKhoan: user.taiKhoan,
                };
                if (
                  window.confirm(
                    `Bạn có muốn hủy khóa học ${course.tenKhoaHoc} không?`
                  )
                ) {
                  dispatch(actCancelCourse2(newUserObj));
                }
              }}
            >
              Hủy
            </Button>
          </Fragment>
        );
      },
      width: "20%",
    },
  ];

  const course = props.course;
  const { listUserNotRegistered, listUserWaiting, listUserRegistered } =
    useSelector((state) => state.registerCourseByUserReducer);
  // console.log(course)

  const dataRegisteredUser = listUserRegistered;
  const dataWaitingUser = listUserWaiting;

  const onChange = (pagination, filters, sorter, extra) => {};

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const formik = useFormik({
    initialValues: {
      maKhoaHoc: "",
      taiKhoan: "",
    },
    onSubmit: (values) => {
      values.maKhoaHoc = course.maKhoaHoc;
      console.log(values);
      dispatch(actRegisterCourse2(values));
    },
  });

  const handleChangeNguoiDung = (value) => {
    formik.setFieldValue("taiKhoan", value);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <Modal
      title="Chọn người dùng"
      open={props.open}
      onOk={props.onOk}
      onCancel={props.onCancel}
    >
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
        {/* <Select
              options={listUserNotRegistered?.map((item, index) => {
                return { value: item.taiKhoan, label: item.taiKhoan };
              })}
              style={{ width: 300 }}
              onChange={handleChangeNguoiDung}
              placeholder="Tên người dùng"
              className="me-3"
            /> */}
        <Select
          style={{ width: 300 }}
          className="me-3"
          showSearch
          placeholder="Tên người dùng"
          optionFilterProp="children"
          onChange={handleChangeNguoiDung}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={listUserNotRegistered?.map((item, index) => {
            return { value: item.taiKhoan, label: item.taiKhoan };
          })}
        />
        <Button htmlType="submit" type="submit" className="btn-success col-3">
          Ghi danh
        </Button>
      </Form>
      <hr style={{ marginBottom: "10px" }} />
      <h6>Học viên chờ xác thực:</h6>
      <Table
        columns={columnsListUserNotRegistered}
        dataSource={dataWaitingUser}
        onChange={onChange}
        rowKey={"taiKhoan"}
        size={"small"}
        pagination={{
          defaultPageSize: 3,
          showSizeChanger: true,
          pageSizeOptions: ["3", "5", "10", "20"],
        }}
      />
      <hr />
      <h6>Học viên đã tham gia khóa học:</h6>
      <Table
        columns={columnsListUsersRegistered}
        dataSource={dataRegisteredUser}
        onChange={onChange}
        rowKey={"tenKhoaHoc"}
        size={"small"}
      />
    </Modal>
  );
}
