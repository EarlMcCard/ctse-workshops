import React, { useState, useContext} from 'react'
import FormContext from './FormContext'
import { useNavigate } from 'react-router-dom'
import { destinations, roomTypes } from './data'
import './Form.css'

const Form3 = () => {

  
  //function for form submit that uses dispatch

  const { dispatch } = useContext(FormContext)

  const [newHotel, setNewHotel] = useState('')
  const [newLocation, setNewLocation] = useState('')
  const [newRoom, setNewRoom] = useState('')
  const [perNight, setPerNight] = useState(0)
  const [showPrice, setShowPrice] = useState(false)

  const hotels = destinations.find(dest => dest.location === newLocation)?.hotels || []

  const pricePerNight = () => {
    const hotelPrice = hotels.find(p => p.name === newHotel)
    const roomPrice = roomTypes.find(p => p.type === newRoom)

    setShowPrice(true)
    setPerNight(hotelPrice.price * roomPrice.value)
  }

  const navigate = useNavigate()

  const handleForm = (e) => {
        e.preventDefault()

        dispatch({type: 'ADD_INFO',
            payload: {
              location: newLocation,
              hotel: newHotel,
              room: newRoom,
              perNight: perNight,
                
            }
         })  

        navigate('/checkout')
    }
            
  return (

    <div className='formBackground'>

      <form className='formMain' onSubmit={handleForm}>

        <select name="location" id="location" value={newLocation}
          onChange={e => setNewLocation(e.target.value)}
        >
          <option value="">Select Desetination</option>
          {destinations.map((dest, index) => (
            <option key={index} value={dest.location}>{dest.location}</option>
          ))}

        </select>

        <select name="hotel" id="hotel" value={newHotel}
          onChange={e => setNewHotel(e.target.value)}
        >
          <option value="">Select Hotel</option>

          {hotels.map((hotel, index) => (
            <option key={index} value={hotel.name}>{hotel.name}</option>
          ))}

        </select>

        <select name="room" id="room" value={newRoom}
          onChange={e => setNewRoom(e.target.value)}
        >
          <option value="">Select Room</option>
          {roomTypes.map((room, index) => (
            <option key={index} value={room.type}>{room.type}</option>
          ))}

        </select>

        <button type='button' onClick={pricePerNight}>Check Price</button>
        
        {showPrice && 
          <h4>Price per night: ${perNight.toFixed(2)}</h4>        
        }

        <button type='submit'>Next</button>

      </form>

    </div>

  )
}

export default Form3