import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { OPTIONS, PLACE_HOLDER } from '../constants';

function Search({ searchText, setSearchText, getSortMethod }) {
  const handleSort = (e) => {
    getSortMethod(e.target.value);
  };

  return (
    <Container className="container">
      <Row>
        <Col sm={3}>
          <Form.Group className="mb-3">
            <Form.Select onChange={handleSort} placeholder={PLACE_HOLDER.sort}>
              <option>{OPTIONS.sort}</option>
              <option>{OPTIONS.episode}</option>
              <option>{OPTIONS.year}</option>
              <option>{OPTIONS.titleAsc}</option>
              <option>{OPTIONS.titleDesc}</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <BsSearch role="img" alt="search" />
            </InputGroup.Text>
            <Form.Control
              placeholder={PLACE_HOLDER.search}
              aria-label={PLACE_HOLDER.search}
              value={searchText}
              name="searchText"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

Search.propTypes = {
  searchText: PropTypes.string,
  setSearchText: PropTypes.func,
  getSortMethod: PropTypes.func,
};

export default Search;
