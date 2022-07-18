import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase.js'
import "../style/login.css"


function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const login = (()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/home");
        }).catch(()=>{
            console.log();
            console.log('Wrong log in details');
        })

        
    })
    return(
        <div className="container">

            <h1>Welcome back</h1>
            <small>Manage Your Task Checklist Easily</small><br></br>

            <input type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/><br></br>
            <input type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}/><br></br>

            <button style={{width: "120px", height: "30px", textAlign: "left"}} onClick={login}>Login</button><br></br>

            <span>Forgot Password?</span> <span>
                <Link to="/forgotPassword">Reset your Password</Link>
                
            </span>
            <br></br>

            <span>Don't have an account?</span> <span>
                <Link to="/SignUp">Create an account here</Link>
                
            </span>
        </div>
    )
}

export default Login