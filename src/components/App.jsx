import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Details from "./Details";
import Movie from "./Movie";
import Search from "./Search";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [selectedMovie, setSelectedMovie] = useState();

  const getSelectedMovieId = (episode_id) => {
    setSelectedMovieId(episode_id);
  };

  const getFilmsData = async () => {
    const response = await fetch(" https://swapi.dev/api/films/?format=json");
    const movieResponse = await response.json();
    setMovieData(movieResponse.results);
  };

  useEffect(() => {
    getFilmsData();
  }, []);

  useEffect(() => {
    if (selectedMovieId) {
      const selectedDetails = movieData.filter(
        (movie) => movie.episode_id === selectedMovieId
      )[0];
      setSelectedMovie(selectedDetails);
    }
  }, [selectedMovieId]);

  return (
    <div className="App">
      <Container>
        <Search />
        {movieData.length ? (
          <Row>
            <Col>
              <Movie
                movieData={movieData}
                getSelectedMovieId={getSelectedMovieId}
              />
            </Col>
            <Col>
              <Details selectedMovie={selectedMovie} />
            </Col>
          </Row>
        ) : null}
      </Container>
    </div>
  );
}

export default App;
