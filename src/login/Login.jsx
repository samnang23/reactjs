import React from "react";
import "./login.css";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="wrapper">
      <div>
        <div>
          <h2>Welcome Login!</h2>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
        </div>
        <div className="register-link">
          <p>
            Don`t have an account? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
