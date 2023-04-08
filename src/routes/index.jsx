import { Route } from "react-router-dom";
import { lazy } from "react";
const routes = [
  {
    path: "",
    element: lazy(() => import("../pages/HomeTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../pages/HomeTemplate/HomePage")),
      },
      {
        path: "login",
        element: lazy(() => import("../pages/HomeTemplate/LoginPage")),
      },
      {
        path: "register",
        element: lazy(() => import("../pages/HomeTemplate/RegisterAccountPage")),
      },
      {
        path: "profile",      
        element: lazy(() => import("../pages/HomeTemplate/ProfilePage")),
      },
      {
        path: "detail-course/:id",        
        element: lazy(() => import("../pages/HomeTemplate/DetailCoursePage")),
        
      },
      {
        path: "list-course",
        element: lazy(() => import("../pages/HomeTemplate/ListCoursePage")),
      },
      {
        path: "find-course",
        element: lazy(() => import("../pages/HomeTemplate/FindCoursePage"))
      },
      {
        path: "list-course-bycategory/:id",
        element: lazy(() => import("../pages/HomeTemplate/ListCourseByCategory"))
      },
      {
        path: "edit",
        element: lazy(() => import("../pages/HomeTemplate/EditPage"))
      },
    ],
  },
  {
    path: "admin",
    element: lazy(() => import("../pages/AdminTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../pages/AdminTemplate/DashboardPage")),
      },
      {
        path: "manage-user",
        element: lazy(() => import("../pages/AdminTemplate/ManageUserPage")),
      },
      {
        path: "manage-user/add-user",
        element: lazy(() => import("../pages/AdminTemplate/ManageUserPage/AddUserPage")),
      },
      {
        path: "manage-user/edit-user/:id",
        element: lazy(() => import("../pages/AdminTemplate/ManageUserPage/EditUserPage")),
      },
      {
        path: "manage-course",
        element: lazy(() =>
          import("../pages/AdminTemplate/ManageCoursePage")
        ),
      },
      {
        path: "manage-course/add-course",
        element: lazy(() =>
          import("../pages/AdminTemplate/ManageCoursePage/AddCoursePage")
        ),
      },
      {
        path: "manage-course/edit-course/:id",
        element: lazy(() =>
          import("../pages/AdminTemplate/ManageCoursePage/EditCoursePage")
        ),
      },
    ],
  },
  {
    path: "auth",
    element: lazy(() => import("../pages/AdminTemplate/AuthPage")),
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={<item.element />}
              />
            );
          })}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export default renderRoutes;
