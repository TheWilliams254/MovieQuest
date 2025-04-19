import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import axios from "axios";
const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (movie) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Your Favorite Movies</h1>
      <MovieList
        movies={favorites}
        onAddToFavorites={removeFavorite}
      />
    </div>
  );
};

export default Favorites;
