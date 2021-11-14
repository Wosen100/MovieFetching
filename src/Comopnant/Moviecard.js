import React from "react";
import PropTypes from "prop-types";
import MovieDetails from "./MovieDetails";

const Moviecard = (props) => {
  console.log(props);
  // const [initial, ...rest] = props.Type;
  // const alteredType = [initial.toUpperCase(), ...rest].join("");
  let styles = {
    movie_card: {
      display: "flex",
    },
    movies_poster: {
      // width: "50%",
    },
    movie_details: {
      width: "50%",
    },
  };

  return (
    <div className="movie-card" style={styles.movie_card}>
      <div className="movie-poster" style={styles.movies_poster}>
        <img className="movie-poster" src={props.Poster} alt={props.Title} />
      </div>

      <div className="movie-details" style={styles.movie_details}>
        <MovieDetails {...props}></MovieDetails>
      </div>
    </div>
  );
};
export default Moviecard;

Moviecard.propTypes = {
  Runtime: PropTypes.string,
  Genre: PropTypes.string,
  Actors: PropTypes.string,
  Plot: PropTypes.string,
  Rated: PropTypes.string,
  Title: PropTypes.string,
  Ratings: PropTypes.arrayOf(PropTypes.object),
};
