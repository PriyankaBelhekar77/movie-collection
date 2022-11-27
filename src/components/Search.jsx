import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { OPTIONS, PLACE_HOLDER } from '../constants/constants';

function Search({ getSortMethod, getSearchText }) {
  const [serachText, setSearchText] = useState('');

  const handleSort = (e) => {
    getSortMethod(e.target.value);
  };

  useEffect(() => {
    return getSearchText(serachText);
  }, [serachText]);

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
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

Search.propTypes = {
  getSortMethod: PropTypes.func,
  getSearchText: PropTypes.func,
};

export default Search;
