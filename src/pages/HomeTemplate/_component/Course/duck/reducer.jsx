import * as ActionType from "./type";
const initialRegisterState={
    loading:false,
    data:null,
    error:null,
}
export const registerCourseHomeReducer=(state=initialRegisterState,action)=>{
    switch(action.type){
        case ActionType.REGISTER_COURSE_REQUEST:{
            state.loading=true;
            state.data=null;
            state.error=null;
            return{...state};
        }
        case ActionType.REGISTER_COURSE_SUCCESS:{
            state.loading=false;
            state.data=action.payload;
            state.error=null;
            return{...state};
        }
        case ActionType.REGISTER_COURSE_FAIL:{
            state.loading=false;
            state.data=null;
            state.error=action.payload;
            return{...state};
        }
        default:{
            return{...state};
        }
    }
}

const initialCancelState={
    loading:false,
    data:null,
    error:null,
}
export const cancelCourseHomeReducer=(state=initialCancelState,action)=>{
    switch(action.type){
        case ActionType.CANCEL_COURSE_REQUEST:{
            state.loading=true;
            state.data=null;
            state.error=null;
            return{...state};
        }
        case ActionType.CANCEL_COURSE_SUCCESS:{
            state.loading=false;
            state.data=action.payload;
            state.error=null;
            return{...state};
        }
        case ActionType.CANCEL_COURSE_FAIL:{
            state.loading=false;
            state.data=null;
            state.error=action.payload;
            return{...state};
        }
        default:{
            return{...state};
        }
    }
}