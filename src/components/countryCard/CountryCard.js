import React from 'react'
import './CountryCard.css'

function CountryCard({ name, probability }) {
  return (
    <div className='countryCard'>
      <h3 className='countryName'>{name}</h3>
      <p className='percentage'>{probability}</p>
    </div>
  )
}

export default CountryCard
