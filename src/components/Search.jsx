import { Col, Container, Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function Search() {
  return (
    <Container className="container">
      <Row>
        <Col sm={3}>
          <Form.Group className="mb-3">
            <Form.Select>
              <option>Sort By...</option>
              <option>Episode</option>
              <option>Year</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Type to search..."
              aria-label="Type to search..."
              aria-describedby="search"
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
