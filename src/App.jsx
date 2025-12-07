import { Route, Routes } from "react-router-dom";
import "./assets/css/main.css";
import MainLayout from "./Layout/MainLayout";
import About from "./components/About/About";
import { CssBaseline, ThemeProvider } from "@mui/material";
import themes from "../App/Theme";
import { useState } from "react";
import ThemeContext from "../App/contexts/ThemeContext";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  const [theme, setTheme] = useState(localStorage.theme ?? "light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme]}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
