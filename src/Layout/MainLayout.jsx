import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Box } from "@mui/material";

export default () => {
  return (
    <>
      <Header />

      <Box className="app-contents">
        <Outlet />
      </Box>

      {/* Footer */}
    </>
  );
};
