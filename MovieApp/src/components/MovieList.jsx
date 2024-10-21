import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const { type } = useParams();
    const Api_key = "4e44d9029b1270a757cddc766a1bcb63";

    useEffect(() => {
        getData();
    }, [type, page]);

    const getData = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/${type ? type : "popular"
            }?api_key=${Api_key}&language=en-US&page=${page}`
        )
            .then((res) => res.json())
            .then((data) => {
                setMovieList(data.results);
                setTotalPages(data.total_pages);
            });
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <div
                className="d-flex mt-5 flex-wrap justify-content-center justify-content-around"
                style={{ backgroundColor: "#1F222A", padding: "20px" }}
            >
                {movieList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <div
                className="pagination-controls"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px",
                    backgroundColor: "#1F222A",
                }}
            >
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                            sx={{ color: "#fff" }}
                        />
                    )}
                />
            </div>
        </>
    );
};

export default MovieList;
