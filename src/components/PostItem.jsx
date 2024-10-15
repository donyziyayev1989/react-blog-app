import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostItem = ({ title, body, tags, id, imageSrc }) => {
  return (
    <div className="grid">
      <div className="grid-img">
        <Image src={imageSrc} fluid alt="..." />
      </div>

      <div className="grid-details">
        <h5>
          <Link to={`/${id}`}>{title}</Link>
        </h5>
        <p>{body.slice(0, 100)}</p>
        <div className="d-flex mb-3">
          <Link to={`/${id}`} className="btn-blog">
            Read More
          </Link>
        </div>

        <div className="meta">
          {tags.map((tag, index) => (
            <span className="category" key={index}>
              <Link to={`tag/${tag}`}>{tag}</Link>,
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
