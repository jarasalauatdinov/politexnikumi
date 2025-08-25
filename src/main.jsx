import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "macro-css";
import "@mantine/core/styles.css";
import { router } from "./Router/Router";
import "./i18n";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider withGlobalStyles defaultColorScheme="light">
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>
);
