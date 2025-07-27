import React, { useEffect, useState } from 'react'
import Moviecard from '../components/Moviecard'
import { getPopularMovies, searchMovie } from '../services/Api'
import "../css/Home.css"

const Home = () => {
  const [searchQuery, setSearchQuery]=useState('')
  const [movies, setMovies]= useState([])
  const [error, setError]=useState(null)
  const [isLoading, setisLoading]=useState(true)

  useEffect(()=>{

    const loadPopularMovies= async()=>{

      try {
        const popularMovies= await getPopularMovies()
        setMovies(popularMovies)
      } catch (error) {
        console.log(error)
        setError('failed to load movies')
        
      }
      finally{
        setisLoading(false)
      }
    }
    loadPopularMovies()

  }, [])
  

  const handleSearch= (e)=>{
    e.preventDefault();
    if(searchQuery.trim()==='') return
    if(isLoading) return
    setisLoading(true)
    try {
      const searchResolts= await 
      
    } catch (error) {
      
    }

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

      {error && <div className='error-message'> {error}</div>}
      
      {isLoading? <div className='loading'> loading...... </div> :
     
      <div className="movies-grid">
        {movies.map((movie) =>
          (<Moviecard movie={movie} key={movie.id} />)
        )}

      </div>
       }
    </div>
  )
}

export default Home