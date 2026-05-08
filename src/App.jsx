import React from 'react'
import NavbarComponent from './components/NavbarComponent'
import HeroSection from './components/HeroSection'
import BusinessAccount from './components/BusinessAccount'
import PointOfSalesTerminal from './components/PointOfSalesTerminal'
import ExpenseCard from './components/ExpenseCard'
import WorkingCapitalLoans from './components/WorkingCapitalLoans'
import BusinessSavings from './components/BusinessSavings'

const App = () => {
  return (
    <>
      <NavbarComponent/>
      <HeroSection/>
      <BusinessAccount/>
      <PointOfSalesTerminal/>
      <ExpenseCard/>
      <WorkingCapitalLoans/>
      <BusinessSavings/>
    </>
  )
}

export default App