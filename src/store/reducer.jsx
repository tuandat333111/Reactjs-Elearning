import {combineReducers } from "redux";
import listUserReducer from "../pages/AdminTemplate/ManageUserPage/ListUser/reducer"
import authLoginReducer from "../pages/AdminTemplate/AuthPage/duck/reducer";
import addUserReducer from "../pages/AdminTemplate/ManageUserPage/AddUserPage/duck/reducer";
import updateUserReducer from "../pages/AdminTemplate/ManageUserPage/EditUserPage/UpdateUser/reducer";
import listCourseReducerAdmin from "../pages/AdminTemplate/ManageCoursePage/duck/reducer";
import addCourseReducer from "../pages/AdminTemplate/ManageCoursePage/AddCoursePage/duck/reducer";
import updatCourseReducer from "../pages/AdminTemplate/ManageCoursePage/EditCoursePage/UpdateCourse/reducer";
import registerCourseReducer from "../pages/AdminTemplate/ManageUserPage/RegisterCourseModal/duck/reducer";
import registerCourseByUserReducer from "../pages/AdminTemplate/ManageCoursePage/RegisterCourseModal/duck/reducer";
import { courseMenuReducer } from "../pages/HomeTemplate/_component/duck/reducer";
import { listCourseReducerHome } from "../pages/HomeTemplate/ListCoursePage/duck/reducer";
import { courseHomepageReducer } from "../pages/HomeTemplate/HomePage/duck/reducer";
import { detailCourseReducer } from "../pages/HomeTemplate/DetailCoursePage/duck/reducer";
import { listCourseByCategoryReducer } from "../pages/HomeTemplate/ListCourseByCategory/duck/reducer";
import { findCourseReducer } from "../pages/HomeTemplate/FindCoursePage/duck/reducer";
import { loginHomeReducer } from "../pages/HomeTemplate/LoginPage/duck/reducer";
import { registerHomeReducer } from "../pages/HomeTemplate/RegisterAccountPage/duck/reducer";
import { profileHomeReducer } from "../pages/HomeTemplate/ProfilePage/duck/reducer";
import { updateProfileHomeReducer } from "../pages/HomeTemplate/EditPage/duck/reducer";
const rootReducer = combineReducers({
    listUserReducer,
    authLoginReducer,
    addUserReducer,
    updateUserReducer,
    listCourseReducerAdmin,
    addCourseReducer,
    updatCourseReducer,
    registerCourseReducer,
    registerCourseByUserReducer,
    courseMenuReducer,
    listCourseReducerHome,
    courseHomepageReducer,
    detailCourseReducer,
    listCourseByCategoryReducer,
    findCourseReducer,loginHomeReducer,
    registerHomeReducer,
    profileHomeReducer,
    updateProfileHomeReducer,
})

export default rootReducer;