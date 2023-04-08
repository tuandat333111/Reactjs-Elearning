import * as ActionType from "./types"

const initialState = {
    listCourse:null,
    courseDeleted:null,
}

const listCourseReducerAdmin = (state = initialState,action) => {
    switch (action.type) {
        case ActionType.LIST_COURSE_SUCCESS:{
            state.listCourse = action.payload
            return {...state}
        }
        case ActionType.DELETE_COURSE_SUCCESS:{
            state.courseDeleted = action.payload
            return {...state}
        }
        default:
            return {...state}
    }
}

export default listCourseReducerAdmin;