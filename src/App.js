import './App.css'
import { useState } from 'react'
import Header from './components/header/Header'
import { getNationality, getFlag } from './utils/NationalizeApi'
import ResultsPanel from './components/resultsPanel/ResultsPanel'

function App() {
  const [searchResult, setSearchResult] = useState({ name: '', country: [] })

  const searchHandler = async name => {
    const searchData = await getNationality(name)
    setSearchResult(searchData)
  }

  return (
    <div className='app'>
      <Header handleSearch={searchHandler} />
      <ResultsPanel data={searchResult} />
    </div>
  )
}

export default App
