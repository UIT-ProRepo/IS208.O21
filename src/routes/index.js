/* eslint-disable no-lone-blocks */
import PrivateRoute from "../components/PrivateRoutes";
import Layout from "../layouts/LayoutUser";
import LayoutAdmin from "../layouts/LayoutAdmin/";
import Notification from "../pages/User/Notification/notification";
import Request from "../pages/User/Request/request";
import UserInfo from "../pages/User/UserInfo/userInfo";
import Error from "../pages/error/error";
import HomePage from "../pages/home-page";
import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard/dashboard";
import Logout from "../pages/login/logout";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "*",
        element: <Error />,
      },

      {
        element: <PrivateRoute />,
        children: [
          {
            path: "userInfo",
            element: <UserInfo />,
          },
          {
            path: "notification",
            element: <Notification />,
          },
          {
            path: "/request",
            element: <Request />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
];
