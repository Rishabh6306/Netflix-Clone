import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = "https://image.tmdb.org/t/p/original/";

const opts = {
  height: "370px",
  playerVars: {
    autoplay: 1,
  },
};

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster  ${isLargeRow && "row__posterLarge"} `}
            src={`${baseUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ position: "relative", width: "100%" }}>
        {trailerUrl && <YouTube
          videoId={trailerUrl}
          opts={opts}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 2 }}
        />}
      </div>
    </div>
  );
}

export default Row;