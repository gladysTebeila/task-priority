import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./style/login.css"

function Login()
{

const[email, setEmail]=useState('');
const[password, setPassword]=useState('');

const login = () => {
    
}

return(
    <div>
        <div className="detail">
        <h1>Welcome Back</h1>
        <small>Manage your task checklist easily</small><br></br><br></br>
        <input type={email} placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)}></input><br></br>
        <input type={password} placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)}></input><br></br>
        <button onClick={login}>Login</button>
       
        </div>
        <div className="img">
            <img src="./photo/use.j" alt=""></img>
        </div>
       
       <Link to="/register">Register</Link>
    
       
    </div>
)
}
export default Login;