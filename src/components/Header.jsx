import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <SearchBar />
      <Navigation />
    </header>
  );
};

export default Header;
