import { useEffect, useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useGetPostsCategoriesQuery } from "../slices/postsApiSlice";
import { Link } from "react-router-dom";
import Widget from "./Widget";

const Sidebar = () => {
  const { data: categories } = useGetPostsCategoriesQuery();
  const [index, setIndex] = useState(0);
  const [category, setCategory] = useState([]);

  function handleViewCategory() {
    setIndex((prev) => prev + 1);
  }

  useEffect(() => {
    if (categories && index < categories.length) {
      setCategory((prevCategories) => [
        ...prevCategories,
        ...categories[index],
      ]);
    }
  }, [categories, index]);

  return (
    <div className="side-bar pl-lg-3">
      <Widget title="Search" className="search">
        <Form>
          <InputGroup className="mb-3" size="lg">
            <Form.Control
              placeholder="Type here.."
              aria-label="Search"
              aria-describedby="search"
            />
            <Button variant="primary" id="search">
              <FaSearch />
            </Button>
          </InputGroup>
        </Form>
      </Widget>

      <Widget title="Tags">
        <ul className="tags">
          {category?.map((cat) => {
            return (
              <li key={cat}>
                <Link to={`/posts/tag/${cat}`}>{cat}</Link>
              </li>
            );
          })}
          <Button variant="link" onClick={handleViewCategory}>
            View more
          </Button>
        </ul>
      </Widget>
    </div>
  );
};

export default Sidebar;
