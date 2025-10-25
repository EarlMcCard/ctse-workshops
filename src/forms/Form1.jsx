import React, { useState, useContext, } from 'react'
import FormContext from './FormContext'
import { useNavigate } from 'react-router-dom'
import './Form.css'

const Form1 = () => {

    const { dispatch} = useContext(FormContext)

    const [newName, setNewName] = useState('')    
    const [newEmail, setNewEmail] = useState('')

    const navigate = useNavigate()


    const handleForm = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_INFO',
            payload: {
                name: newName,
                email: newEmail,
            }
         })        
         navigate('/form2')
    }


  return (
    <div className='formBackground'>

        <form className='formMain' onSubmit={handleForm}>

            <h2>Registration Form</h2>

            <input type="text" 
                placeholder='Your Name'
                value={newName}
                onChange={e => setNewName(e.target.value)}            
            />

            <input type="text" 
                placeholder='Your Email'
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}            
            />

            <button type='submit'>Next</button>
        </form>

    </div>
  )
}

export default Form1