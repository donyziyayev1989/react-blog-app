import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import { Collapse } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showSearchHandle } from "../slices/postSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { showSearch } = useSelector((state) => state.post);

  const handleClick = () => {
    dispatch(showSearchHandle());
  };

  return (
    <header className="header">
      <Collapse in={showSearch}>
        <SearchBar
          id="search"
          handleClick={handleClick}
          dataShow={showSearch}
        />
      </Collapse>
      <Navigation
        handleClick={handleClick}
        aria-controls="search"
        aria-expanded={showSearch}
      />
    </header>
  );
};

export default Header;
