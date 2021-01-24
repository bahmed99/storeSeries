import React  from 'react'
import "./ListProduct.style.css"
export default function ListCart({carts}) {
    
    return (
        
            <div className="users-list"> 
            
        { carts != null && carts.length < 1 <1  ?carts.slice(1).map((el,index)=>{

            return (
               <ListCarts key={index} cart={el} />
            )
        }):alert("Enjoy!")}
        </div>
    )
}

function ListCarts({cart}){
    let storedproduct = JSON.parse(localStorage.getItem("product"));
    let navbar = JSON.parse(localStorage.getItem("navbarNumber"));


    let a
    function RemoveItem() {
        for (let i = 0; i < storedproduct.length; i++) {
            if (storedproduct[i][0]===cart[0]) {
                 a=i ;
            }
        }
        let c= navbar -  storedproduct[a][2] 

        localStorage.setItem("navbarNumber", JSON.stringify(c));
        storedproduct.splice(a,1)
        if(storedproduct.length<1) {
            localStorage.removeItem("product")
            localStorage.removeItem("navbarNumber")
        }
        else {localStorage.setItem("product", JSON.stringify(storedproduct)); } 
        window.location.reload(); 
    }


    return (
        <div className="user">
            <img src={cart[0]}  /> <br/>
            <div className="information">
            <p> Name : {cart[1]} </p>
            <p>total piece : {cart[2]}</p>
            <p>price : {`${cart[2]*cart[3]}$`}</p> 
            <button onClick={RemoveItem}>Remove</button>
            </div>
        </div>
    )
}
