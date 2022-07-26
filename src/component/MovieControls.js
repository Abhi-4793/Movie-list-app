import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const MovieControls = ({ movie, type }) => {
  const {
    removeFromWatchlist,
    addToWatched,
    removeFromWatched,
    moveToWatchlist,
    removeFromFavourite,
    addToFavourite,
    favourite,
  } = useContext(GlobalContext);
  let alreadyAddedFavourite = favourite.find((f) => f.id === movie.id);
  const disable_favourite_icon = alreadyAddedFavourite ? true : false;
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="ctrl-btn">
            <i
              className="fa-fw far fa-eye-slash"
              onClick={() => moveToWatchlist(movie)}
            ></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "favourite" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => removeFromFavourite(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "trending" && (
        <>
          <button
            className="ctrl-btn"
            disabled={disable_favourite_icon}
            onClick={() => addToFavourite(movie)}
          >
            <i className="fa-solid fa-heart"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
