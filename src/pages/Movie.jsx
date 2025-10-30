// src/pages/Movie.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <h1>Loading...</h1>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, i) => (
        <span key={i}>{genre}</span>
      ))}
    </div>
  );
}

export default Movie;
