import styles from './PlayingMovieList.module.css';
import { useState, useEffect } from 'react';
import { getPlayingMovies } from '../../services/MovieService';
import PlayingMovieCard from '../PlayingMovieCard/PlayingMovieCard';

export default function PlayingMovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPlayingMovies().then(setMovies);
  }, []);

  return (
    <>
    <div className={styles.playingListContainer}>
        <header className={styles.listHeader}>
            <h1>Currently Playing Movies</h1>
        </header>

        <div className={styles.playingMovieGrid}>
            {movies.map((movie) => (
                <PlayingMovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
    </>
  )
}