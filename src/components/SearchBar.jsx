import { forwardRef, useRef } from "react";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch, FaTimes } from "react-icons/fa";
import { setSearch } from "../slices/searchSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchBar = forwardRef(function SearchBar(props, ref) {
  const myInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleClick, ...otherProps } = props;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setSearch(myInputRef.current.value));
    navigate("/posts");
    myInputRef.current.value = "";
  }
  return (
    <div {...otherProps} ref={ref}>
      <div className="top-search bg-primary">
        <Container>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Button variant="link" className="btn-addon" id="button-addon1">
                <FaSearch />
              </Button>
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="Type & hit enter"
                ref={myInputRef}
              />
              <Button
                variant="link"
                className="btn-addon"
                id="button-addon2"
                onClick={handleClick}
              >
                <FaTimes />
              </Button>
            </InputGroup>
          </Form>
        </Container>
      </div>
    </div>
  );
});

export default SearchBar;
