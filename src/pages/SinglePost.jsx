import { Link, useParams } from "react-router-dom";
import { useGetPostQuery } from "../slices/postsApiSlice";
import { Alert, Button, Image, Spinner } from "react-bootstrap";
import { FaRegEye, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import CommentBox from "../components/CommentBox";
import CommentForm from "../components/CommentForm";
const img = "https://picsum.photos/1100/500";

const SinglePost = () => {
  const { postId } = useParams();

  const { data, isLoading, isError, error } = useGetPostQuery(postId);
  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vH" }}
      >
        <div>
          <Spinner
            animation="grow"
            size="xlg"
            variant="secondary"
            className="me-2"
          />
          <Spinner
            animation="grow"
            size="xlg"
            variant="secondary"
            className="me-2"
            style={{ animationDelay: "0.1s" }}
          />
          <Spinner
            animation="grow"
            size="xlg"
            variant="secondary"
            className="me-2"
            style={{ animationDelay: "0.2s" }}
          />
        </div>
      </div>
    );
  }
  if (isError) {
    return <Alert>{error?.message || "Something went wrong"}</Alert>;
  }
  const { post, comments } = data;
  console.log(data);
  return (
    <article className="single-post post pe-md-3">
      <Image src={img} fluid />
      <h1 className="post-title h3 my-3">{post.title}</h1>
      <p>{post.body}</p>
      <div className="meta d-flex justify-content-between align-items-center">
        <div className="d-flex">
          {post.tags.map((tag) => {
            return (
              <Link key={tag} to={`/posts/tag/${tag}`} className="me-2">
                #{tag}
              </Link>
            );
          })}
        </div>
        <div className="d-flex align-items-center">
          <span className="me-5">
            <FaRegEye /> {post.views || 1}
          </span>
          <div>
            <Button size="sm" variant="outline-secondary">
              <FaRegThumbsUp /> {post.reactions.likes}
            </Button>
            <span className="mx-2">|</span>
            <Button size="sm" variant="outline-secondary">
              <FaRegThumbsDown /> {post.reactions.dislikes}
            </Button>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      {/* Comments */}
      {comments.comments.length > 0 && (
        <CommentBox comments={comments.comments} />
      )}
      {/* Comment Form */}
      <CommentForm />
    </article>
  );
};

export default SinglePost;
