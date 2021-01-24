import React, { useState, useContext, useEffect } from 'react'
import './Product.style.css'
import Nav_Bar from '../../Components/Navbar/Nav-bar'
import { useParams } from "react-router-dom";
import { ProductTest } from '../../ProviderTest'
import { NavbarTest } from '../../ProviderTest'

function Product() {
    const [product, setProduct] = useState([])
    const [image, setImage] = useState([])
    const [rating, setRating] = useState([])
    const { id } = useParams();
    const [number, setNumber] = useState()
    const { productCart, setProductCart } = useContext(ProductTest)
    const { navbar, setNavbar } = useContext(NavbarTest)

    useEffect(async () => {
        const response = await fetch(`http://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setProduct(data)
        setImage(data.image)
        setRating(data.rating)
    }, [])

    function AddToCart(e) {

        const todos = [...productCart];
        todos.push([image.original, product.name, number, product.weight])
        setProductCart(todos)
        let a = 0
        let djeja = JSON.parse(localStorage.getItem("product"));
        for (let i = 1; i < djeja.length; i++) {
            if (image.original === djeja[i][0]) {
                a = i
            }
        }
        if (a != 0) { djeja[a][2] = +number + +djeja[a][2] }
        else {
            djeja.push([image.original, product.name, number, product.weight])
        }
        localStorage.setItem("product", JSON.stringify(djeja));
        let numberNavbar = JSON.parse(localStorage.getItem("navbarNumber"));
        setNavbar(number)
        localStorage.setItem("navbarNumber", JSON.stringify(+ number + +numberNavbar));
    }

    function AddNumber(e) {
        setNumber(e.target.value)
    }


    return (
        <div>
            <Nav_Bar />
            <div className="productInforamtion">
                <img src={image.original} /> <br />
                <div >
                    <p> {product.name} </p>
                    <span className={rating.average >= 2 ? 'fa fa-star checked' : 'fa fa-star'} > </span>
                    <span className={rating.average >= 4 ? 'fa fa-star checked' : 'fa fa-star'}></span>
                    <span className={rating.average >= 6 ? 'fa fa-star checked' : 'fa fa-star'}></span>
                    <span className={rating.average >= 8 ? 'fa fa-star checked' : 'fa fa-star'}></span>
                    <span className={rating.average >= 9.5 ? 'fa fa-star checked' : 'fa fa-star'}></span>
                    <p>{`${product.weight}$`}</p>
                    <input type="number" min='1' onChange={AddNumber} /> <br /> <br />
                    <button disabled={number >= 1 ? false : true} className="button" onClick={AddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
