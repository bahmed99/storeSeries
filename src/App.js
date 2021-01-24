import React, { useContext } from 'react'
import MainRouter from './MainRouter'
import Login from './Pages/Login/Login'
import Store from './Store'
import { AuthentificationTest } from './ProviderTest'
import Home from './Pages/Home/Home'
import { Route } from 'react-router-dom'

function App() {
  const { autentification } = useContext(AuthentificationTest)
  return (
    <div>
      <MainRouter />
    </div>
  )
}

export default App