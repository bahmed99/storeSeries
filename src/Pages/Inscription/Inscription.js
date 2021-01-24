import React from 'react'
import {Link} from "react-router-dom"
import './Inscription.style.css'
export default function Inscription() {
    return (
            <div className="form-style-10">
                <h1>Sign Up Now!</h1>
                <form>
                    <div className="section"><span>1</span>First Name et Address</div>
                    <div className="inner-wrap">
                        <label>Username<input type="text" name="field1" required /></label>
                        <label>Address <textarea name="field2" required ></textarea></label>
                    </div>

                    <div className="section"><span>2</span>Email et Phone</div>
                    <div className="inner-wrap">
                        <label>Email Address <input type="email" name="field3" required /></label>
                        <label>Phone Number <input type="text" name="field4" required /></label>
                    </div>

                    <div className="section"><span>3</span>Passwords</div>
                        <div className="inner-wrap">
                        <label>Password <input type="password" name="field5" required /></label>
                        <label>Confirm Password <input type="password" name="field6" required /></label>
                    </div>

                    <div className="button-section">
                    <Link to={"/login"} >
                    <button type="submit">Send
                    </button> 
                    </Link>
                    <span className="privacy-policy" >
                    <input type="checkbox" name="field7" required />You agree to our Terms and Policy. </span>
                    
                    </div>
                </form>
        </div> 
        )}
