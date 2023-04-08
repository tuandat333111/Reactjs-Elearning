import React, { useState } from 'react'
import "./../LoginPage/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faKey,faFont,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchRegisterHome } from './duck/action'
import { useNavigate } from 'react-router-dom'
export default function RegisterPage() {
  const error=useSelector((state)=>state.registerHomeReducer.error);
  const dispatch=useDispatch();
  const navigate=useNavigate();  
  const [state,setState]=useState(
    {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "", 
      maNhom: "GP01",     
      email: ""
    }
  )
  const handleOnChange=(event)=>{
    const {name,value}=event.target;
    setState({...state,[name]:value})    
  }
  const handleOnSubmit=(event)=>{
    event.preventDefault();
    dispatch(actFetchRegisterHome(state,navigate));
    alert("Đăng ký thành công");   
       
    
  }
  
  const renderNotification = () => {
    return(
      error&&<div className="alert alert-danger text-center">{error}</div>
    )
  }   
  
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Đăng ký</h3>              
            </div>
            <div className="card-body">
              <form onSubmit={handleOnSubmit}>
                <div className="input-group form-group my-2">
                  <div className="input-group-prepend mx-1">
                    <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                  </div>
                  <div>
                    <input type="text" className="input-username text-center" name="taiKhoan" placeholder="Nhập tài khoản" required onChange={handleOnChange}/>
                  </div>                  
                </div>
                <div className="input-group form-group my-2">
                  <div className="input-group-prepend mx-1">
                    <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
                  </div>
                  <div>
                    <input type="password" className="input-password text-center" name="matKhau" placeholder="Nhập mật khẩu" required onChange={handleOnChange}/>
                  </div>                  
                </div>
                <div className="input-group form-group my-2">
                  <div className="input-group-prepend mx-1">
                    <span className="input-group-text"><FontAwesomeIcon icon={faFont} /></span>
                  </div>
                  <div>
                    <input type="text" className="input-username text-center" name="hoTen" placeholder="Nhập họ và tên" required onChange={handleOnChange}/>
                  </div>                  
                </div>
                <div className="input-group form-group my-2">
                  <div className="input-group-prepend mx-1">
                    <span className="input-group-text"><FontAwesomeIcon icon={faPhone} /></span>
                  </div>
                  <div>
                    <input type="number" className="input-username text-center" name="soDT" placeholder="Nhập số điện thoại" required onChange={handleOnChange}/>
                  </div>                  
                </div>
                <div className="input-group form-group my-2">
                  <div className="input-group-prepend mx-1">
                    <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                  </div>
                  <div>
                    <input type="email" className="input-username text-center" name="email" placeholder="Nhập email" required onChange={handleOnChange}/>
                  </div>                  
                </div>                  
                <div className="form-group">
                  <button className="btn btn-warning text-center d-block mx-auto" >Tạo tài khoản</button>
                </div>
              </form>
            </div>
            {renderNotification()}            
          </div>
        </div>
      </div>
    </div>
  )
}
