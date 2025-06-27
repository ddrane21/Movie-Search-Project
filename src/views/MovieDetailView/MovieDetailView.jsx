import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../../services/MovieService";
import styles from "./MovieDetailView.module.css";

export default function MovieDetailView() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(id).then(setMovie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.movieDetailContainer}>
      <img
        className={styles.backdrop}
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={`${movie.title} backdrop`}
      />
      <div className={styles.contentBox}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.genres}>
            {movie.genres?.map((g) => g.name).join(", ")}
          </p>
          <p className={styles.releaseDate}>🎬 {movie.release_date}</p>
          <p className={styles.rating}>⭐ {movie.vote_average}</p>
        </div>
      </div>
      <div className={styles.overview}>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
