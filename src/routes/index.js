/* eslint-disable no-lone-blocks */
import PrivateRoute from "../components/PrivateRoutes";
import Layout from "../layouts/LayoutUser";
import LayoutAdmin from "../layouts/LayoutAdmin/";
import Error from "../pages/error/error";
import HomePage from "../pages/home-page";
import Login from "../pages/login/login";
import Dashboard from "../pages/Admin/dashboard/dashboard";
import Logout from "../pages/login/logout";
import UserInfo from "../pages/User/UserInfo/userInfo";
import Scheduled from "../pages/User/MeetingSheduled";
import RequestUser from "../pages/User/Request";
import Dispatch from "../pages/Admin/dispatch/dispatch";
import LayoutReviewer from "../layouts/LayoutReviewer/index";
import Review from "../pages/request-review/requestReview";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
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
            path: "/",
            element: <HomePage />,
          },
          {
            path: "meeting-scheduled",
            element: <Scheduled />,
          },
          {
            path: "userInfo",
            element: <UserInfo />,
          },
          {
            path: "/request",
            element: <RequestUser />,
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
          {
            path: "homepage",
            element: <HomePage />,
          },
          {
            path: "dispatch",
            element: <Dispatch />,
          },
        ],
      },
    ],
  },
  {
    path: "/reviewer",
    element: <LayoutReviewer />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "homepage",
            element: <HomePage />,
          },
          {
            path: "meeting-scheduled",
            element: <Scheduled />,
          },
          {
            path: "userInfo",
            element: <UserInfo />,
          },
          {
            path: "reviewRequest",
            element: <Review />,
          }
        ]
      }
    ],
  },
];
