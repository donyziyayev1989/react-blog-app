import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSortHandle } from "../slices/postSlice";
const Sort = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state) => state.post);
  function changeHandler(e) {
    dispatch(setSortHandle(e.target.value));
  }
  return (
    <Form className="d-flex  justify-content-end align-items-center mb-3">
      <Form.Label className="mb-0 me-2">Sort by:</Form.Label>
      <Form.Group>
        <Form.Select onChange={changeHandler} value={sortBy}>
          <option value="">sort by</option>
          <option value="title;asc">title asc&#8593;</option>
          <option value="title;desc">title desc &#8595;</option>
          <option value="views;asc">views asc &#8593;</option>
          <option value="views;desc">views desc &#8595;</option>
          {/* <option value="reactions.likes;asc">likes asc &#8593;</option>
          <option value="likes;desc">likes desc &#8595;</option> */}
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default Sort;
