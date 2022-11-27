import { useEffect, useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Details from './components/Details';
import Loader from './components/Loader';
import Movie from './components/Movie';
import Search from './components/Search';
import { OPTIONS } from './constants/constants';
import { sortByID, sortByYear } from './utils/utils';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [sortMoviesBy, setSortMoviesBy] = useState('');
  const [serachText, setSearchText] = useState('');
  const [filterMovies, setFilterMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSelectedMovieId = (episode_id) => {
    setSelectedMovieId(episode_id);
  };

  const getSortMethod = (sortOrder) => {
    setSortMoviesBy(sortOrder);
  };

  const getSearchText = (text) => {
    setSearchText(text);
  };

  const getFilmsData = async () => {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films/?format=json');
    const movieResponse = await response.json();
    setMovieData(movieResponse.results);
    setIsLoading(false);
  };

  const sortResult = useMemo(() => {
    if (sortMoviesBy === OPTIONS.episode) {
      return sortByID([...movieData]);
    }
    if (sortMoviesBy === OPTIONS.year || sortMoviesBy.includes('Sort')) {
      const sortByEpisodes = sortByYear([...movieData]);
      return sortByEpisodes;
    }
  }, [sortMoviesBy]);

  useEffect(() => {
    getFilmsData();
  }, []);

  useEffect(() => {
    if (selectedMovieId) {
      const selectedDetails = movieData.filter((movie) => movie.episode_id === selectedMovieId)[0];
      setSelectedMovie(selectedDetails);
    }
  }, [selectedMovieId]);

  useEffect(() => {
    if (sortResult) {
      setMovieData(sortResult);
    }
  }, [sortResult]);

  useEffect(() => {
    if (serachText) {
      const filterResult = movieData.filter((item) => {
        return item.title.toString().toLowerCase().indexOf(serachText.toLowerCase()) > -1;
      });
      setFilterMovies(filterResult);
    } else {
      setFilterMovies([]);
    }
  }, [serachText]);

  return (
    <div className="App">
      <Container>
        <Search getSortMethod={getSortMethod} getSearchText={getSearchText} />
        {isLoading ? (
          <Loader />
        ) : movieData.length ? (
          <Row>
            <Col>
              <Movie
                movieData={filterMovies.length ? filterMovies : movieData}
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
