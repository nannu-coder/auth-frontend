import { useState } from "react";
import useAppContext from "../../Hooks/useContext";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const endpoint = "https://authentication-ten-orpin.vercel.app";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const { isLoading, setIsLoading } = useAppContext();
  const [msg, setMsg] = useState("");
  const query = useQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      if (password1 === password2) {
        const { data } = await axios.post(
          `${endpoint}/api/v1/auth/resetpassword`,
          {
            password: password1,
            token: query.get("token"),
            email: query.get("email"),
          },
          { withCredentials: true }
        );
        setMsg(data.msg);
      } else {
        toast.error("Password does not match");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="register-page">
      <div className="container">
        <div className="form-groups">
          <div className="login-title">
            <h1 className="auth-title">Change Password</h1>
          </div>

          {msg ? (
            <>
              <h2>Password Changed</h2>
              <h3>
                Please <Link to="/login">Login</Link>
              </h3>
            </>
          ) : (
            <form className="form-group" onSubmit={handleSubmit}>
              <input
                name="password1"
                onChange={(e) => setPassword1(e.target.value)}
                type="password"
                placeholder="Enter Your Password"
                className="custom-input"
                required
              />
              <input
                name="password2"
                onChange={(e) => setPassword2(e.target.value)}
                type="password"
                placeholder="Retype Your Password"
                className="custom-input"
                required
              />

              <button
                type="submit"
                className={`auth-btn reg`}
                disabled={isLoading ? true : false}
              >
                {isLoading ? "Please Wait..." : "Submit"}
              </button>
            </form>
          )}

          <div className="already mt-3">
            <Link to="/login">Login to Your Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
