import { useState, useEffect } from "react";
import { Alert, Row, Col } from "react-bootstrap";
import { useGetPostsQuery } from "../slices/postsApiSlice";
import PostItem from "../components/PostItem";
import Pagination from "../components/Pagination";
import PostSkeleton from "../components/PostSkeleton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Post = () => {
  const [page, setPage] = useState(0);
  const { tag } = useParams();
  const { query: q } = useSelector((state) => state.search);
  const {
    data: posts,
    isError,
    isLoading,
    error,
  } = useGetPostsQuery({
    page,
    tag: tag,
    limit: 10,
    searchQuery: q,
  });

  // Scroll to top when paginating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page, tag, q]);

  // Page title
  let title;
  if (q) {
    title = (
      <h1 className="h3 mb-4">
        Found <strong>{posts.total}</strong> results for: <strong>{q}</strong>
      </h1>
    );
  }
  if (tag) {
    title = (
      <h1 className="h3 mb-4">
        Posts with tag: <strong>{tag}</strong>
      </h1>
    );
  }
  return (
    <>
      {title}
      {isLoading ? (
        <Row className="portfolio">
          {[...Array(10).keys()].map((v) => (
            <Col key={v} sm={6}>
              <PostSkeleton />
            </Col>
          ))}
        </Row>
      ) : isError ? (
        <Alert variant="danger">{error.error || error?.data?.message}</Alert>
      ) : posts ? (
        <>
          <Row className="portfolio" key={page}>
            {posts.posts.map((post) => (
              <Col key={post.id} sm={6}>
                <PostItem {...post} />
              </Col>
            ))}
          </Row>
          <div className="mt-5">
            {posts.totalPage > 1 && (
              <Pagination
                pageCount={posts.totalPage}
                onPageChange={(e) => {
                  setPage(e.selected);
                }}
              />
            )}
          </div>
        </>
      ) : (
        "Error: no post found"
      )}
    </>
  );
};

export default Post;
