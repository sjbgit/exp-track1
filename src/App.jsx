import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import './App.css'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses /> 
        <TransactionList/>
      </div>
      
    </>
  )
}

export default App
