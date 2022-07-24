import React,{ useState} from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FaHeart } from 'react-icons/fa';



const ResultCard = ({movie}) => {
    const [icolor,setIcolor] = useState(false);
   const red = "#FF0000";
   const grey = "808080"
   

   
    
const {addToWatchlist,watchlist,addToWatched,watched,addToFavourite,favourite} = useContext(GlobalContext); 
let  alreadyAddedFavourite = favourite.find(f=>f.id === movie.id);

let alreadyaddedWatchlist = watchlist.find(m => m.id === movie.id);

// let clikedheart = hearticon.find(h => h.id === movie.id)

let  alreadyaddedWatched = watched.find(k => k.id === movie.id) 



const disable_watchlist_Button = alreadyaddedWatchlist ? true : alreadyaddedWatched ? true : false ;
const disable_favourite_icon = alreadyAddedFavourite ? true :false;

const disable_watched_Button = alreadyaddedWatched ? true: false;

// const heart = () => useEffect(()=>{
    
   
     
//        },[clikedheart]);


    const   handleClick = () => setIcolor(true);
        
            
        //<FaHeart style={ icolor? {color: red} :{color: grey} }  className={icolor? "redColor" : "greyColor"}  aria-hidden="true" />
    

  return (
    <div className="result-card">
        <div className="poster-wrapper">
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={`${movie.title} Poster`}
                />
               ) : (
  <div className="filter-poster"></div>
        
               ) }
        </div>
        <div className="info">
            <div className="header">
                <h3 className="title">
                    {movie.title}
                </h3>
                <div className='favourite-div'>
                <button className="favourite-btn"
                onClick={()=>addToFavourite(movie)}
                disabled={disable_favourite_icon}>
                 <FaHeart    style={ icolor? {color: red} :{color: grey} } onClick={()=>handleClick() } aria-hidden="true" />  {/*//class="fa-solid fa-heart heart-icon" */}
                </button>
            </div>
                <h4 className="release-date">
                    {movie.release_date ? movie.release_date : "-"}
                </h4>
                <h5 className="release-date">
                    {movie.vote_average}
                </h5>
            </div>
            
            <div className="controls">
                <button className="btn" 
                onClick={()=>addToWatchlist(movie)}
                disabled={disable_watchlist_Button} >
                    Add to Watchlist
                </button>
                <button className="btn" 
                onClick={()=>addToWatched(movie)}
                disabled={disable_watched_Button} >
                    Add to Watched
                </button>
            </div>
          
        </div>
    </div>
  )
}



export default ResultCard;


