
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const SearchMovie = () => {
    const { query } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${query}`);
                if (!response.ok) throw new Error('Network response was not ok');
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="d-flex flex-wrap justify-content-center" style={{ backgroundColor: '#1F222A' }}>
            {movies.length > 0 ? (
                movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            ) : (
                <div className="text-light">No results found for "{query}"</div>
            )}
        </div>
    );
};

export default SearchMovie;
