import React from 'react'
import ListProducts from '../../Components/List/ListProducts';
import Nav_Bar from '../../Components/Navbar/Nav-bar'
import MainRouter from '../../MainRouter';

export default  function Products() {
        const [products,setProducts] = React.useState([]);
        React.useEffect(async ()=>{
        const response = await fetch("http://api.tvmaze.com/shows");
        const data = await response.json();
        setProducts(data)
    
    },[])
    console.log(products)
    return (
        <div>
            <Nav_Bar />
            <ListProducts users={products} />

        </div>
    )
}


