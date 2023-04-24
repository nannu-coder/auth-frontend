import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;
