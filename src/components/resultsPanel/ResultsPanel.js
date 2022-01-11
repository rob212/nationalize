import React from 'react'
import './ResultsPanel.css'
import CountryCard from '../countryCard/CountryCard'

function ResultsPanel(props) {
  let searchName = props.data.name
  let countries = props.data.country
  return (
    <div className='resultPanel'>
      {searchName && <h2 className='searchResultName'>{searchName}</h2>}
      {countries && (
        <div className='cardContainer'>
          <ul className='countryCardsList'>
            {countries.map(country => (
              <li key={country.country_id}>
                <CountryCard
                  name={country.country_id}
                  probability={country.probability}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ResultsPanel
