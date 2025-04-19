import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL =import.meta.env.VITE_BASE_URL;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async () => {
    if (searchTerm.trim() === "") return;
    try {
      const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const addToFavorites = (movie) => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!savedFavorites.find((fav) => fav.id === movie.id)) {
      const updatedFavorites = [...savedFavorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      alert(`${movie.title} added to favorites!`);
    }
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <MovieList movies={movies} onAddToFavorites={addToFavorites} />
    </div>
  );
};

export default Home;
