import React from "react";

const SearchMovie = ({name}) =>{

    const [searchResults, setSearchResults] = useState([]); 

  const Api_key = "4e44d9029b1270a757cddc766a1bcb63"; 

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); 
  };

  const handleSearch = async (e) => {
    e.preventDefault(); 

    if (searchTerm.trim() === "") return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${name}&page=1`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

    return(
        <>
            <div>
      <div className="mt-4">
        {searchResults.length > 0 ? (
          <div className="row">
            {searchResults.map((movie) => (
              <div className="col-4 mb-4" key={movie.id}>
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">Release Date: {movie.release_date}</p>
                    <p className="card-text">Rating: {movie.vote_average}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No movies found. Try searching for something else.</p>
        )}
      </div>
    </div>
        </>
    )
}

export default SearchMovie;