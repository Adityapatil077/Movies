
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from "./pages/Home"
import MovieList from './components/MovieList';
import MovieDetail from './pages/movieDetail/MovieDetail';
import SearchMovie from './pages/SearchMovie';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
     <Router>
          <Header/>
          <Routes >
              <Route index element={<HomePage/>}></Route>
              <Route path="movie/:id" element={<MovieDetail/>}></Route>
              <Route path="movies/:type" element={<MovieList/>}></Route>
              <Route path="movies/:query" element={<SearchMovie/>}></Route>
              <Route path="/*" element={<ErrorPage/>}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
