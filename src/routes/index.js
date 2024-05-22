/* eslint-disable no-lone-blocks */
import PrivateRoute from "../components/PrivateRoutes";
import Layout from "../layouts/LayoutUser";
import LayoutAdmin from "../layouts/LayoutAdmin/";
import Request from "../pages/User/Request/request";
import Meeting from "../pages/User/MeetingSheduled/meeting";
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
            path: "meeting-scheduled",
            element: <Meeting />,
          },
          // {
          //   path: "notification",
          //   element: <Notification />,
          // },
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
