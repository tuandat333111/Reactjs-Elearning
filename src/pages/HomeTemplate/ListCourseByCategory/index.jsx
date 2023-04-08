import React from 'react'
import { actFetchListCourseByCategory } from './duck/action';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Course from '../_component/Course';
import Loader from '../_component/Loader';
import { useParams } from 'react-router-dom';
import "../_component/Course/style.css";
import { actFetchProfile } from '../ProfilePage/duck/action';
export default function ListCourseByCategory() {
    const params=useParams();
    const loading=useSelector((state)=>state.listCourseByCategoryReducer.loading);
    const data=useSelector((state)=>state.listCourseByCategoryReducer.data);
    const dispatch=useDispatch();       
    useEffect(()=>{
      dispatch(actFetchListCourseByCategory(params.id)); 
      dispatch(actFetchProfile());
      // eslint-disable-next-line
    },[params.id]);
    const renderCourse=()=>{
        return data?.map((course)=>{
            return <Course key={course.maKhoaHoc} course={course}/>
        })
    };
    const renderCategoryTitle=()=>{
        switch(params.id){
            case "TuDuy":{
                return "Tư duy lập trình";
            }
            case "BackEnd":{
                return "Lập trình Backend";
            }
            case "Design":{
                return "Thiết kế Web";
            }
            case "DiDong":{
                return "Lập trình di động";
            }
            case "FrontEnd":{
                return "Lập trình Front end";
            }
            case "FullStack":{
                return "Lập trình Full Stack";
            }
            default:{
                return "";
            }
        }
    }    
    if(loading) return <Loader/>
    return (
      <div className='row'>
        <div className="d-flex justify-content-center mt-4">                
          <div className="container mt-3">
              <h1 className='text-center my-3' style={{"textTransform":"uppercase"}}>Các khoá học {renderCategoryTitle()}</h1>
              <div className='row'>{renderCourse()}</div>                          
          </div>            
        </div>          
      </div>
    )
}
