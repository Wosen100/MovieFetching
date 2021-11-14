import React from "react";
import PropTypes from "prop-types";

const MovieDetails = (props) => {
  console.log(props);

  return (
    <div>
      <div className="title_rating">
        <h1>
          <div className="title">{props.Title}</div>
          <div className="rating">
            { props.Ratings[0].Value}
          </div>
        </h1>
      </div>

      <div className="movie-subheader">
        <div className="subheader">{props.Rated}</div>
        <div className="subheader">{props.Runtime}</div>
        <div className="subheader">{props.Genre}</div>
      </div>

      <div className="actors_plot">
        <div className="actors">
          <h2>Actors</h2>
          {props.Actors}
        </div>
        <div className="plot">
          <h2>Plot</h2>
          {props.Plot}
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  Runtime: PropTypes.string,
  Genre: PropTypes.string,
  Actors: PropTypes.string,
  Plot: PropTypes.string,
  Rated: PropTypes.string,
  Title: PropTypes.string,
  Ratings: PropTypes.arrayOf(PropTypes.object),
};

export default MovieDetails;
