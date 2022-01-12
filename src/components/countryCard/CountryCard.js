import React from 'react'
import './CountryCard.css'
import { getName } from 'country-list'

const CountryCard = ({ name, probability }) => {
  const countryName = getName(name)
  return (
    <div className='countryCard'>
      <h3 className='countryName'>{countryName ? countryName : 'Unknown'}</h3>
      {countryName && (
        <img
          className='flagImage'
          src={`https://countryflagsapi.com/png/${name}`}
          alt={`image of the national flag of ${name}`}
        />
      )}
      <p className='percentage'>{Math.ceil(probability * 100)}%</p>
    </div>
  )
}

export default CountryCard
