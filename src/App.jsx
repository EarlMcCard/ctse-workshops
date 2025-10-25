import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Form1 from './forms/Form1'
import Form2 from './forms/Form2'
import Form3 from './forms/Form3'
// import Test from './Test'
import './App.css'
import { FormProvider } from './forms/FormContext'
import Checkout from './forms/Checkout'

function App() {
  

  return (
    <>
    <FormProvider>

    <Routes>
      <Route path='/' element={<Homepage />}  />
      <Route path='/form1' element={<Form1 />}  />
      <Route path='/form2' element={<Form2 />}  />
      <Route path='/form3' element={<Form3 />}  />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
    {/* <Test /> */}
      
    </FormProvider>
    </>
  )
}

export default App
