/* eslint-disable no-lone-blocks */
import PrivateRoute from "../components/PrivateRoutes";
import Layout from "../layouts/LayoutDefault";
import Notification from "../pages/User/Notification/notification";
import Request from "../pages/User/Request/request";
import UserInfo from "../pages/User/UserInfo/userInfo";
import Error from "../pages/error/error";
import Login from "../pages/login/login";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "/request",
        element: <Request />,
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
                  element: <UserInfo />
              }
          ]
      },
    ],
  },
];

