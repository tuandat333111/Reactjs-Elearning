import React from "react";
export default function Loader() {
  return (
    <>
      <div className="d-flex justify-content-center align-content-center my-3">
        <button className="btn btn-warning">
          <span className="spinner-border spinner-border-sm"/> Loading
        </button>
      </div>
    </>
    
  );
}