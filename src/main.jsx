import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "macro-css";
import "@mantine/core/styles.css";
import { router } from "./Router/Router";
import "./i18n";


import { AuthProvider } from "./context/auth-context.jsx";
import ScrollToTop from "./components/Navbar/ScrollToTop.jsx";
import { ModalsProvider } from "@mantine/modals";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <MantineProvider withGlobalStyles defaultColorScheme="light">
      <ModalsProvider>
        <RouterProvider router={router}>
          <ScrollToTop />
        </RouterProvider>
      </ModalsProvider>
    </MantineProvider>
  </AuthProvider>
);
