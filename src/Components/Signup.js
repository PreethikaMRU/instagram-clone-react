import "../styles/signup.scss";
import logo from "../images/Logo-Instagram.png";
import { useState } from "react";
import Login from "./Login";
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../Firebase/Firebase";

function Signup({handleLogin}){
    const [username,setUsername]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [log,setLog]=useState(false);

    const handleSignup = () => {
        
        createUserWithEmailAndPassword(auth,email,password)
        .then((authUser) => {
            updateProfile(authUser.user,{
                displayName:username,
            })
        })
        .catch((err) => alert(err.message));
        
    }
    const setLogin = (val) => {
        setLog(val);
    }
    return(
        <>
        {log?<Login handleLogin={handleLogin}/>:
        <div className="signupContainer">
            <div className="signupLogo">
                <img className="logo2" src={logo} alt="instagram logo" width="105px" height="60px"/>
            </div>
            <div className="signupform">
            <div className="Info">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required="required"></input>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required="required"></input>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required="required" minLength="6" ></input>
            </div>
            <div className="signupButton">
                <button onClick={() => handleSignup()} className={`${(username && email && password)?"notdisabled":"disabled"}`}>Sign up</button>
            </div>
            </div>
            <div className="loginButton">
                <button onClick={() => setLogin(true)}>Log in</button> 
            </div>
        </div>
        }
        </>
    );
}

export default Signup;