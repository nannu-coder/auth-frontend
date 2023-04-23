import Input from "../Input";
import "../Components.css";

const Login = () => {
  return (
    <div className="container">
      <div className="form-groups">
        <form className="form-group" action="#">
          <Input type="text" placeholder="Enter Your Email" />
          <Input type="password" placeholder="Enter Your Password" />
        </form>
      </div>
    </div>
  );
};

export default Login;
