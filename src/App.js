import './App.css'
import { useState } from 'react'
import Header from './components/header/Header'
import getNationality from './utils/NationalizeApi'
import ResultsPanel from './components/resultsPanel/ResultsPanel'

function App() {
  const [searchResult, setSearchResult] = useState({ name: '', countries: [] })

  const searchHandler = async name => {
    const data = await getNationality(name)
    console.log(data)
    setSearchResult(data)
  }
  // console.log(searchResult)
  return (
    <div className='app'>
      <Header handleSearch={searchHandler} />
      <ResultsPanel data={searchResult} />
    </div>
  )
}

export default App
