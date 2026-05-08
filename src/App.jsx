import React, { useRef, useState, useEffect } from 'react'
import NavbarComponent from './components/NavbarComponent'
import HeroSection from './components/HeroSection'
import BusinessAccount from './components/BusinessAccount'
import PointOfSalesTerminal from './components/PointOfSalesTerminal'
import ExpenseCard from './components/ExpenseCard'
import WorkingCapitalLoans from './components/WorkingCapitalLoans'
import BusinessSavings from './components/BusinessSavings'
import Moniebook from './components/Moniebook'

const App = () => {
  const businessAccountRef = useRef(null)
  const businessSavingsRef = useRef(null)
  const expenseCardRef = useRef(null)
  const workingCapitalRef = useRef(null)
  const moniebookRef = useRef(null)
  const pointOfSalesRef = useRef(null)
  const [activeButton, setActiveButton] = useState('businessAccount')

  const scrollToSection = (ref, buttonName) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    setActiveButton(buttonName)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === businessAccountRef.current) {
              setActiveButton('businessAccount')
            } else if (entry.target === pointOfSalesRef.current) {
              setActiveButton('pointOfSales')
            } else if (entry.target === expenseCardRef.current) {
              setActiveButton('expenseCard')
            } else if (entry.target === workingCapitalRef.current) {
              setActiveButton('workingCapital')
            } else if (entry.target === businessSavingsRef.current) {
              setActiveButton('businessSavings')
            } else if (entry.target === moniebookRef.current) {
              setActiveButton('moniebook')
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    if (businessAccountRef.current) observer.observe(businessAccountRef.current)
    if (pointOfSalesRef.current) observer.observe(pointOfSalesRef.current)
    if (expenseCardRef.current) observer.observe(expenseCardRef.current)
    if (workingCapitalRef.current) observer.observe(workingCapitalRef.current)
    if (businessSavingsRef.current) observer.observe(businessSavingsRef.current)
    if (moniebookRef.current) observer.observe(moniebookRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <NavbarComponent />
      <HeroSection />

      <section className="sticky top-20 z-40 hidden md:block bg-[#f8fafd] py-6 px-25">
        <div className='flex gap-5 items-center justify-center bg-white rounded-4xl py-7 '>
          <button onClick={() => scrollToSection(businessAccountRef, 'businessAccount')} className={`${activeButton === 'businessAccount' ? 'bg-[#c4e9fd] text-[#1b3363]' : 'text-[#98a4bd] focus:bg-[#c4e9fd] focus:text-[#1b3363]'} font-medium py-3 px-3 rounded-full duration-300 border border-[#f8fafd] text-[17px] cursor-pointer active`}>Business Account</button>

          <button onClick={() => scrollToSection(pointOfSalesRef, 'pointOfSales')} className={`${activeButton === 'pointOfSales' ? 'bg-[#c4e9fd] text-[#1b3363]' : 'text-[#98a4bd] focus:bg-[#c4e9fd] focus:text-[#1b3363]'} font-medium py-3 px-3 rounded-full border border-[#f8fafd] text-[17px] cursor-pointer`}>Point of Sales Terminal</button>
          <button onClick={() => scrollToSection(expenseCardRef, 'expenseCard')} className={`${activeButton === 'expenseCard' ? 'bg-[#c4e9fd] text-[#1b3363]' : 'text-[#98a4bd] focus:bg-[#c4e9fd] focus:text-[#1b3363]'} font-medium py-3 px-3 rounded-full border border-[#f8fafd] text-[17px] cursor-pointer`}>Expense Card</button>
          <button onClick={() => scrollToSection(workingCapitalRef, 'workingCapital')} className={`${activeButton === 'workingCapital' ? 'bg-[#c4e9fd] text-[#1b3363]' : 'text-[#98a4bd] focus:bg-[#c4e9fd] focus:text-[#1b3363]'} font-medium py-3 px-3 rounded-full border border-[#f8fafd] text-[17px] cursor-pointer`}>Working Capital Loans</button>
          <button onClick={() => scrollToSection(businessSavingsRef, 'businessSavings')} className={`${activeButton === 'businessSavings' ? 'bg-[#c4e9fd] text-[#1b3363]' : 'text-[#98a4bd] focus:bg-[#c4e9fd] focus:text-[#1b3363]'} font-medium py-3 px-3 rounded-full border border-[#f8fafd] text-[17px] cursor-pointer`}>Business Savings</button>
          <button onClick={() => scrollToSection(moniebookRef, 'moniebook')} className={`${activeButton === 'moniebook' ? 'bg-[#c4e9fd] text-[#1b3363]' : 'text-[#98a4bd] focus:bg-[#c4e9fd] focus:text-[#1b3363]'} font-medium py-3 px-3 rounded-full border border-[#f8fafd] text-[17px] cursor-pointer`}>Moniebook</button>
        </div>
      </section>

      <div ref={businessAccountRef}>
        <BusinessAccount
          businessAccountRef={businessAccountRef}
          pointOfSalesRef={pointOfSalesRef}
          expenseCardRef={expenseCardRef}
          workingCapitalRef={workingCapitalRef}
          businessSavingsRef={businessSavingsRef}
          moniebookRef={moniebookRef}
        />
      </div>

      <div ref={pointOfSalesRef} className="scroll-mt-40">
        <PointOfSalesTerminal />
      </div>

      <div ref={expenseCardRef} className="scroll-mt-40">
        <ExpenseCard />
      </div>

      <div ref={workingCapitalRef} className="scroll-mt-40">
        <WorkingCapitalLoans />
      </div>

      <div ref={businessSavingsRef} className="scroll-mt-40">
        <BusinessSavings />
      </div>

      <div ref={moniebookRef} className="scroll-mt-40">
        <Moniebook />
      </div>
    </>
  )
}

export default App