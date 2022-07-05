 import React,{useContext} from 'react'
 import { GlobalContext } from '../context/GlobalState'
 import MovieCard from './MovieCard';
 const Watched = () => {
  const { watched } =useContext(GlobalContext); 
  
  return (
    <div className="movie-page">
    <div className="container">
      <div className="header">
       <h1>Watched Movies</h1>
       <span className='count-pill'>
      {watched.length} Movies
     </span>
      </div>
      {watched.length>0 ? 
        <div className="movie-grid">
      {watched.map( (movie) => (
        <MovieCard movie={movie} type="watched"/>
       
    ))}
      </div>
      :
      <h2 className="no-movies">No movies in list</h2>
       }
      
    </div>
   </div>
   )
 }
 
 export default Watched