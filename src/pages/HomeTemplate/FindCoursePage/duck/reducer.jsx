import * as ActionType from "./type"
const initialState={
    loading:false,
    data:null,
    error:null,
    keyword:null,
}
export const findCourseReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionType.FIND_COURSE_REQUEST:{
            state.loading=true;
            state.data=null;
            state.error=null;
            return {...state};
        }
        case ActionType.FIND_COURSE_SUCCESS:{
            state.loading=false;
            state.data=action.payload;
            state.error=null;
            return {...state};
        }
        case ActionType.FIND_COURSE_FAIL:{
            state.loading=false;
            state.data=null;
            state.error=action.payload;
            return {...state};
        }
        case ActionType.FIND_COURSE_KEYWORD:{
            state.keyword=action.payload;
            return{...state};
        }
        default:{
            return{...state};
        }
    }
}