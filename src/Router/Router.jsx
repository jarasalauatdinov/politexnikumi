import { createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import PageLoader from "../components/PageLoader";
import Homepage from "../pages/Home/Homepage";
import Layout from "../components/Layout";
import { AuthProvider } from "../context/auth-context";

const Gallery = lazy(() => import("../pages/Home/Gallery/Gallery"));
const SeeGallery = lazy(() => import("../pages/Home/Gallery/SeeGallery"));
const Schoolpage = lazy(() => import("../pages/School/Schoolpage"));
const Lessonpage = lazy(() => import("../pages/Lesson/Lessonpage"));
const Educationpage = lazy(() => import("../pages/Education/Educationpage"));
const Rulespage = lazy(() => import("../pages/Rules/Rulespage"));
const Newspage = lazy(() => import("../pages/News/Newspage"));
const ReadNews = lazy(() => import("../pages/News/new/ReadNews"))
const Supportpage = lazy(() => import("../pages/Support/Supportpage"));
const Notfoundpage = lazy(() => import("../pages/NotFound/Notfoundpage"));

const Admin = lazy(() => import("../pages/Admin/admin/admin"));
const Users = lazy(() => import("../pages/Admin/admin/Users"));
const Position = lazy(() => import("../pages/Admin/admin/Position"));
const Rules = lazy(() => import("../pages/Admin/admin/Rules"));
const News = lazy(() => import("../pages/Admin/admin/News"));
const School = lazy(() => import("../pages/Admin/admin/School"));
const Album = lazy(() => import("../pages/Admin/admin/Album"));
const Document = lazy(() => import("../pages/Admin/admin/Document"));
const Employee = lazy(() => import("../pages/Admin/admin/Employee"));
const Value = lazy(() => import("../pages/Admin/admin/Value"));
const Club = lazy(() => import("../pages/Admin/admin/Club"));
const Faqs = lazy(() => import("../pages/Admin/admin/Faqs"));
const Schedule = lazy(() => import("../pages/Admin/admin/Schedule"));
const Information = lazy(() => import("../pages/Admin/admin/Information"));
const History = lazy(() => import("../pages/Admin/admin/History"));
const Target = lazy(() => import("../pages/Admin/admin/Target"));
const SchoolHours = lazy(() => import("../pages/Admin/admin/SchoolHours"));

const Login = lazy(() => import("../pages/Admin/auth/Login"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout />
    ),
    children: [
      {
        index: true,
        element: (
          <Homepage />
        ),
      },
      {
        path: "gallery",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: "gallery/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            <SeeGallery />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Schoolpage />
          </Suspense>
        ),
      },
      {
        path: "lessons",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Lessonpage />
          </Suspense>
        ),
      },
      {
        path: "education",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Educationpage />
          </Suspense>
        ),
      },
      {
        path: "rules",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Rulespage />
          </Suspense>
        ),
      },
      {
        path: "news",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Newspage />
          </Suspense>
        ),
      },
      {
        path: "news/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ReadNews />
          </Suspense>
        ),
      },
      {
        path: "support",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Supportpage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "admin",
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    children: [
      {
        path: "login",
        element: (
          <Login />
        ),
      },
      {
        path: 'app',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Admin />
          </Suspense>
        ),
        children: [
          { path: "school", element: <School /> },
          { path: "position", element: <Position /> },
          { path: "rule", element: <Rules /> },
          { path: "album", element: <Album /> },
          { path: "users", element: <Users /> },
          { path: "news", element: <News /> },
          { path: "employee", element: <Employee /> },
          { path: "document", element: <Document /> },
          { path: "value", element: <Value /> },
          { path: "club", element: <Club /> },
          { path: "faq", element: <Faqs /> },
          { path: "schoolhours", element: <SchoolHours /> },
          { path: "target", element: <Target /> },
          { path: "history", element: <History /> },
          { path: "information", element: <Information /> },
          { path: "schedule", element: <Schedule /> },
        ]
      },
    ],
  },
  { path: "*", element: <Notfoundpage /> },
]);
