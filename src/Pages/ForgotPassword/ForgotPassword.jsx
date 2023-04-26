import { Link } from "react-router-dom";
import useAppContext from "../../Hooks/useContext";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const endpoint = "https://authentication-ten-orpin.vercel.app";

const ForgotPassword = () => {
  const { isLoading, setIsLoading } = useAppContext();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const emailRef = useRef(null);

  const handleSubmit = async (e) => {
    const userMail = { email: email };
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${endpoint}/api/v1/auth/forgotPassword`,
        userMail,
        { withCredentials: true }
      );
      setMsg(data.msg);
      setIsLoading(false);
      emailRef.current.value = "";
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data);
    }
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="form-groups">
          <div className="login-title">
            <h1 className="auth-title">Forgot Password?</h1>
            {msg && <Alert variant="success">{msg}</Alert>}
          </div>

          <form className="form-group" onSubmit={handleSubmit}>
            <input
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter Your Email"
              className="custom-input"
              required
              ref={emailRef}
            />

            <button
              type="submit"
              className={`auth-btn reg`}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Please Wait..." : "Get Reset Password Link"}
            </button>
          </form>
          <div className="already mt-3">
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
