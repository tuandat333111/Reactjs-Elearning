import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { actFetchProfile } from "./duck/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faKey,faFont,faPhone,faEnvelope,} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Loader from "../_component/Loader";
import Course from "../_component/Course";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { actFetchUpdateProfile } from "./duck/action";
import { NavLink } from "react-router-dom";
export default function ProfilePage() {
  const loading = useSelector((state) => state.profileHomeReducer.loading);
  const data =useSelector((state) => state.profileHomeReducer.data);
  // const error=useSelector((state) => state.profileUpdateHomeReducer.error);  
  const dispatch = useDispatch(); 

  useEffect(() =>{
    dispatch(actFetchProfile());   
  }, []);
  if(data){
    localStorage.setItem("Profile",JSON.stringify(data))
  }
  const localProfile=JSON.parse(localStorage.getItem("Profile"));
  
  const [profile,setProfile]=useState({
    taiKhoan: localProfile&&localProfile.taiKhoan,
    matKhau: localProfile&&localProfile.matKhau,
    hoTen: localProfile&&localProfile.hoTen,
    soDT: localProfile&&localProfile.soDT,
    maLoaiNguoiDung: localProfile&&localProfile.maLoaiNguoiDung,
    maNhom: "GP01",
    email:localProfile&&localProfile.email,
})
  
  const [disabled,setDisabled]=useState(true);
  const handleOnClickEdit=(e)=>{
    e.preventDefault()
    setDisabled(false);
    
  }
  const handleOnChange=(e)=>{
    const {name,value}=e.target;
    setProfile({...profile,[name]:value})
  }
  const handleOnClickUpdate=(e)=>{
    e.preventDefault()
    dispatch(actFetchUpdateProfile(profile));
    dispatch(actFetchProfile());
    setDisabled(true);
  }
  const renderCourse=()=>{
    return data&&data.chiTietKhoaHocGhiDanh.map((course)=>{
      return <Course key={course.maKhoaHoc} course={course} />
    })
  }  
  if (loading) return <Loader />;
  return (
    <div className="container my-5">
      <Tabs
      defaultActiveKey="info"
      id="uncontrolled-tab-example">
        <Tab eventKey="info" title="Thông tin học viên">
          <div className="card-body">
            <form className="d-block">
              <div className="mx-auto form-info">
                <div className="input-group form-group my-2 d-flex">
                  <div
                    className="input-group-prepend mx-1"
                    style={{ width: "55px" }}
                  >
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <div>
                    <input className="text-warning info-input px-1" value={profile&&profile.taiKhoan} name="taiKhoan" disabled/>            
                  </div>
                </div>
                <div className="input-group form-group my-2">
                  <div
                    className="input-group-prepend mx-1"
                    style={{ width: "55px" }}
                  >
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faKey} />
                    </span>
                  </div>
                  <div>
                    <input className="text-warning info-input px-1" value={profile&&profile.matKhau} name="matKhau" disabled={disabled} onChange={handleOnChange} required/>
                  </div>
                </div>
                <div className="input-group form-group my-2">
                  <div
                    className="input-group-prepend mx-1"
                    style={{ width: "55px" }}
                  >
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faFont} />
                    </span>
                  </div>
                  <div>
                    <input className="text-warning info-input px-1" value={profile.hoTen&&profile.hoTen} name="hoTen" disabled={disabled} onChange={handleOnChange} required/>
                  </div>
                </div>
                <div className="input-group form-group my-2">
                  <div
                    className="input-group-prepend mx-1"
                    style={{ width: "55px" }}
                  >
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                  </div>
                  <div>
                    <input className="text-warning info-input px-1" value={profile.soDT&&profile.soDT} name="soDT" disabled={disabled} onChange={handleOnChange} required/>

                  </div>
                </div>
                <div className="input-group form-group my-2">
                  <div
                    className="input-group-prepend mx-1"
                    style={{ width: "55px" }}
                  >
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                  <div>
                  <input className="text-warning info-input px-1" value={profile.email&&profile.email} name="email" disabled={disabled} onChange={handleOnChange} required/>

                  </div>
                  
                </div>
              </div>            
              <div className="edit-button">
                <NavLink className="btn btn-warning d-block mx-auto my-2" onClick={handleOnClickEdit}>
                  Thay đổi thông tin
                </NavLink>
                <button className="btn btn-success d-block mx-auto " onClick={handleOnClickUpdate}>
                  Cập nhật
                </button>
              </div>
            </form>          
          </div>
        </Tab>
        <Tab eventKey="course" title="Thông tin khoá học">
          <div className="row px-4 py-2">
            {renderCourse()}
          </div>
        </Tab>        
      </Tabs>
    </div>
    
    
  );
}

