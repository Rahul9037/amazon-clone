import React from 'react';
import Logo from "../../Assets/images/amazonlogoblack.png";
import './Login.css';
import { useState } from 'react';
import { auth } from '../../Firebase/firebase';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onSignIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then( (auth) => {
            if(auth){
                history.replace('/');
            }
        })
        .catch(error => alert(error.message))
    }

    const onSignUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then( (auth) => {
            if(auth){
                history.replace('/');
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <img src={Logo} alt="amazonlogo" className="login__logo" />
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <h5>Passowrd</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit" className="login__signIn" onClick={onSignIn}>Sign In</button>
                    <p>By continuing, you agree to Amazon Clone Conditions of Use and Privacy Notice.</p>
                    <button type="submit" className="login__signUp" onClick={onSignUp}>Create Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
