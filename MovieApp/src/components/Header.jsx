import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#2A2D34" }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-light ms-4 fw-bold">MovieDB</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <Link to="/movies/popular" className="nav-link ms-lg-4" style={{ color: "lightgray" }}>
                                <span>Popular</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/movies/top_rated" className="nav-link ms-lg-4" style={{ color: "lightgray" }}>
                                <span>Top Rated</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/movies/upcoming" className="nav-link ms-lg-4" style={{ color: "lightgray" }}>
                                <span>Upcoming</span>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex ms-auto">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Movie Name"
                            aria-label="Search"
                            onChange={handleInputChange}
                        />
                        <Link to={`/movie/${searchTerm}`} className="btn btn-outline-success" style={{ color: "lightgray" }}>
                            Search
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;
