import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import React ,{useContext} from 'react'
import './navbarLogo.css'
import {NavbarTest} from '../../ProviderTest'
import {AuthentificationTest} from '../../ProviderTest'
export default function Nav_Bar () {
    const {navbar} = useContext(NavbarTest)
    const {autentification ,setAutentification} = useContext(AuthentificationTest)

    let numberNavbar = JSON.parse(localStorage.getItem("navbarNumber"));
    function SetIsActive() {
        localStorage.setItem("isActive", JSON.stringify(false));
    }
    return (
        <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/home">Series Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="/login" onClick={SetIsActive}>Logout</Nav.Link>

                </Nav>
                <Nav>
                    <div id="cart-icon" >
                    <i className="fas fa-shopping-cart"></i>
                    <span className="badge badge-danger">{numberNavbar}</span>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}
