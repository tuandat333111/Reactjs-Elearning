import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Table, Input, Button, Modal, Select, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { actDeletetUser, actFetchListUser } from "./ListUser/action";
import {
  EditOutlined,
  DeleteOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import RegisterCourseModal from "./RegisterCourseModal";
import {
  actFetchListCourseNotRegistered,
  actFetchListCourseRegistered,
  actFetchListCourseWaiting,
} from "./RegisterCourseModal/duck/action";
import { useMediaQuery } from "react-responsive";

export default function ManageUserPage() {
  const largeScreen = useMediaQuery({ query: "(max-width:1280px)" });
  const dispatch = useDispatch();
  const data = useSelector((state) => state.listUserReducer.data);
  const [user, setUser] = useState({});
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

  useEffect(() => {
    dispatch(actFetchListUser());
  }, []);
  // console.log(data);
  const columns = [
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
      width: largeScreen ? "5%" : "15%" ,
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      render: (text, user) => {
        return <Fragment>{user.matKhau}</Fragment>;
      },
      width: largeScreen ? "5%" : "15%",
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
      width: largeScreen ? "5%" : "15%",
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text, user) => {
        return <Fragment>{user.email}</Fragment>;
      },
      width: "15%",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      render: (text, user) => {
        return <Fragment>{user.soDt}</Fragment>;
      },
      width: largeScreen ? "5%" : "10%",
    },
    {
      title: "Mã loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      sorter: (a, b) => {
        let maLoaiNguoiDungA = a.maLoaiNguoiDung.toLowerCase().trim();
        let maLoaiNguoiDungB = b.maLoaiNguoiDung.toLowerCase().trim();
        if (maLoaiNguoiDungA > maLoaiNguoiDungB) {
          return 1;
        } else return -1;
      },
      render: (text, user) => {
        return <Fragment>{user.maLoaiNguoiDung}</Fragment>;
      },
      width: largeScreen ? "5%" : "10%",
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, user) => {
        return (
          <Fragment >
            <span
              key={3}
              onClick={() => {
                const taiKhoanObj = {
                  taiKhoan:user.taiKhoan
                }
                showModal();
                setUser(user);
                dispatch(actFetchListCourseNotRegistered(user.taiKhoan));
                dispatch(actFetchListCourseWaiting(taiKhoanObj));
                dispatch(actFetchListCourseRegistered(taiKhoanObj));
              }}
              className="text-warning me-3"
              style={{ fontSize: "25px", cursor: "pointer" }}
            >
              <FileAddOutlined />
            </span>
            <NavLink
              onClick={() => {
                localStorage.setItem("UserEdit", JSON.stringify(user));
              }}
              style={{ fontSize: "25px" }}
              className="text-success me-3"
              key={1}
              to={`edit-user/${user.taiKhoan}`}
            >
              <EditOutlined />
            </NavLink>
            <span
              key={2}
              style={{ fontSize: "25px", cursor: "pointer" }}
              className="text-danger me-3"
              to="/"
              onClick={() => {
                if (window.confirm(`Bạn có muốn xóa ${user.taiKhoan} không?`)) {
                  dispatch(actDeletetUser(user.taiKhoan));
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
    dispatch(actFetchListUser(e.target.value));
  }
  const onSearch = (value) => {
    dispatch(actFetchListUser(value));
  };
  const { Search } = Input;

  return (
    <div className="container mt-3" style={{ backgroundColor: "white" }}>
      <ol className="breadcrumb mb-4 p-2">
        <li className="breadcrumb-item">
          <NavLink to="/admin">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item active">Manage User</li>
      </ol>

      <form className="text-black rounded py-3 text-center bg-white">
        <h2>Quản lí Người dùng</h2>
        <NavLink to="add-user">
          <button className="btn btn-success my-3">Thêm mới người dùng</button>
        </NavLink>
      </form>

      <Search
        className="mb-3"
        placeholder="Search"
        onSearch={onSearch}
        enterButton
        onChange={onChangeSearch}
      />
      <Table
        columns={columns}
        dataSource={dataTable}
        onChange={onChange}
        rowKey={"taiKhoan"}
      />

      <RegisterCourseModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        user={user}
      />

    </div>
  );
}
