import "./login.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
   
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const signin = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.baseUrl}/login`, user)
      .then((res) => alert(res.data.message));
  };

  return (
    <div className="login">
      <div className="formcard">
        <h1> Logo </h1>
        <div className="logintext">
          {" "}
          Enter your credentials to access your account{" "}
        </div>
        <form onSubmit={signin}>
          <input
            type="email"
            name="email"
            placeholder="User Id"
            value={user.email}
            onChange={handleChange}
            required
          />
          <br />
          <div style={{position:"relative"}}>
            
          <input
            type= "password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
          </div>
          <br />
          <Link to="/">
            {" "}
            <button type="submit"> Sign in </button>{" "}
          </Link>
        </form>
        <div className="newuser">
          <div className="signup"> Sign Up </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
