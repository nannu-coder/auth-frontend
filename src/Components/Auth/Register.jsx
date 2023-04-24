import { Link } from "react-router-dom";
import "../Components.css";
import { useState } from "react";

const Register = () => {
  const [data, setData] = useState({});

  const handleData = (event) => {
    event.preventDefault();
    const field = event.target.name;
    const value = event.target.value;
    const newData = { ...data };
    newData[field] = value;
    setData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="form-groups">
          <div className="login-title">
            <h1 className="auth-title">Sign up for free!</h1>
          </div>

          <form className="form-group" onSubmit={handleSubmit}>
            <input
              name="email"
              onChange={handleData}
              type="text"
              placeholder="Enter Your Email"
              className="custom-input"
              required
            />
            <input
              name="name"
              onChange={handleData}
              type="text"
              placeholder="Enter Your Full Name"
              className="custom-input"
              required
            />
            <input
              name="password"
              onChange={handleData}
              type="password"
              placeholder="Enter Your Password"
              className="custom-input"
              required
            />
            <div className="terms">
              <p>
                I agree to the <Link to="/">privacy policy</Link> and
                <Link to="/">terms of service</Link>.
              </p>
            </div>
            <button type="submit" className="auth-btn reg">
              Sign Up
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

export default Register;
