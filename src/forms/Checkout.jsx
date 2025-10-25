import React, { useContext } from 'react'
import FormContext from './FormContext'
import './Form.css'

const Checkout = () => {

    const { state } = useContext(FormContext)

    const price = state.formData.perNight
    const nights = state.formData.dates?.length

    return (

        <div className='formBackground'>

            <div className='checkout'>

                <h2>Checkout</h2>
                <p>Name: {state.formData.name}</p>
                <p>Email: {state.formData.email}</p>
                <p>Destination: {state.formData.location}</p>
                <p>Hotel: {state.formData.hotel}</p>
                <p>Room Type: {state.formData.room}</p>
                <p>Price Per Night</p>
                <p>${state.formData.perNight.toFixed(2)}</p>

                <h3>Total: ${(price * nights).toFixed(2)}</h3>

            </div>

        </div>

    )
}

export default Checkout