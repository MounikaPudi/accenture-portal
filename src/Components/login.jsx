import React, { useContext } from "react";
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import "./LoginSignUp/LoginSignup.css";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
 

  function handleLogin() {
    navigate("/home");
  }

  function handleSign() {
    navigate("/signup");
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">
          Accenture Internal Resource Allocation Portal
        </div>
        <div className="underline"></div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className="forgot-password">
          Forgot Password?<span>Click here!</span>
        </div>

        <div className="forgot-password">
          New User?<span onClick={handleSign}>Register here!</span>
        </div>

       
        <div className="submit-container">
          <div className= "submit">
            <button className="button" onClick={handleLogin}> Sign in </button>
          </div>
        </div>
      </div>
    </div>
  );
}
