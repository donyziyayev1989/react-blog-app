import { Placeholder, Image } from "react-bootstrap";

const PostSkeleton = () => {
  return (
    <div className="grid">
      <div className="grid-img">
        <Placeholder
          as="div"
          animation="glow"
          style={{ height: "250px", width: "100%", background: "grey" }}
        ></Placeholder>
      </div>

      <div className="grid-details">
        <Placeholder as="h5" animation="glow">
          <Placeholder xs={7} />
        </Placeholder>

        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
          <Placeholder xs={12} />
        </Placeholder>
        <div className="d-flex mb-3">
          <Placeholder as="span" animation="glow">
            <Placeholder xs={3} bg="primary" />
          </Placeholder>
        </div>

        <div className="meta">
          <Placeholder>
            <Placeholder xs={3} bg="primary" />
          </Placeholder>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
