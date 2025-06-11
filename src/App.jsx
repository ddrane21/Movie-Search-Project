
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MovieList from './components/MovieList/MovieList';


function App() {
  

  return (
    <BrowserRouter>
    <div id='movie-app'>
      <Header 
      title="Movie Search"
      />

      <main id='main-content'>
        <Routes>
          <Route path='/' element={<MovieList/>}></Route>
        </Routes>

      </main>
      
    </div>
    </BrowserRouter>
  
  )
}

export default App
