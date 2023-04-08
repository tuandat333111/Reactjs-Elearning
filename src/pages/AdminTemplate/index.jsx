import React from "react";
import { Navigate, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import { Layout,Menu,theme } from "antd";
import {ReadOutlined,UserOutlined} from "@ant-design/icons"
import { NavLink } from "react-router-dom";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

// export default function AdminTemplate() {
//   const { Header, Content, Footer, Sider } = Layout;
//   const navigate = useNavigate()

//   function getItem(label, key, icon, children) {
//     return {
//       key,
//       icon,
//       children,
//       label,
//     };
//   }

//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout
//       style={{
//         minHeight: "100vh",
//       }}
//     >
//       <Sider>
//         <div className="p-2 logo">    
//             <img src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png" width={170} alt="" />
//         </div>
//         <Menu
//           onClick= {(item) => {
//             navigate(item.key)
//           }}
//           theme="dark"
//           defaultSelectedKeys={[]}
//           mode="inline"
//           items={[
//             {
//               label:"Quản lý người dùng",
//               // <NavLink to="/admin/manage-user">Quản lý người dùng</NavLink>,
//               key: "/admin/manage-user",
//               icon: <UserOutlined />,
//             },
//             {
//               label:"Quản lý khóa học",
//               // <NavLink to="/admin/manage-course">Quản lý khóa học</NavLink>,
//               key: "/admin/manage-course",
//               icon: <ReadOutlined />,
//             },
//           ]}
//         />
//       </Sider>
//       <Layout className="site-layout">
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         />
//         <Content
//           style={{
//             margin: "0 16px",
//           }}
//         >
//             <Outlet />
//         </Content>
//         <Footer
//           style={{
//             textAlign: "center",
//           }}
//         >
//           Project E-learning Cybersoft 2023
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// }

export default function AdminTemplate(){
  if (!localStorage.getItem("UserAdmin")){
    return <Navigate  replace to="/auth"/>
  }
  
  return (    
    <div>
    <Header />
    <div id="layoutSidenav">
      <Sidebar />
      <div id="layoutSidenav_content">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  </div>
  )
}