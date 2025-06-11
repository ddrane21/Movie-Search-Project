import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  return (
    <>
      <article className={styles.movieCard}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{movie.title}</h1>
        </div>
        <div className={styles.posterWrapper}>
        <img
          className={styles.moviePoster}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        </div>
        <div className={styles.releaseDate}>
          <div>{movie.release_date}</div>
        </div>
        <div className={styles.overview}>
          <div>{movie.overview}</div>
        </div>
      </article>
    </>
  );
}
