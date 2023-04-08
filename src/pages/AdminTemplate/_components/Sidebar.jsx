import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Quản Trị</div>
              <NavLink className="nav-link" to="manage-user">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt" />
                </div>
                Quản lí người dùng
              </NavLink>
              <NavLink className="nav-link" to="manage-course">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt" />
                </div>
                Quản lí khóa học
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
