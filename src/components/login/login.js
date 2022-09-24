import "./login.css";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

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
      .post(`${process.env.REACT_APP_API_URL}/login`, user)
      .then((res) => {
        if(res.data.status === true) {
        alert("Successfully Logged In");
        localStorage.setItem("token", res.data.token);
        console.log("userDta", res.data.user);
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("id", res.data.user.id);
        navigate("/properties");
      } else {
        alert(res.data.message);
      }
      })
      .catch((err) => {
        alert("Error Occured. Details are in console");
        console.log(err.message);
      });
  };

  return (
    <div className="WholeLogin">
      <div className="login">
        <div className="formcard">
          <h1> Logo </h1>
          <div className="logintext">
            {" "}
            Enter your credentials to access your account{" "}
          </div>
          <form>
            <input
              type="email"
              name="email"
              placeholder="User Id"
              value={user.email}
              onChange={handleChange}
              required
            />
            <br />
            {" "}
        <input
          placeholder="Password"
          name="password"
          type={passwordShown ? "text" : "password"}
          
        />
        <i onClick={togglePasswordVisiblity}>{eye}</i>{" "}
            <br />
            <Link to="/">
              {" "}
              <button className="login-btn" onClick={signin}>
                {" "}
                Sign in{" "}
              </button>{" "}
            </Link>
          </form>
          <div className="newuser">
            <div className="signup">
              <a href="/register">Sign Up </a>
            </div>
          </div>
        </div>
      </div>
      <div className="signrep">
        Don't have an Account?{" "}
        <span className="signup">
          {" "}
          <a href="/register">Sign Up </a>
        </span>{" "}
      </div>
    </div>
  );
}

export default Login;
