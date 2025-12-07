import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";

import { useContext } from "react";
import ThemeContext from "../../../App/contexts/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";

import HeadLogo from "../../assets/images/head-logo.svg";
export default () => {
  const navigationLinks = [
    {
      name: "About",
      path: "/",
      icon: <PersonIcon />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <ViewComfyIcon />,
    },
    {
      name: "Skills",
      path: "/skills",
      icon: <CodeIcon />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <EmailIcon />,
    },
  ];

  const { theme, setTheme } = useContext(ThemeContext);
  const go = useNavigate();

  const { pathname } = useLocation();

  return (
    <AppBar position="static" className="header">
      <Container className="HeaderContainer">
        <Box className="logo">
          <Avatar src={HeadLogo} alt="Logo" />
          <span className="text">Ahmed Hassan</span>
        </Box>

        <Toolbar className="nav-links">
          <Box className="links">
            {navigationLinks.map((link) => {
              return (
                <Button
                  key={link.name}
                  className={`${link.path == pathname ? "active" : ""}`}
                  startIcon={link.icon}
                  onClick={() => go(link.path)}
                >
                  {link.name}
                </Button>
              );
            })}
          </Box>
        </Toolbar>

        <Box className="more-buttons">
          <IconButton
            color="text"
            onClick={() => {
              setTheme(theme == "light" ? "dark" : "light");
              localStorage.theme = theme == "light" ? "dark" : "light";
            }}
          >
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};
