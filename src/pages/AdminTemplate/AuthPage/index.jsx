import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { actAuthLoginApi } from "./duck/action";

export default function AuthPage() {
  const [state,setState] = useState({taiKhoan:"",matKhau:""})
  const dispatch = useDispatch()  
  const error = useSelector(state => state.authLoginReducer.error)
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const {name,value} = e.target;
    setState({...state,[name]:value})
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(actAuthLoginApi(state,navigate))
  }

  const renderNoti = () => {
    return (
      error && (
        <div className="alert alert-danger">{error}</div>
      )
    );
  };

  if(localStorage.getItem("UserAdmin")) {
    return <Navigate replace to="/admin"/>
  } else if (localStorage.getItem("User")){
    alert ("Bạn không có quyền truy cập")
    return <Navigate repalce to="/"/>
  }

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Đăng nhập với</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f" />
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-linkedin-in" />
                </button>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Hoặc</p>
              </div>
              {renderNoti()}
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Nhập email hoặc tài khoản đúng định dạng"
                  name="taiKhoan"
                  onChange={handleOnChange}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email hoặc Tài khoản
                </label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-3">
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Nhập mật khẩu"
                  name="matKhau"
                  onChange={handleOnChange}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Mật khẩu
                </label>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Ghi nhớ đăng nhập
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Bạn quên mật khẩu?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={handleSubmit}
                >
                  Đăng nhập
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                 Bạn không có tài khoản?{" "}
                  <a href="#!" className="link-danger">
                    Đăng ký
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* Copyright */}
        <div className="text-white mb-3 mb-md-0">
          Project E-learning Cybersoft © 2023. All rights reserved.
        </div>
        {/* Copyright */}
        {/* Right */}
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        {/* Right */}
      </div>
    </section>
  );
}
