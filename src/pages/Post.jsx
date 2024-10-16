import { useState, useEffect } from "react";
import { Alert, Row, Col } from "react-bootstrap";
import { useGetPostsQuery } from "../slices/postsApiSlice";
import PostItem from "../components/PostItem";
import Pagination from "../components/Pagination";
import PostSkeleton from "../components/PostSkeleton";

const Post = () => {
  const [page, setPage] = useState(1);
  const limit = 2;

  const {
    data: posts,
    isError,
    isLoading,
    error,
  } = useGetPostsQuery(page, limit);

  // Scroll to top when paginating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
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
            <Pagination
              pageCount={posts.totalPage}
              onPageChange={(e) => {
                setPage(e.selected);
              }}
            />
          </div>
        </>
      ) : (
        "Error: no post found"
      )}
    </>
  );
};

export default Post;
