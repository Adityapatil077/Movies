import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import  MovieCard  from "./MovieCard";
const MovieList = ()=>{

    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center justify-content-around" style={{"backgroundColor":"#1F222A"}}>
                {
                    movieList.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </>
    )

}

export default MovieList;