import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function Details({ selectedMovie }) {
  return (
    <>
      {selectedMovie ? (
        <Card className="details-card">
          <Card.Body className="details-card-body">
            <Card.Title>{`Episode ${selectedMovie.episode_id} - ${selectedMovie.title}`}</Card.Title>
            <Card.Text>{selectedMovie.opening_crawl}</Card.Text>
            <Card.Text>{`Directed by: ${selectedMovie.director}`}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <div className="serach-container">
          <h6>No movie selected</h6>
        </div>
      )}
    </>
  );
}

Details.propTypes = {
  selectedMovie: PropTypes.shape({
    episode_id: PropTypes.string,
    title: PropTypes.string,
    opening_crawl: PropTypes.string,
    director: PropTypes.string,
  }),
};

export default React.memo(Details);
