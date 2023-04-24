import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();
const endpoint = "http://localhost:5000";

const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async (user) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${endpoint}/api/v1/auth/register`,
        user
      );
      setIsLoading(false);
      toast.success(data.status, {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      setIsLoading(false);
      toast.error(error?.response?.data, {
        position: toast.POSITION.TOP_CENTER,
      });
      // console.log(error.response.data);
    }
  };

  return (
    <AppContext.Provider value={{ signUp, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
