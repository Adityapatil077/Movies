import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CastProfile from "../../components/CastProfile";
const MovieDetail = () => {

  const [currentMovieDetail, setMovie] = useState()
  const { id } = useParams()

  useEffect(() => {
    getData()
    window.scrollTo(0, 0)
  }, [])

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => setMovie(data))
  }

  return (
    <>
      <div className="d-flex mt-5 justify-content-center" style={{ backgroundColor: "#1F222A" }}>
        <div className="d-flex flex-column flex-md-row col-11 mt-2 mb-3 rounded-3">
          <div className="col-md-6 bg-black p-2 d-flex flex-column flex-grow-1">
            <div className="d-flex">
              <div className="col-4 col-md-3 m-2">
                <img
                  className="img-fluid rounded shadow"
                  src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`}
                  alt="Movie Poster"
                />
              </div>
              <div className="mt-3 text-light">
                <h2>{currentMovieDetail ? currentMovieDetail.original_title : ""}</h2>
                <div className="d-flex text-primary">
                  <h5>Rating: {currentMovieDetail ? currentMovieDetail.vote_average : ""}</h5>
                </div>
                <div className="mt-1" style={{ color: "lightgray" }}>
                  <span className="movie__runtime p-1 border rounded">
                    {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
                  </span>
                  {currentMovieDetail && currentMovieDetail.genres
                    ? currentMovieDetail.genres.map((genre) => (
                      <span key={genre.id} className="ms-2">{genre.name},</span>
                    ))
                    : ""}
                </div>
                <div className="mt-1" style={{ color: "lightgray" }}>
                  {currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}
                </div>
              </div>
            </div>


            <div className="movie__detailRightBottom text-light mt-3 flex-grow-1">
              <div className="fs-3">Overview</div>
              <div style={{ color: "lightgray" }}>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
            </div>
          </div>

          <div className="col-md-6 mt-3 mt-md-0 d-flex align-items-stretch flex-grow-1">
            <div className="movie__intro w-100">
              <img
                className="img-fluid rounded h-100"
                style={{ objectFit: "cover" }}
                src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}
                alt="Movie Backdrop"
              />
            </div>
          </div>
        </div>
      </div>



      <div className="d-flex flex-wrap justify-content-center justify-content-md-around" style={{ backgroundColor: "#1F222A" }}>
        <CastProfile id={id} />
      </div>

    </>
  )
}

export default MovieDetail;