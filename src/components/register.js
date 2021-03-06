import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase.js'
import "../style/signup.css"

function SignUp(){

    const [email, setEmail]=useState('');
    const [Name, setName]=useState('');
    const [password, setPassword]=useState('');

    let history = useHistory();

    const register = (()=>{

        createUserWithEmailAndPassword(auth, email, Name, password).then(()=>{
            history.push("/home");
        }).catch((error)=>{
            console.log(error);
        })
        
    })

    return(
        <div className="container">

            <h1>Welcome</h1>
            <small>Manage Your Task Checklist Easly</small><br></br>
            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter your name and surname" onChange={(e)=>setName(e.target.value)}/><br></br>
            <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/><br></br>

            <button style={{width: "150px", height: "30px"}} onClick={register}>Sign-Up</button>
        </div>
    )
}

export default SignUp