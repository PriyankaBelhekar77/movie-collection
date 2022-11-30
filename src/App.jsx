import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getFilmsData } from './api';
import Details from './components/Details';
import Loader from './components/Loader';
import Movie from './components/Movie';
import Search from './components/Search';
import { useSort } from './hooks/useSort';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [sortMoviesBy, setSortMoviesBy] = useState('');
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [filterMovies, setFilterMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortResult = useSort(filterMovies, movieData, sortMoviesBy);

  const getSelectedMovieId = (episode_id) => {
    setSelectedMovieId(episode_id);
  };

  const getSortMethod = (sortOrder) => {
    setSortMoviesBy(sortOrder);
  };

  useEffect(() => {
    getFilmsData().then((value) => {
      setIsLoading(false);
      if (value.error) {
        setError(value.message);
      } else {
        setMovieData(value);
      }
    });
  }, []);

  useEffect(() => {
    if (selectedMovieId) {
      const selectedDetails = movieData.filter((movie) => movie.episode_id === selectedMovieId)[0];
      setSelectedMovie(selectedDetails);
    }
  }, [selectedMovieId]);

  useEffect(() => {
    if (sortResult) {
      if (filterMovies.length) {
        setFilterMovies(sortResult);
      } else {
        setMovieData(sortResult);
      }
    }
  }, [sortResult]);

  useEffect(() => {
    if (searchText) {
      const filterResult = movieData.filter((item) => {
        return item.title.toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      });
      setFilterMovies(filterResult);
    } else {
      setFilterMovies([]);
    }
  }, [searchText]);

  return (
    <div className="App">
      <Container>
        <Search
          searchText={searchText}
          getSortMethod={getSortMethod}
          setSearchText={setSearchText}
        />
        {error ? (
          <div className="error">
            <strong>{error}</strong>
          </div>
        ) : null}
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
