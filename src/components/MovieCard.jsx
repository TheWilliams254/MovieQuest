import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, onAddToFavorites }) => {
  return (
    <div style={styles.card}>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={styles.poster}
        />
      </Link>
      <h3 style={styles.title}>{movie.title}</h3>
      <p style={styles.rating}>⭐ {movie.vote_average}/10</p>
      {onAddToFavorites && (
        <button style={styles.button} onClick={() => onAddToFavorites(movie)}>
          Add to Favorites
        </button>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  poster: {
    width: "100%",
    borderRadius: "10px",
  },
  title: {
    fontSize: "1.2rem",
    margin: "10px 0",
  },
  rating: {
    fontSize: "1rem",
    color: "#666",
  },
  button: {
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default MovieCard;
