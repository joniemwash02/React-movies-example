import React, { useState } from 'react'
import Moviecard from '../components/Moviecard'
import "../css/Home.css"

const Home = () => {
  const [searchQuery, setSearchQuery]=useState('')
  const movies = [
    { id: 1, title: 'the terminator', release_date: '2020' },
    { id: 2, title: 'the great lioness', release_date: '2020' },
    { id: 3, title: 'trasporter', release_date: '2020' },

  ]
  const handleSearch= (e)=>{
    e.preventDefault();
    alert(searchQuery)
    setSearchQuery(' ');
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className='search-form'>
        <input type="text" 
        placeholder='search for movie...' 
        className='search-input' 
        value={searchQuery}
        onChange={(e)=>(setSearchQuery(e.target.value))}
        />
        <button type='submit' className='search-button'>Search</button>

      </form>
      <div className="movies-grid">
        {movies.map((movie) =>
          movie.title.toLowerCase().startsWith(searchQuery)&&(<Moviecard movie={movie} key={movie.id} />)
        )}

      </div>
    </div>
  )
}

export default Home