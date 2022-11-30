import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { ROMAN_NUM } from '../constants';

function Movie({ movieData, getSelectedMovieId }) {
  const handleMovieSelect = (episode_id) => {
    getSelectedMovieId(episode_id);
  };

  const handleKeyDown = (e, episode_id) => {
    if (e.code === 'Enter') {
      getSelectedMovieId(episode_id);
    }
  };

  return (
    <>
      {movieData.length ? (
        <Table>
          <tbody>
            {movieData.map((movie) => {
              return (
                <tr
                  role="button"
                  tabIndex={0}
                  key={movie.episode_id}
                  onKeyDown={(e) => handleKeyDown(e, movie.episode_id)}
                  onClick={() => handleMovieSelect(movie.episode_id)}
                  className="movie-row"
                >
                  <td>{`EPISODE ${movie.episode_id}`}</td>
                  <td>{`Episode ${ROMAN_NUM[movie.episode_id]} - ${movie.title}`}</td>
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

Movie.propTypes = {
  movieData: PropTypes.array,
  getSelectedMovieId: PropTypes.func,
};

export default React.memo(Movie);
