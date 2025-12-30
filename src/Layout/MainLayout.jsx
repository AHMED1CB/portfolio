import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Particles from "../components/MainComponents/Particles/Particles";

export default () => {
  return (
    <>
      <Header />
      <Particles />
      <Box className="app-contents">
        <Outlet />
      </Box>

      <Footer />
    </>
  );
};
