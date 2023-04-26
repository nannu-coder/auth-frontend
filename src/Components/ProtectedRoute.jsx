import { Navigate, useLocation } from "react-router-dom";
import useAppContext from "../Hooks/useContext";

const ProtectedRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { isLoading, user } = useAppContext();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!isLoading && !user) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default ProtectedRoute;
