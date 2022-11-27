import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { MESSAGE } from '../constants/constants';

function Details({ selectedMovie }) {
  return (
    <>
      {selectedMovie ? (
        <Card className="details-card">
          <Card.Body className="details-card-body">
            <Card.Title>{`${MESSAGE.episode} ${selectedMovie.episode_id} - ${selectedMovie.title}`}</Card.Title>
            <Card.Text>{selectedMovie.opening_crawl}</Card.Text>
            <Card.Text>{`${MESSAGE.directedBy}: ${selectedMovie.director}`}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <div className="serach-container">
          <h6>{MESSAGE.noMovieSelected}</h6>
        </div>
      )}
    </>
  );
}

Details.propTypes = {
  selectedMovie: PropTypes.shape({
    episode_id: PropTypes.number,
    title: PropTypes.string,
    opening_crawl: PropTypes.string,
    director: PropTypes.string,
  }),
};

export default React.memo(Details);
