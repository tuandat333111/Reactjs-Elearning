import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Loader from '../_component/Loader';
import { actFetchListCourse } from './duck/action';
import Course from '../_component/Course';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { actFetchProfile } from '../ProfilePage/duck/action';
export default function ListCoursePage(){    
  const loading=useSelector((state)=>state.listCourseReducerHome.loading);
  const data=useSelector((state)=>state.listCourseReducerHome.data);
  const dispatch=useDispatch();
  const [page,setPage]=useState(1);  
  useEffect(()=>{
    dispatch(actFetchListCourse(page)); 
    dispatch(actFetchProfile());
    // eslint-disable-next-line
  },[page]);
  const renderPagination=()=>{
    let n=data?.totalPages;          
    let array=[];
    if(n){
        for(let i=0;i<n;i++){
            array[i]=i+1;
        }       
    } 
    return array?.map((id,i)=>{            
        return <li className={`${i+1===page?"active page-item":"text-dark page-item inactive"}`} key={id} onClick={()=>setPage(id)}><Link className="page-link">{`${id}`}</Link></li>
    })
  }    
  const renderCourse=()=>{      
    if(data){
      return data.items?.map((course)=>{
        return <Course key={course.maKhoaHoc} course={course}/>
      })
    }    
  }
  
  if(loading) return <Loader/>
  return (
    <div className='row'>
      <div className="d-flex justify-content-center mt-4">                
        <div className="container mt-3">
            <h1 className='text-center my-3'>DANH SÁCH CÁC KHOÁ HỌC</h1>
            <div className='row'>{renderCourse()}</div>
            <div className="d-flex justify-content-center mt-5">                               
              <ul className="pagination movie-page"> 
                  <li className="page-item"><Link className="page-link" onClick={()=>page===1?setPage(1):setPage(page-1)}>Trang trước</Link></li>
                  {renderPagination()}
                  <li className="page-item"><Link className="page-link" onClick={()=>page===data.totalPages?setPage(data.totalPages):setPage(page+1)}>Trang kế</Link></li>
              </ul>                    
            </div>               
        </div>            
      </div>          
    </div>
  )
}
