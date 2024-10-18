import React, { useEffect, useState } from "react";

const CastProfile = ({ id }) => {
  const [profilesList, setProfilesList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63`
    )
      .then((res) => res.json())
      .then((data) => setProfilesList(data.cast));
  };

  return (
    <>
      <div className="container">
        <h2 className="text-light">Cast</h2>
        <div className="row">
          {profilesList.map((profile) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={profile.id}>
              <div
                className="card p-2 text-light h-100"
                style={{ backgroundColor: "#1F222A" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile.profile_path}`}
                  className="card-img-top img-thumbnail"
                  alt={profile.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{profile.name}</h5>
                  <p className="card-text">Character: {profile.character}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default CastProfile;
