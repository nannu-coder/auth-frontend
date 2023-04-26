import { useState } from "react";
import useAppContext from "../../Hooks/useContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const { isLoading, setIsLoading } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (password1 === password2) {
      } else {
        toast.error("Password does not match");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="register-page">
      <div className="container">
        <div className="form-groups">
          <div className="login-title">
            <h1 className="auth-title">Change Password</h1>
          </div>

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
          <div className="already mt-3">
            <Link to="/login">Login to Your Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
