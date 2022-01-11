import React, { useState } from 'react'
import { BiWorld, BiSearchAlt } from 'react-icons/bi'

import './Header.css'

function Header({ handleSearch }) {
  const [name, setName] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    handleSearch(name)
    setName('')
  }

  return (
    <header>
      <div className='logoContainer'>
        <BiWorld className='logoIcon' />
        <h1>Nationalize</h1>
      </div>

      <form onSubmit={handleSubmit} className='searchForm'>
        <div className='searchPanel'>
          <BiSearchAlt className='logoIcon' />
          <input
            onChange={e => setName(e.target.value)}
            value={name}
            type='text'
            className='searchInput'
            placeholder='enter name here'
          />
        </div>
        <input type='submit' className='searchButton' value='Submit' />
      </form>
    </header>
  )
}

export default Header
