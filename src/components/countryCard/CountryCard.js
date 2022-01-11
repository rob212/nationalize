import React from 'react'
import './CountryCard.css'

function CountryCard({ name, probability }) {
  return (
    <div className='countryCard'>
      <h3 className='countryName'>{name}</h3>
      <p className='percentage'>{Math.ceil(probability * 100)}%</p>
    </div>
  )
}

export default CountryCard
