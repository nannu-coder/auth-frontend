import { useEffect, useState } from "react";
import useAppContext from "../../Hooks/useContext";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// const endPoint = "http://localhost:5000";

const Verify = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isLoading } = useAppContext();
  const query = useQuery();

  const verifyToken = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `https://authentication-ten-orpin.vercel.app/api/v1/auth/verify`,
        {
          email: query.get("email"),
          verificationToken: query.get("token"),
        }
      );
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      verifyToken();
    }
  }, []);

  if (loading) {
    return (
      <h2 className="page">
        <h2>Loading...</h2>
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="page">
        <h4>There was an error, please double check your verification link </h4>
      </h2>
    );
  }

  return (
    <div>
      <h2>Account Confirmed</h2>
      <Link to="/login" className="btn">
        Please login
      </Link>
    </div>
  );
};

export default Verify;
