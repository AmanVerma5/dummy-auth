import React, { useState } from "react";
import axios from "axios";

const SignUp=({setLoginStatus})=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    async function handleLogin(){
        if(username==='' || password===''){
            alert('Email or Password cannot be empty');
        }
        try{
            const response=await axios.post('https://dummyjson.com/auth/login',{username,password},{
                headers: { 'Content-Type': 'application/json' },
            })
            console.log(response.data)
            localStorage.setItem('id',response.data.id);
            setLoginStatus(true);
        }catch(error){
            console.log(error);
            alert("Wrong email or password");
        }
    }

    return(
        <div className="login-container">
            <div className="upper-section"></div>
            <div className="divider"></div>
            <div className="login">
                <div className="welcome-msg">Welcome back! 👋</div>
                <h1>Sign in to your account</h1>
                <div className="label">Your Username</div><br></br>
                <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}></input><br></br>
                <div className="label">Password</div><br></br>
                <input type="text" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
                <button type="submit" onClick={handleLogin}>Continue</button>
                <div className="forget-msg">Forget your password?</div>
            </div>
            <div className="account-creation">Don’t have an account? <span className="sign">Sign up</span></div>
        </div>
    )
}

export default SignUp