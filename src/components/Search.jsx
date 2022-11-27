import { Col, Container, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

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
            <Form.Select onChange={handleSort} placeholder="Sort By...">
              <option>Sort By...</option>
              <option>Episode</option>
              <option>Year</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <BsSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="Type to search..."
              aria-label="Type to search..."
              aria-describedby="search"
              value={serachText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
