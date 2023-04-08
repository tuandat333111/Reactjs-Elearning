import React, { Fragment, useEffect, useState } from "react";
import { Table, Input, Button, Modal, Select, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { actCancelCourse, actFetchListCourseRegistered, actRegisterCourse } from "./duck/action";
import { actFetchListCourse } from "../../ManageCoursePage/duck/action";

export default function RegisterCourseModal(props) {
  const dispatch = useDispatch()


  const columnsListCourseWaiting = [
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
      sorter: (a, b) => {
        let tenKhoaHocA = a.tenKhoaHoc.toLowerCase().trim();
        let tenKhoaHocB = b.tenKhoaHoc.toLowerCase().trim();
        if (tenKhoaHocA > tenKhoaHocB) {
          return 1;
        } else return -1;
      },
      render: (text, course) => {
        return <Fragment>{course.tenKhoaHoc}</Fragment>;
      },
      width: "20%",
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, course) => {
        return (
          <Fragment>
            <Button
              onClick={() => {
                const newUserObj = {
                  maKhoaHoc:course.maKhoaHoc,
                  taiKhoan:user.taiKhoan
                }
                  dispatch(actRegisterCourse(newUserObj))
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
                  maKhoaHoc:course.maKhoaHoc,
                  taiKhoan:user.taiKhoan
                }
                if (window.confirm(`Bạn có muốn hủy khóa học ${course.tenKhoaHoc} không?`)) {
                  dispatch(actCancelCourse(newUserObj))
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

  const columnsListCoursRegistered = [
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
      sorter: (a, b) => {
        let tenKhoaHocA = a.tenKhoaHoc.toLowerCase().trim();
        let tenKhoaHocB = b.tenKhoaHoc.toLowerCase().trim();
        if (tenKhoaHocA > tenKhoaHocB) {
          return 1;
        } else return -1;
      },
      render: (text, course) => {
        return <Fragment>{course.tenKhoaHoc}</Fragment>;
      },
      width: "20%",
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, course) => {
        return (
          <Fragment>
            <Button
              key={3}
              style={{ fontSize: "13px", cursor: "pointer" }}
              className="text-danger"
              onClick={() => {
                const newUserObj = {
                  maKhoaHoc:course.maKhoaHoc,
                  taiKhoan:user.taiKhoan
                }
                if (window.confirm(`Bạn có muốn hủy khóa học ${course.tenKhoaHoc} không?`)) {
                  dispatch(actCancelCourse(newUserObj))
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

  const user = props.user;
  const { listCourseNotRegistered,listCourseWaiting,listCourseRegistered} = useSelector(
    (state) => state.registerCourseReducer
  );

  const dataRegisteredCourse = listCourseRegistered
  const dataWaitingCourse = listCourseWaiting

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
      values.taiKhoan = user.taiKhoan
      console.log(values);
      dispatch(actRegisterCourse(values))
    },
  });

  const handleChangeKhoaHoc = (value) => {
    formik.setFieldValue("maKhoaHoc", value);
  };

  return (
    <Modal
      title="Chọn khóa học"
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
            <Select
              options={listCourseNotRegistered?.map((item, index) => {
                return { value: item.maKhoaHoc, label: item.tenKhoaHoc };
              })}
              style={{ width: 300 }}
              onChange={handleChangeKhoaHoc}
              placeholder="Khóa học chưa ghi danh"
              className="me-3"
            />
          <Button
            htmlType="submit"
            type="submit"
            className="btn-success col-3"

          >
            Ghi danh
          </Button>


        </Form>
      <hr style={{ marginBottom: "10px" }} />
      <h6>Khóa học chờ xác thực:</h6>
      <Table
        columns={columnsListCourseWaiting}
        dataSource={dataWaitingCourse}
        onChange={onChange}
        rowKey={"index"}
        size={"small"}
      />
      <hr />
      <h6>Khóa học đã ghi danh:</h6>
      <Table
        columns={columnsListCoursRegistered}
        dataSource={dataRegisteredCourse}
        onChange={onChange}
        rowKey={"tenKhoaHoc"}
        size={"small"}
      />
    </Modal>
  );
}
