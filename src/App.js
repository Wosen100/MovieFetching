import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import * as omdb from "./Comopnant/Utils";
import Moviecard from "./Comopnant/Moviecard";
import "./App.css";

const App = (props) => {
  const [movie, setmovie] = useState(null);

  const findMovie = async (query) => {
    return await omdb
      .getMoviesBySearchTerm(query)
      .then((data) => data.Search)
      .then(async (data) => {
        return await omdb.getMovieDetailsById(data[0].imdbID);
      });
    
  };
  useEffect(async () => {
    let _movie = await findMovie("super 8");

    console.log("found movies", _movie);

    setmovie(_movie);
  }, []);

  const showMovie = (mv) => {
    
    if (mv) {
      return <Moviecard {...mv} />;
    } else {
      return <div>No movie to show</div>;
    }
  };

  return <div className="app-component">{showMovie(movie)}</div>;
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
export default App;
