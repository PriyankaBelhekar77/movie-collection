import React from "react";
import Table from "react-bootstrap/Table";

function Movie({ movieData, getSelectedMovieId }) {
  const handleMovieSelect = (episode_id) => {
    getSelectedMovieId(episode_id);
  };

  return (
    <>
      {movieData.length ? (
        <Table>
          <tbody>
            {movieData.map((movie) => {
              return (
                <tr
                  key={movie.episode_id}
                  onClick={() => handleMovieSelect(movie.episode_id)}
                  className="movie-row"
                >
                  <td>{`EPISODE ${movie.episode_id}`}</td>
                  <td>{`Episode - ${movie.title}`}</td>
                  <td>{movie.release_date}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
    </>
  );
}

export default React.memo(Movie);
