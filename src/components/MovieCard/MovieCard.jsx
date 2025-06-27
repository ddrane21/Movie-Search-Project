import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";


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
        
        <footer>
          <div id={styles.detailLink}>
            <Link to={`/popular/${movie.id}`}>
            <button className={styles.detailButton}>
              View Details
            </button>
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}
