import React from 'react'
import Routes from './commom/routes'
import Header from './template/Header'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <div>
      <Header />
      <Routes />
    </div>    
  )
}

export default App