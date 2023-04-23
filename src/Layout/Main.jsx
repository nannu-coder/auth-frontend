import { Outlet } from "react-router-dom";
import NavBar from "../Components/Nav";

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Main;
