import { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Details from "./components/Details";
import Movie from "./components/Movie";
import Search from "./components/Search";
import { sortByID, sortByYear } from "./utils/utils";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [sortMoviesBy, setSortMoviesBy] = useState("");

  const getSelectedMovieId = (episode_id) => {
    setSelectedMovieId(episode_id);
  };

  const getSortMethod = (sortOrder) => {
    setSortMoviesBy(sortOrder);
  };

  const getFilmsData = async () => {
    const response = await fetch(" https://swapi.dev/api/films/?format=json");
    const movieResponse = await response.json();
    setMovieData(movieResponse.results);
  };

  const sortResult = useMemo(() => {
    if (sortMoviesBy === "Episode") {
      return sortByID([...movieData]);
    }
    if (sortMoviesBy === "Year") {
      const sortByEpisodes = sortByYear([...movieData]);
      return sortByEpisodes;
    }
  }, [sortMoviesBy]);

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

  useEffect(() => {
    if (sortResult) {
      setMovieData(sortResult);
    }
  }, [sortResult]);

  return (
    <div className="App">
      <Container>
        <Search getSortMethod={getSortMethod} />
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
