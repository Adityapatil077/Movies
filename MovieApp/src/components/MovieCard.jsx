
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            <Link to={`/movie/${movie.id}`}>
            <div className="card p-3 text-light" style={{ "width": "18rem" , "backgroundColor":"#1F222A" }}>
            <img className="img-thumbnail" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                <div className="">
                    <h6 className="text-center text-decoration-none" >{movie ? movie.original_title : ""}</h6>
                    <p className="text-center text-decoration-none">Rating : {movie ? movie.vote_average : ""}</p>
                </div>
            </div>
        </Link>
        </>
    )


}

export default MovieCard;