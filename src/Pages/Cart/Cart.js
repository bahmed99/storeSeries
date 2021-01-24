import React ,{useState , useContext ,useEffect} from 'react'
import {ProductTest} from '../../ProviderTest'
import Nav_Bar from '../../Components/Navbar/Nav-bar'
import ListCart from '../../Components/List/ListCart'
import './Cart.style.css'

export default function Cart() {
    const {productCart} = useContext(ProductTest)
    let storedproduct = JSON.parse(localStorage.getItem("product"));
    
function PayNow() {
    localStorage.removeItem("product")
    localStorage.removeItem("navbarNumber")
    localStorage.setItem("product", JSON.stringify([ ['']]));
    localStorage.setItem("navbarNumber", JSON.stringify(0));
    window.location.reload(); 
}

function CaclulTotal() {
    let total =0 
    if(storedproduct != null) {
                        for (let i=1 ;i<storedproduct.length;i++) {
                            total += storedproduct[i][3] * storedproduct[i][2]
                        }
    return `${total}$` }
    else return 0 ; }


return (
        <div>
            <Nav_Bar />
            
            {storedproduct.length < 1 <1 ?
            <ListCart carts={storedproduct}/> : ''}
            
            <div className="information">
            <h4>{<CaclulTotal />}</h4>
            
            <button onClick={PayNow}>Pay Now</button>
            </div>
        </div>
    )
}


