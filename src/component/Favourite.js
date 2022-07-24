import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
const Favourite = () => {
  const { favourite } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="font-bold font-serif leading-loose text-2xl">
            Favourite's
          </h1>
          <span className="count-pill">{favourite.length} Movies</span>
        </div>
        {favourite.length > 0 ? (
          <div className="movie-grid">
            {favourite.map((movie) => (
              <MovieCard movie={movie} type="favourite" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in list</h2>
        )}
      </div>
    </div>
  );
};

export default Favourite;
