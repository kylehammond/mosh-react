import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    deleteMovie(movie._id);
    this.setState((this.movies = getMovies()));
  };

  moviesExist() {
    return this.state.movies.length > 0;
  }

  formatCountMessage() {
    return this.moviesExist() ? (
      <h4>Showing {this.state.movies.length} movies in the database.</h4>
    ) : (
      <h4>There are no movies in the database.</h4>
    );
  }

  formatMoviesList() {
    if (this.moviesExist())
      return (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
  }

  render() {
    return (
      <div>
        {this.formatCountMessage()}
        {this.formatMoviesList()}
      </div>
    );
  }
}

export default Movies;
