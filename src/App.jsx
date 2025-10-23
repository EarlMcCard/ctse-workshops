import './App.css'
import CoffeeOrder from './components/CoffeeOrder'
import { useState } from 'react'
import CoffeeMenu from './components/CoffeeMenu'
import OrderForm from './components/OrderForm'


function App() {

  const [order, setOrder] = useState([])


  return (
    <>
      <CoffeeOrder order={order} />
      <CoffeeMenu />
      <OrderForm order={order} setOrder={setOrder} />
  
    </>
  )
}

export default App