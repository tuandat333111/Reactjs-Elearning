import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Table, Input, Button, Modal, Select, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  EditOutlined,
  DeleteOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { actDeleteCourse, actFetchListCourse } from "./duck/action";
import RegisterCourseModal from "./RegisterCourseModal";
import { actFetchListUserRegistered, actFetchListUserNotRegistered, actFetchListUserWaiting } from "./RegisterCourseModal/duck/action";
import { useMediaQuery } from "react-responsive";

export default function ManageCoursePage() {
  const largeScreen = useMediaQuery({ query: "(max-width:1280px)" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  const dispatch = useDispatch();
  const data = useSelector((state) => state.listCourseReducerAdmin.listCourse);
  const [course,setCourse] = useState({})

  useEffect(() => {
    dispatch(actFetchListCourse());
  }, []);

  // console.log(data);

  const columns = [
    {
      title: "Mã khóa học",
      dataIndex: "maKhoaHoc",
      sorter: (a, b) => {
        let maKhoaHocA = a.maKhoaHoc.toLowerCase().trim();
        let maKhoaHocB = b.maKhoaHoc.toLowerCase().trim();
        if (maKhoaHocA > maKhoaHocB) {
          return 1;
        } else return -1;
      },
      render: (text, course) => {
        return <Fragment>{course.maKhoaHoc}</Fragment>;
      },
      width: "15%",
    },
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
      render: (text, course) => {
        return <Fragment>{course.tenKhoaHoc}</Fragment>;
      },
      width: "20%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hoTen",
      render: (text, course) => {
        return (
          <Fragment>
            <img
              src={course.hinhAnh}
              alt={course.tenPhim}
              style={{ width: "70px" }}
              onError={(e) => {
                e.target.value = null;
                e.target.src = `https://picsum.photos/200`;
              }}
            />
          </Fragment>
        );
      },
      width: largeScreen ? "10%" : "20%",
    },
    {
      title: "Lượt xem",
      dataIndex: "luotXem",
      render: (text, course) => {
        return <Fragment>{course.luotXem}</Fragment>;
      },
      width: "15%",
    },
    {
      title: "Người tạo",
      dataIndex: "nguoiTao",
      render: (text, course) => {
        return <Fragment>{course.nguoiTao.hoTen}</Fragment>;
      },
      width: "15%",
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, course) => {
        return (
          <Fragment>
            <span
              key={3}
              className="text-warning me-3"
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick = {() => {
                // const newMaKhoaHocObj = new maKhoaHocObj()
                // newMaKhoaHocObj.maKhoaHoc = course.maKhoaHoc
                const newMaKhoaHocObj = {
                  maKhoaHoc:course.maKhoaHoc
                }
                showModal();
                setCourse(course)
                dispatch(actFetchListUserNotRegistered(newMaKhoaHocObj))
                dispatch(actFetchListUserWaiting(newMaKhoaHocObj))
                dispatch(actFetchListUserRegistered(newMaKhoaHocObj))
              }}
            >
              <FileAddOutlined />

            </span>
            <NavLink
              onClick={() => {
                localStorage.setItem("courseEdit", JSON.stringify(course));
              }}
              style={{ fontSize: "25px" }}
              className="text-success me-3"
              key={1}
              to={`edit-course/${course.maKhoaHoc}`}
            >
              <EditOutlined />
            </NavLink>
            <span
              key={2}
              style={{ fontSize: "25px", cursor: "pointer" }}
              className="text-danger me-3"
              to="/"
              onClick={() => {
                if (
                  window.confirm(
                    `Bạn có muốn xóa khóa học ${course.tenKhoaHoc} không?`
                  )
                ) {
                  dispatch(actDeleteCourse(course.maKhoaHoc));
                }
              }}
            >
              <DeleteOutlined />
            </span>
          </Fragment>
        );
      },
      width: "30%",
    },
  ];
  const dataTable = data;

  const onChange = (pagination, filters, sorter, extra) => {};

  const onChangeSearch = (e) => {
    dispatch(actFetchListCourse(e.target.value));
  }
  const onSearch = (value) => {
    console.log(value)
    dispatch(actFetchListCourse(value))
  };

  const { Search } = Input;

  return (
    <div className="container mt-3" style={{ backgroundColor: "white" }}>
      <ol className="breadcrumb mb-4 p-2">
        <li className="breadcrumb-item">
          <NavLink to="/admin">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item active">Manage Course</li>
      </ol>

      <form className="text-black rounded py-3 text-center bg-white">
        <h2>Quản lí Khóa học</h2>
        <NavLink to="add-course">
          <button className="btn btn-success my-3">Thêm mới khóa học</button>
        </NavLink>
      </form>

      <Search
        className="mb-3"
        placeholder="Search"
        onSearch={onSearch}
        onChange={onChangeSearch}
        enterButton
      />
      <Table
        columns={columns}
        dataSource={dataTable}
        onChange={onChange}
        rowKey={"maKhoaHoc"}
      />

      <RegisterCourseModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        course={course}
      />
    </div>
  );
}
