import React from 'react'
import Nav_Bar from '../../Components/Navbar/Nav-bar'
import MainRouter from '../../MainRouter'

import'./Home.style.css'
let username = localStorage.getItem("Username");

function Home() {
    
    return (
        <div>
            <Nav_Bar />
            <h1>Welcome to our shop</h1>
            <h2>Enjoy your shopping {username} </h2>
        </div>
    )
}


export default Home
