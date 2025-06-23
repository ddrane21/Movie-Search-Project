import styles from "./PlayingMovieCard.module.css";

export default function PlayingMovieCard({ movie }) {
  return (
    <>
      <div className={styles.card}>
        <img
          className={styles.backdrop}
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className={styles.overlay}>
          <h3 className={styles.title}>{movie.title}</h3>
          <p className={styles.date}>Release: {movie.release_date}</p>
        </div>
      </div>
    </>
  );
}
