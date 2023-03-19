import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'
const Login = () => {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault(); // It will let the page to not refresh
       
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/community")
        } catch (err) {
            console.log(err)
            setErr(true)
        }
    }
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Smart Farming</span>
                <span className="title">Sign in</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Log in</button>
                    {err && <span>Something went wrong!</span>}
                </form>
                <p>Don't you have an account?<Link to ="/community/register">Register</Link></p>
            </div>
        </div>
    )
}
export default Login;