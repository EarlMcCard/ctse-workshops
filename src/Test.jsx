import React from 'react'
import FormContext from './forms/FormContext'
import { useContext } from 'react'

const Test = () => {

    const {state} = useContext(FormContext)

  return (
    <div>
        <p>{state.formData.name}</p>
        <p>{state.formData.email}</p>
        <ul>
            {state.formData.dates.map((date, index) => (
                <li key={index}>{date?.toString?.()}</li>
            ))}
        </ul>
         <p>{state.formData.location}</p>
          <p>{state.formData.perNight}</p>
    </div>
  )
}

export default Test