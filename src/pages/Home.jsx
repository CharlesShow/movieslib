import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/MoviesGrid.css";

const moviesUrl = process.env.VITE_API;
const apiKey = process.env.VITE_API_KEY;

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;

    console.log(moviesUrl);

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 ? (
          topMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
