import React from "react";
import "./App.css";
import "./assets/css/globals.css";
import { CssBaseline } from "@mui/material";
import { useRoutes } from "react-router-dom";
import Router from "./routes/Router";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const routing = useRoutes(Router);
  return (
    <ThemeProvider>
      <CssBaseline />
      <div className="App">{routing}</div>
    </ThemeProvider>
  );
}

export default App;
