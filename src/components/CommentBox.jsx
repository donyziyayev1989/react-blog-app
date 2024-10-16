import { Button } from "react-bootstrap";
import { FaRegThumbsUp } from "react-icons/fa";

const CommentBox = ({ comments }) => {
  return (
    <div className="comments-area">
      <div className="mb-md-5 mb-xs-3">
        <h3 className="h3">Comments</h3>
      </div>
      {comments.map((comment) => {
        return (
          <div className="comment-box" key={comment.id}>
            <div className="author-thumb d-flex align-items-center justify-content-center">
              {/* <Image src="" alt="" rounded /> */}
              <span className="h1 text-primary">
                {comment.user.fullName[0].toUpperCase()}
              </span>
            </div>
            <div className="comment-info">
              <h6>
                <a href="#">{comment.user.fullName}</a>
              </h6>
              <p>{comment.body}</p>
              <div className="d-flex justify-content-between align-items-center">
                <a href="#">
                  <i className="fa fa-reply" aria-hidden="true"></i> Reply
                </a>
                <div>
                  <Button variant="link">
                    <FaRegThumbsUp />
                  </Button>
                  <span style={{ lineHeight: 1.2 }}>{comment.likes}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
