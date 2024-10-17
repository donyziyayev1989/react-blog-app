import { useState } from "react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import { Collapse } from "react-bootstrap";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleClick = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <header className="header">
      <Collapse in={showSearch}>
        <SearchBar id="search" handleClick={handleClick} />
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
