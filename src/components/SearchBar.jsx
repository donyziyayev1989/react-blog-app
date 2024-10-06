import { Container, Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="top-search bg-primary">
      <Container>
        <Form>
          <InputGroup>
            <Button variant="link" className="btn-addon" id="button-addon1">
              <FaSearch />
            </Button>
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="Type & hit enter"
            />
            <Button variant="link" className="btn-addon" id="button-addon2">
              <FaTimes />
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </div>
  );
};

export default SearchBar;
