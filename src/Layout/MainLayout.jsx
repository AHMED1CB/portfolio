import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default () => {
  return (
    <>
      <Header />

      <Outlet />

      {/* Footer */}
    </>
  );
};
