import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard'; 

const SearchMovie = () => {
    const { query } = useParams(); 
    const [movies, setMovies] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true); 
            setError(null); 

            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch movies");
                }
                const data = await response.json();
                setMovies(data.results); 
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchMovies(); 
    }, [query]); 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movies.length) {
        return <div>No movies found for "{query}".</div>;
    }
    return (

        <>
        
        <div>
            <div
                className="d-flex mt-5 flex-wrap justify-content-center justify-content-around"
                style={{ backgroundColor: "#1F222A", padding: "20px" }}
            >
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>



        </>


        
    );
};

export default SearchMovie;
