import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import "../css/Movie.css";

const moviesUrl = process.env.VITE_API;
const apiKey = process.env.VITE_API_KEY;

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  function formatCurrency(number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
            <h3>
              <BsGraphUp /> Faturamento:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime}min</p>
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Movie;
