import * as ActionType from "./type";
const initialState={
    loading:false,
    data:null,
    error:null,
}
export const registerHomeReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionType.REGISTER_HOME_REQUEST:{
            state.loading=true;
            state.data=null;
            state.error=null;
            return {...state};
        }
        case ActionType.REGISTER_HOME_SUCCESS:{
            state.loading=false;
            state.data=action.payload;
            state.error=null;
            return {...state};
        }
        case ActionType.REGISTER_HOME_FAIL:{
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