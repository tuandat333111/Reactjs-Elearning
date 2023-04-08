import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actFetchUpdateProfile } from './duck/action';
import Loader from '../_component/Loader';
export default function EditPage() {
    const loading=useSelector((state)=>state.updateProfileHomeReducer.loading);
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(actFetchUpdateProfile());
    },[])
    
    if(loading) return <Loader/>
    return (
    <div>EditPage</div>
  )
}
