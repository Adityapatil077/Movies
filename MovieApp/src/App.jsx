
import Navbars from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from "./pages/Home"
import MovieList from './components/MovieList';
import MovieDetail from './pages/movieDetail/MovieDetail';
import SearchMovie from './pages/SearchMovie';

function App() {
  return (
    <>
     <Router>
          <Navbars />
          <Routes >
              <Route index element={<HomePage/>}></Route>
              <Route path="movie/:id" element={<MovieDetail/>}></Route>
              <Route path="movies/:type" element={<MovieList/>}></Route>
              <Route path="movies/:name" element={<SearchMovie/>}></Route>
              <Route path="/*" element={<h1>Error Page</h1>}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
