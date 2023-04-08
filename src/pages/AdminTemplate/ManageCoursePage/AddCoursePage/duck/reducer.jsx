import * as ActionType from "./types"

const initialState = {
    categoryCourse:null,
    courseAdded:null,
    error:null
    // danhSachNguoiDung:null,
}

const addCourseReducer = (state = initialState,action) => {
    switch (action.type) {
        case ActionType.CATEGORY_COURSE_SUCCESS:{
            state.categoryCourse = action.payload
            return {...state}
        }
        case ActionType.ADD_COURSE_SUCCESS:{
            state.courseAdded = action.payload
            return {...state}
        }
        case ActionType.ADD_COURSE_FAIL:{
            state.error = action.payload
            return {...state}
        }
        // case ActionType.LAYDANHSACHNGUOIDUNG_SUCCESS:{
        //     state.danhSachNguoiDung = action.payload
        //     return {...state}
        // }
        default:
            return {...state}
    }
}

export default addCourseReducer;