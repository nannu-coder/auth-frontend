import Input from "../Input";
import "../Components.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const Login = () => {
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
          <form className="form-group" action="#">
            <Input type="text" placeholder="Enter Your Email" />
            <Input type="password" placeholder="Enter Your Password" />
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
            <button className="auth-btn log">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
