import "../styles/login.scss";
import logo from "../images/Logo-Instagram.png";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Firebase/Firebase.js";

function Login({handleLogin}){
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const setLogin = () => {
        signInWithEmailAndPassword(auth,email,password).catch((err) => alert(err.message));
        handleLogin(true);
    }
    
    return(
        <div className="loginContainer">
            <div className="loginLogo">
                <img className="logo2" src={logo} alt="instagram logo" width="105px" height="60px"/>
            </div>
            <div className="form">
            <div className="loginInfo">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required="required"></input>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required="required"></input>
            </div>
            <div className="logButton">
                <button onClick={setLogin} className={`${(email && password)?"notdisabled":"disabled"}`}>Log in</button>
            </div>
            </div>
        </div>
    );
}

export default Login;