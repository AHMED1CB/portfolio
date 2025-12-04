import { Route, Routes } from "react-router-dom";
import "./assets/css/main.css";
import MainLayout from "./Layout/MainLayout";
import About from "./components/About/About";
import { CssBaseline, ThemeProvider } from "@mui/material";
import themes from "../App/Theme";
import { useState } from "react";
import ThemeContext from "../App/contexts/ThemeContext";
import Projects from "./components/Projects/Projects";

function App() {
  const [theme, setTheme] = useState(localStorage.theme ?? "light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme]}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<About />} />
            <Route path="projects" element={<Projects/>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
