import './App.css'
import { useState } from 'react'
import CountryCard from './components/countryCard/CountryCard'
import Header from './components/header/Header'
import getNationality from './utils/NationalizeApi'

function App() {
  const [searchResult, setSearchResult] = useState({})

  const searchHandler = async name => {
    const data = await getNationality(name)
    console.log(data)
  }

  return (
    <div className='app'>
      <Header handleSearch={searchHandler} />
      <CountryCard />
    </div>
  )
}

export default App
