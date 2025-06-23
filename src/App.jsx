import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import MainNav from "./components/MainNav/MainNav";
import { SearchMovie } from './services/MovieService';
import PlayingMovieList from "./components/PlayingMovieList/PlayingMovieList";

export default function App() {

  const [movies, setMovies] = useState([]);

  function handleSearch(query) {
    SearchMovie(query).then(setMovies);
  }

  return (
    <BrowserRouter>
      <div id="movie-app">
        <Header title="Movie Search" onSearch={handleSearch} />

        <MainNav />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<MovieList movies={movies}/>}></Route>
            <Route path="/in_theaters" element={<PlayingMovieList movies={movies} />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
