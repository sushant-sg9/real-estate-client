import "./login.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
   const [visible, setVisible] = useState(false);
   const pass = ()=>{
    setVisible(!visible)
   }
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
            type= {visible?"text":"password"}
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
        {!visible?<span onClick={()=>pass()} style={{position:"absolute",top:"9px",right:"15px"}}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <line x1="3" y1="3" x2="21" y2="21"></line>
   <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
   <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"></path>
</svg>   </span>:
<span  onClick={()=>pass()} style={{position:"absolute",top:"9px",right:"15px"}}>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="12" r="2"></circle>
   <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
</svg>
</span>}
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
