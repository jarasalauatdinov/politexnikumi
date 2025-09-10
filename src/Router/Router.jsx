import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";

import Homepage from "../pages/Home/Homepage";
import Newspage from "../pages/News/Newspage";
import Rulespage from "../pages/Rules/Rulespage";
import Schoolpage from "../pages/School/Schoolpage";
import Lessonpage from "../pages/Lesson/Lessonpage";
import Supportpage from "../pages/Support/Supportpage";
import Notfoundpage from "../pages/NotFound/Notfoundpage";
import Educationpage from "../pages/Education/Educationpage";

import MissionVision from "../pages/School/about-us/MissionVision";
import OurHistory from "../pages/School/about-us/OurHistory";
import CoreValues from "../pages/School/about-us/CoreValues";
import Newpage from "../pages/News/new/Newpage";

import Admin from "../pages/Admin/admin/admin";
import Users from "../pages/Admin/admin/Users";
import FAQ from "../pages/Admin/client/FAQ";
import History from "../pages/Admin/client/History";
import SchoolHours from "../pages/Admin/client/SchoolHours";
import Information from "../pages/Admin/client/Information";
import Vacancy from "../pages/Admin/client/Vacancy";
import Schedule from "../pages/Admin/client/Schedule";
import Target from "../pages/Admin/client/Target";
import Register from "../pages/Admin/auth/register";
import Position from "../pages/Admin/admin/Position";
import Login from "../pages/Admin/auth/Login";
import Rules from "../pages/Admin/admin/Rules";
import News from "../pages/Admin/admin/News";
import School from "../pages/Admin/admin/School";
import Album from "../pages/Admin/admin/Album";
import Main from "../pages/Admin/admin/Main";
import Document from "../pages/Admin/admin/Document";
import Employee from "../pages/Admin/admin/Employee";
import Value from "../pages/Admin/admin/Value";
import Club from "../pages/Admin/admin/Club";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,

  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "school",
        element: <School />,
      },
      {
        path: "position",
        element: <Position />
      },
      {
        path: "rule",
        element: <Rules />
      },
      {
        path: "Album",
        element: <Album />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "main",
        element: <Main />
      },
      {
        path: "employee",
        element: <Employee />,
      },
      {
        path: "school",
        element: <School />
      },
      {
        path: "document",
        element: <Document />,
      },
 
      {
        path: "value",
        element: <Value />,
      },
      {
        path: "club",
        element: <Club />,
      },
      {
        path: "FAQ",
        element: <FAQ />,
      },
      {
        path: "schoolhours",
        element: <SchoolHours />,
      },
      {
        path: "target",
        element: <Target />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "information",
        element: <Information />,
      },
      {
        path: "vacancy",
        element: <Vacancy />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
    ],
  },


  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/about",
        element: <Schoolpage />,
        children: [
          { index: true, element: <MissionVision /> },
          { path: "mission-vision", element: <MissionVision /> },
          { path: "our-history", element: <OurHistory /> },
          { path: "core-values", element: <CoreValues /> },
        ],
      },
      { path: "/lessons", element: <Lessonpage /> },
      { path: "/education", element: <Educationpage /> },
      { path: "/rules", element: <Rulespage /> },
      { path: "/news", element: <Newspage /> },
      { path: "news/:id", element: <Newpage /> },
      { path: "/support", element: <Supportpage /> },
    ],
  },
  { path: "*", element: <Notfoundpage /> },
]);
