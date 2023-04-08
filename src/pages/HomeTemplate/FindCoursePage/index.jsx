import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actFetchFindCourse } from './duck/action';
import { actFetchProfile } from '../ProfilePage/duck/action';
import Loader from '../_component/Loader';
import Course from '../_component/Course';
export default function FindCoursePage() {
  const loading=useSelector((state)=>state.findCourseReducer.loading);
  const keyword=useSelector((state)=>state.findCourseReducer.keyword)
  const data=useSelector((state)=>state.findCourseReducer.data);
  const dispatch=useDispatch();  
  useEffect(()=>{
    // eslint-disable-next-line
    dispatch(actFetchFindCourse());
    dispatch(actFetchProfile());
  },[]) 
  const renderFindCourseList=()=>{
    if(data&&keyword){
      const list=data.filter((u)=>{
        return u.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase())!==-1;
      })      
      return list?.map((course)=>{
        return <Course key={course.maKhoaHoc} course={course}/>
      })
    }
    else{
      return data?.map((course)=>{
        return <Course key={course.maKhoaHoc} course={course}/>
      })
    }    
  }
  const renderCourseCount=()=>{
    if(data&&keyword){
      const list=data.filter((u)=>{
        return u.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase())!==-1;
      })      
      return list?.length;
    }
    else{
      return data?.length;
    }    
  }
  if(loading)return <Loader/>
  return (
    <div className="d-flex justify-content-center mt-4">                
      <div className="container mt-3">
          <h1 className='text-center my-3' style={{"textTransform":"uppercase"}}>Có {renderCourseCount()} khoá học được tìm thấy</h1>
          <div className='row'>{renderFindCourseList()}</div>                          
      </div>            
    </div>      
  )
}
