import './App.css'
import CountryCard from './components/countryCard/CountryCard'
import Header from './components/header/Header'

function App() {
  // https://api.nationalize.io/?name=michael
  // https://nationalize.io/

  const searchHandler = name => {
    console.log(name)
  }

  return (
    <div className='app'>
      <Header handleSearch={searchHandler} />
      <CountryCard />
    </div>
  )
}

export default App
