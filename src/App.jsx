import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Movie from "./components/Movie";
import Search from "./components/Search";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState();

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

  return (
    <div className="App">
      <Container>
        <Search />
        <Row>
          <Col>
            <Movie
              movieData={movieData}
              getSelectedMovieId={getSelectedMovieId}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
