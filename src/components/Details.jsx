import React from "react";
import { Card } from "react-bootstrap";

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
        <div>No movie selected</div>
      )}
    </>
  );
}

export default React.memo(Details);
