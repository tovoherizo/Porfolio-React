import React from 'react'
import './Search.css'

function Search({setQuery}) {
  return (
      <div>
          <input type="text" className='search-input' onChange={(e)=> setQuery(e.target.value)} />
    </div>
  )
}

export default Search