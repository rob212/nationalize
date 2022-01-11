import React from 'react'
import './ResultsPanel.css'

function ResultsPanel(props) {
  let name = props.data.name
  let countries = props.data.countries

  return (
    <div className='resultPanel'>
      {name && <h2 className='searchResultName'>{name}</h2>}
    </div>
  )
}

export default ResultsPanel
