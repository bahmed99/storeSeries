import React ,{useState , createContext} from 'react'

 export const AuthentificationTest =  createContext();
 export const ProductTest =  createContext();
 export const NavbarTest =  createContext();



export default function ProviderTest  ( {children} )  {

  const [autentification ,setAutentification] =useState(false)
    const [productCart ,setProductCart] =useState([])
    const [navbar ,setNavbar] =useState()
    return (
        <NavbarTest.Provider value ={{navbar , setNavbar}}   >
        <ProductTest.Provider value ={{productCart , setProductCart }} >
            <AuthentificationTest.Provider value ={{autentification , setAutentification }}>
            {children}
            </AuthentificationTest.Provider>

        </ProductTest.Provider>

        </NavbarTest.Provider>
            
        
    )
}
