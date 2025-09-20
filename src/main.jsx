import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "./index.css";
import "macro-css";
import "@mantine/core/styles.css";
import "./i18n";

import { AuthProvider } from "./context/auth-context.jsx";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        defaultColorScheme="light"
      >
        <ColorSchemeScript />
        <ModalsProvider>
          <Notifications position="bottom-right" autoClose={5000} />
          <App />
        </ModalsProvider>
      </MantineProvider>
    </AuthProvider>
  </StrictMode>
);
