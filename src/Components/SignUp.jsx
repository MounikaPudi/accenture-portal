import React from "react";
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import "./LoginSignUp/LoginSignup.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "./AppContext";


export default function SignUp() {
  const navigate = useNavigate();
  function handleLogin() {
navigate("/login");
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
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className="submit-container">
          <div className="submit">
            <button className="button" onClick={handleLogin}> Register </button>
          </div>
        </div>
      </div>
    </div>
  );
}
