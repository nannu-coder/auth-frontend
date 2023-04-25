import "../Components.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import useAppContext from "../../Hooks/useContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:5000";

const Login = () => {
  const [values, setValues] = useState({});
  const { setIsLoading, isLoading, saveUser } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // singnIn(values);
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${endpoint}/api/v1/auth/login`,
        values,
        {
          withCredentials: true,
        }
      );
      console.log(data);
      setIsLoading(false);
      saveUser(data);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      toast.error(error?.response?.data, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // const singnIn = async (user) => {
  //   setIsLoading(true);
  //   try {
  //     const { data } = await axios.post(`${endpoint}/api/v1/auth/login`, user);
  //     console.log(data);
  //     setIsLoading(false);
  //     saveUser(data);
  //     // navigate("/home");
  //   } catch (error) {
  //     setIsLoading(false);
  //     toast.error(error?.response?.data, {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   }
  // };

  return (
    <div className="login-page">
      <div className="container">
        <div className="form-groups">
          <div className="login-title">
            <h1 className="auth-title">Login to your account</h1>
            <p>
              Don&apos;t have an account?
              <Link to="/register">Sign Up Free</Link>
            </p>

            <div className="social-logo">
              <Link className="social-icon fb">
                <FaFacebookF size={22} />
              </Link>

              <Link className="social-icon twt">
                <FaTwitter size={22} />
              </Link>
              <Link className="social-icon lnk">
                <FaLinkedinIn size={22} />
              </Link>
              <Link className="social-icon ggl">
                <FaGoogle size={22} />
              </Link>
            </div>
          </div>
          <div className="or">
            <hr className="hror" />
            <p className="social-login-or">OR</p>
          </div>
          <form className="form-group" onSubmit={handleSubmit}>
            <input
              className="custom-input"
              type="text"
              placeholder="Enter Your Email"
              name="email"
              onChange={handleChange}
              required
            />
            <input
              className="custom-input"
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={handleChange}
              required
            />
            <div className="remember">
              <div className="remember-me">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="forgot">
                <Link to="/">Forgot Password</Link>
              </div>
            </div>
            <button
              disabled={isLoading ? true : false}
              className={`auth-btn log`}
            >{`${isLoading ? "Loading..." : "Sign In"}`}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
