import React, { useState, useContext, } from 'react'
import FormContext from './FormContext'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-multi-date-picker';
import './Form.css'


const Form2 = () => {

  const { state, dispatch } = useContext(FormContext)

  const [dates, setDates] = useState([])

  const navigate = useNavigate()


  const handleForm = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_INFO',
      payload: {
        dates: dates
      }
    })
    navigate('/form3')

  }


  return (

    <div className='formBackground'>

      <form className='formMain' onSubmit={handleForm}>

        <h2>Choose your vacation dates</h2>

        <DatePicker
          multiple
          value={dates}
          onChange={setDates}
          placeholder='Select multiple dates'
        />

        <ul>
          {dates.map((date, index) => (
            <li key={index}>{date.format('MM/DD/YYYY')}</li>
          ))}
        </ul>


        <button type='submit'>Next</button>

      </form>

    </div>

  )
}

export default Form2