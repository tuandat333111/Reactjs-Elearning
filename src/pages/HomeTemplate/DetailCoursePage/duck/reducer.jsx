import * as ActionType from "./type";
const initialState={
    loading:false,
    data:null,
    error:null,
}
export const detailCourseReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionType.DETAIL_COURSE_REQUEST:{
            state.loading=true;
            state.data=null;
            state.error=null;
            return {...state};
        }
        case ActionType.DETAIL_COURSE_SUCCESS:{
            state.loading=false;
            state.data=action.payload;
            state.error=null;
            return {...state};
        }
        case ActionType.DETAIL_COURSE_FAIL:{
            state.loading=false;
            state.data=null;
            state.error=action.payload;
            return {...state};
        }
        default:{
            return{...state};
        }
    }
}