import React from "react";
import axios from "axios";
import { useState } from "react";

const Singup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const add = () => {
    const id = Math.round(Math.random() * 1000);
    axios
      .post("http://localhost:8080/user", {
        id: id,
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        console.log("success");
      });
  };

  return (
    <div>
      <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>SIGNUP</h3>
              <p>Please Create your Account </p>
            </div>
          </div>
          <form class="login-form">
            <input
              type="text"
              placeholder="username"
              onChange={(event) => {
                setname(event.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setemail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(event) => {
                setpassword(event.target.value);
              }}
            />
            <button onClick={add}>Signup</button>
            <p class="message">
              registered? <a href="/">Login your account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
