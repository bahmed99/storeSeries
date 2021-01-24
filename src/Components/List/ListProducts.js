import React from 'react'
import {Link} from "react-router-dom"
import "./ListProduct.style.css"
export default function ListProducts({users}) {
    return (
        <div className="users-list"> 
        {users.map((user)=>{
            return (
               <ListProduct key={user.id} user={user} />
            )
        })}
    </div>
    )
}

function ListProduct({user}){
    return (
        <div className="user">
            <img src={user.image.original}  /> <br/>
            <div className="information">
                <p> Name : {user.name } </p>
                <Link to={`/product/${user.id}`} >
                    <button >
                    More information</button> 
                </Link> 
            </div>
        </div>
    )
}


