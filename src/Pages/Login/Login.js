import React, { useContext } from 'react'
import "./Login-style.css"
import imageLogin from './imageLogin.jpg'
import { AuthentificationTest } from '../../ProviderTest'
import { Link } from "react-router-dom"
import MainRouter from '../../MainRouter'


export default function Login() {
    localStorage.setItem("product", JSON.stringify([['']]));
    localStorage.setItem("navbarNumber", JSON.stringify(0));
    localStorage.setItem("isActive", JSON.stringify(false));
    localStorage.setItem("Username", JSON.stringify(''));

    const { autentification, setAutentification } = useContext(AuthentificationTest)


    function SetActive() {
        localStorage.setItem("isActive", JSON.stringify(true));
    }
    
    function ChangeUsername(e) {
        localStorage.setItem("Username", e.target.value );
    }

    return (

        <div className="Login">

            <form>
                <h1>Connexion</h1>
                <img src={imageLogin} alt="Connexion" /> <br />
                <label>Username</label>
                <input type='text' placeholder="Enter Username" required onChange={ChangeUsername} />
                <label >Password</label>
                <input type="password" placeholder="Enter Password" required />
                <input type="Checkbox" />Remember me
              <Link to={`/home`}  >
                    <button className="buttonLogin" onClick={SetActive} >Login </button>
                </Link>
                <div className="Bottom">
                    <span className="psw">Forgot <a href="#">password?</a></span>
                    <span className="createAccount">create <a href="/Sign-Up">account</a></span>
                </div>
            </form>
        </div>
    )
}