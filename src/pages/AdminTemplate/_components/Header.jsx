import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header(){
  const navigate = useNavigate()
 const user = JSON.parse(localStorage.getItem('UserAdmin'))
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <NavLink className="navbar-brand ps-3" to="">
      Trang Quản Trị
    </NavLink>
    <button
      className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
      id="sidebarToggle"
      href="#!"
    >
      <i className="fas fa-bars" />
    </button>
    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
    </form>
    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-user fa-fw" />
        </a>
        <ul
          style={{ left: "-200%", top: "75%" }}
          id="dropdownMenu"
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdown"
        >
          <li>
            <a className="dropdown-item" href="#!">
              Hi {user.taiKhoan}!
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" to="" onClick={() => {
              localStorage.clear()
              navigate("/")
            }}>
              Đăng xuất
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>    
  )
}

