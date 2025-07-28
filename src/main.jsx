import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import "macro-css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        // fontFamily: "Inter, sans-serif",
        colorScheme: "light",
      }}
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
