import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import PageLoader from "../components/loader/PageLoader";

const Layout = lazy(() => import("../components/Layout"));

const Homepage = lazy(() => import("../pages/Home/Homepage"));
const Gallery = lazy(() => import("../pages/Home/Gallery"));
const SeeGallery = lazy(() => import("../pages/Home/SeeGallery"));
const Schoolpage = lazy(() => import("../pages/School/Schoolpage"));
const Lessonpage = lazy(() => import("../pages/Lesson/Lessonpage"));
const Educationpage = lazy(() => import("../pages/Education/Educationpage"));
const Rulespage = lazy(() => import("../pages/Rules/Rulespage"));
const Newspage = lazy(() => import("../pages/News/Newspage"));
const ReadNews = lazy(() => import("../pages/News/new/ReadNews"))
const Supportpage = lazy(() => import("../pages/Support/Supportpage"));
const Notfoundpage = lazy(() => import("../pages/NotFound/Notfoundpage"));

const MissionVision = lazy(() => import("../pages/School/about-us/MissionVision"));
const OurHistory = lazy(() => import("../pages/School/about-us/OurHistory"));
const CoreValues = lazy(() => import("../pages/School/about-us/CoreValues"));

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
const GalleryAdmin = lazy(() => import("../pages/Admin/admin/Album"));
const Schedule = lazy(() => import("../pages/Admin/admin/Schedule"));
const Information = lazy(() => import("../pages/Admin/admin/Information"));
const History = lazy(() => import("../pages/Admin/admin/History"));
const Target = lazy(() => import("../pages/Admin/admin/Target"));
const SchoolHours = lazy(() => import("../pages/Admin/admin/SchoolHours"));

const Login = lazy(() => import("../pages/Admin/auth/Login"));
const Register = lazy(() => import("../pages/Admin/auth/register"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Homepage />
          </Suspense>
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
        children: [
          { index: true, element: <MissionVision /> },
          { path: "mission-vision", element: <MissionVision /> },
          { path: "our-history", element: <OurHistory /> },
          { path: "core-values", element: <CoreValues /> },
        ],
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
    path: "login",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "register",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "admin",
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
    ],
  },
  { path: "*", element: <Notfoundpage /> },
]);
