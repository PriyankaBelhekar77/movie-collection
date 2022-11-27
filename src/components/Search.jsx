import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { OPTIONS, PLACE_HOLDER } from '../constants/constants';

function Search({ serachText, setSearchText, getSortMethod }) {
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
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <BsSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder={PLACE_HOLDER.search}
              aria-label={PLACE_HOLDER.search}
              value={serachText}
              name="serachText"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

Search.propTypes = {
  serachText: PropTypes.string,
  setSearchText: PropTypes.func,
  getSortMethod: PropTypes.func,
};

export default Search;
