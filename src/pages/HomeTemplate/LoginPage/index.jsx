import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons'
import { useSelector,useDispatch } from "react-redux";
import { actFetchLoginHome } from "./duck/action";

export default function LoginPage() {
  const navigate=useNavigate();
  const error=useSelector((state)=>state.loginHomeReducer.error);
  const dispatch=useDispatch();
  const [account,setAccount]=useState({
    taiKhoan:"",
    matKhau:"",
  })
  
  const handleOnChange = (event) => {
    const {name,value} = event.target;
    setAccount({...account,[name]:value})    
  }

  const handleSubmit = (event) => {
      event.preventDefault() 
      dispatch(actFetchLoginHome(account,navigate)); 
           
  } 
  
  const renderNotification = () => {    
    return (
      error && (
        <div className="alert alert-danger d-block mx-auto my-3" style={{fontSize:"14px",width:"87%"}}>{error}</div>
      )
    );
  };
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Đăng nhập</h3>              
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="input-group my-2">
                  <div className="input-group-icon mx-1">
                    <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>                    
                  </div>
                  <div>
                    <input type="text" className="input-group-username text-center" name="taiKhoan" placeholder="Nhập tài khoản" onChange={handleOnChange} required />
                  </div>                 
                </div>
                <div className="input-group my-2">
                  <div className="input-group-icon mx-1">
                    <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
                  </div>
                  <div>
                    <input type="password" className="input-group-password text-center" name="matKhau" placeholder="Nhập mật khẩu" onChange={handleOnChange} required/>
                  </div>                
                  
                </div>                
                <div>
                  <button className="btn btn-warning text-center d-block mx-auto">Đăng nhập</button>
                </div>
                {renderNotification()}
              </form>
              
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center">
                Bạn đã có tài khoản chưa?<NavLink to="/register"> Đăng ký</NavLink>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
