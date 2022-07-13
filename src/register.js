import React, {useState} from "react";


function Register()
{
    const [names, setNames]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    return(
        <div>
            <div>
            <h1>Welcome</h1>
            <small>Manage You Task Checklist Easily</small>
            <input type={names} placeholder="Enter your full name" onChange={(e) => setNames(e.target.value)}></input><br></br>
            <input type={email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)}></input><br></br>
            <input type={password} placeholder="Password" onChange={(e)=> setPassword(e.target.value)}></input><br></br>
            </div>
            
        </div>
    )

}
export default  Register;