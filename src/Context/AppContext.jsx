import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();
const endpoint = "http://localhost:5000";

const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const saveUser = (user) => {
    setUser(user);
  };

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

  const removeUser = () => {
    setUser(null);
  };

  const logoutUser = async () => {
    try {
      await axios.delete(`${endpoint}/api/v1/auth/logout`, {
        withCredentials: true,
      });
      removeUser();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${endpoint}/api/v1/users/me`, {
        withCredentials: true,
      });
      saveUser(data);
    } catch (error) {
      removeUser();
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{ signUp, isLoading, setIsLoading, user, saveUser, logoutUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
