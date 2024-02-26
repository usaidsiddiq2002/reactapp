import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar';

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const nav = useNavigate();

  const handlesub = () => {
    if (username == "usaid" && password == "12345") {
      nav("/home");
      alert("login success");
    } else {
      nav("/");
      alert("Try agine");
      
    }
  };

  return (
    <>
      <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form class="login-form" onSubmit={handlesub}>
            <input
              type="text"
              placeholder="username"
              onChange={(event) => {
                setusername(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(event) => {
                setpassword(event.target.value);
              }}
            />
            <button>login</button>
            <p class="message">
              Not registered? <a href="/">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
