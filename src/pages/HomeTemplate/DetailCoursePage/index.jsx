import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actFetchDetailCourse } from "./duck/action";
import Loader from "../_component/Loader";
export default function DetailCoursePage() {
  const params = useParams();
  const loading = useSelector((state) => state.detailCourseReducer.loading);
  const data = useSelector((state) => state.detailCourseReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchDetailCourse(params.id));
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="row g-0 bg-body-secondary position-relative">
      <div className="col-md-6 mb-md-0 p-md-4">
        <img className="img-fluid img-thumbnail" src={data?.hinhAnh} style={{"width":"100%"}} alt="Detail-Image" />
      </div>
      <div className="col-md-6 p-4 ps-md-0">
        <h5 className="mt-0 text-center" style={{"textTransform":"uppercase"}}>{data?.tenKhoaHoc}</h5>
        <p style={{"textIndent":"3em","textAlign":"justify"}}>{data?.moTa}</p>  
        <p style={{"fontWeight":"bold","color":"red"}}>Lượt xem: {data?.luotXem}</p>      
      </div>
    </div>
  );
}
