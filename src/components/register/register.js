
import React, {useState} from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'

function Register() {
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: ""
    })

    const [pass, setPass] = useState("");

    const handleChange = (event) => {
      const {name, value} = event.target
      setUser({
        ...user,
        [name]: value
      })
    }

    const handleChangePass = (event) => {
      setPass(event.target.value)
    }


    const signup = (e) => {
      e.preventDefault();
        axios.post("http://localhost:5000/register", user)
        .then(res => alert(res.data.message));
    }

    return (
      <div className="login">
        <div className="formcard">
            <h1> Logo </h1>
            <div className='logintext'> Create New Account </div>
            <form onSubmit={signup}>
                <input type="text" name="name" placeholder='Name' value={user.name} onChange={handleChange} required/><br/>
                
                <input type="email" name="email" placeholder='Mail Id' value={user.email} onChange={handleChange} required/><br/>
                
                <input type="password" name="password" placeholder='Password' value={user.password} onChange={handleChange} required/><br/>
                
                <input type="password" name="pass" placeholder='Confirm Password' value={pass} onChange={handleChangePass} required/><br/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
      </div>
    );
}
  
export default Register;
  