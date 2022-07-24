import React from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";

const Trending = () => {
  const [trendresult, setTrendresult] = useState([]);

  fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.errors) {
        console.log(data.results);
        setTrendresult(data.results);
      } else {
        setTrendresult([]);
      }
    });
  return (
    <div>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="font-bold font-serif leading-loose text-2xl">
              Trendings
            </h1>
            <span className="count-pill">{trendresult.length} Movies</span>
          </div>
          {trendresult.length > 0 ? (
            <div className="movie-grid">
              {trendresult.map((movie) => (
                <MovieCard movie={movie} type="trending" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No movies in list</h2>
          )}
        </div>
      </div>
      {/* {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )} */}
    </div>
  );
};

export default Trending;
