import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const Main = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Main;
