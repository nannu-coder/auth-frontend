import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";
import ContextProvider from "./Context/AppContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ContextProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </ContextProvider>
    </>
  );
}

export default App;
