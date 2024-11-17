import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Supports weights 200-800
import "@fontsource-variable/manrope";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
