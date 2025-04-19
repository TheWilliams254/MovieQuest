import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onAddToFavorites }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div style={styles.grid}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddToFavorites={onAddToFavorites}
        />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    marginTop: "20px",
  },
};

export default MovieList;
