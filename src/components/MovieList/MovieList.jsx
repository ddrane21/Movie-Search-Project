import styles from "./MovieList.module.css";
import { useState, useEffect } from "react";

import { getMoreMovies, getPopularMovies } from "../../services/MovieService";
import MovieCard from "../MovieCard/MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(1);

  function getNext(){
    const nextPage = count + 1;
    setCount(nextPage);
    getMoreMovies(nextPage).then((response) => {
      setMovies((prev) => [...prev, ...response.data.results]);
    });
  }

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);

  return (
    <>
      <div className={styles.movieListContainer}>
        <header className={styles.listHeader}>
          <h1>Todays Popular Movies</h1>
        </header>

        <div className={styles.movieGrid}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}></MovieCard>
              
          ))}
        </div>
       
        {count < 1300 && 
        <button className={styles.nextButton} onClick={getNext}>Load More</button>
        }
        
      </div>
    </>
  );
}
