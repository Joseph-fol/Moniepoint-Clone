import React from 'react'
import NavbarComponent from './components/NavbarComponent'
import HeroSection from './components/HeroSection'
import BusinessAccount from './components/BusinessAccount'
import PointOfSalesTerminal from './components/PointOfSalesTerminal'

const App = () => {
  return (
    <>
      <NavbarComponent/>
      <HeroSection/>
      <BusinessAccount/>
      <PointOfSalesTerminal/>
    </>
  )
}

export default App