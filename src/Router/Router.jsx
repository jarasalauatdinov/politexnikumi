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
import Login from "../Login";

import Admin from "../pages/Admin/admin";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: 'users',
        element: <div>Users</div>
      },
      {
        path: 'album',
        element: <div>Album</div>
      },
      {
        path: "school",
        element: <div>School</div>
      }
    ]
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
