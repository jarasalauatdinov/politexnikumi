import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import "./index.css";
import "macro-css";
import "@mantine/core/styles.css";
import "./i18n";

import { AuthProvider } from "./context/auth-context.jsx";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import App from "./App.jsx";

import { createTheme } from "@mantine/core";

function Main() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  const theme = createTheme({
    colorScheme,
  });

  return (
    <>
      <ColorSchemeScript />
      <MantineProvider theme={theme}>
          <ModalsProvider>
            <Notifications position="bottom-right" autoClose={5000} />
            <App toggleColorScheme={toggleColorScheme} />
          </ModalsProvider>
      </MantineProvider>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
