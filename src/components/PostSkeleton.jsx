import { Placeholder } from "react-bootstrap";

const PostSkeleton = () => {
  return (
    <div className="grid">
      <div className="grid-img">
        <Placeholder
          as="div"
          animation="glow"
          style={{ height: "220px", width: "100%", background: "grey" }}
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
        <div className="mb-3">
          <Placeholder as="div" animation="glow">
            <Placeholder xs={3} />
          </Placeholder>
        </div>

        <div className="meta">
          <Placeholder animation="glow" as="div">
            <Placeholder xs={2} className="me-2" />
            <Placeholder xs={2} className="me-2" />
            <Placeholder xs={2} className="me-2" />
          </Placeholder>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
