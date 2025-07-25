import {
  getMovieTrailer,
  getTrendMovieToday,
} from "../../services/MovieService";
import styles from "./HomeView.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomeView() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [firstMovie, setFirstMovie] = useState({});
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    getTrendMovieToday().then(setTrendingMovies);
  }, []);

  useEffect(() => {
    if (trendingMovies.length > 0) {
      setFirstMovie(trendingMovies[0]);
    }
  }, [trendingMovies]);

  useEffect(() => {
    if (firstMovie?.id) {
      getMovieTrailer(firstMovie.id).then((videos) => {
        const trailer = videos.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          setTrailerKey(trailer.key);
        } else {
          setTrailerKey(null);
        }
      });
    }
  }, [firstMovie]);

  return (
    <div className={styles.homeViewContainer}>
      <div
        className={styles.heroBanner}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${firstMovie.backdrop_path})`,
        }}
      >
        <h1 className={styles.title}>Title: {firstMovie.title}</h1>
        <p className={styles.description}>
          Overview:{" "}
          {firstMovie.overview || "No description available for this movie."}
        </p>
        <footer className={styles.footer}>
          <div className={styles.trailerContainer}>
            {!showTrailer && trailerKey ? (
              <button onClick={() => setShowTrailer(true)}>
                ▶ Watch Trailer
              </button>
            ) : (
              showTrailer && (
                <iframe
                  className={styles.trailer}
                  src={`https://www.youtube.com/embed/${trailerKey}`}
                  title="Movie Trailer"
                  frameBorder="0"
                  allowFullScreen
                />
              )
            )}
          </div>
          <div className={styles.detailLink}>
            <Link to={`/movies/${firstMovie.id}`}>
              <button className={styles.detailButton}>View Details</button>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
