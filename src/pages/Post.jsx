import { useState, useMemo, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Spinner,
  Alert,
  Pagination,
} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { useGetPostsQuery } from "../slices/postsApiSlice";
import PostItem from "../components/PostItem";
import ReactPaginate from "react-paginate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PostSkeleton from "../components/PostSkeleton";

const Blog = () => {
  const [page, setPage] = useState(1);
  const img = "https://picsum.photos/450/250";
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
    <Container>
      <Row>
        <Col lg={8} md={12} className="sm-margin-50px-bottom">
          {isLoading ? (
            <Row className="portfolio">
              {[...Array(10).keys()].map((v) => (
                <Col key={v} sm={6}>
                  <PostSkeleton />
                </Col>
              ))}
            </Row>
          ) : isError ? (
            <Alert variant="danger">
              {error.error || error?.data?.message}
            </Alert>
          ) : posts ? (
            <>
              <Row className="portfolio" key={page}>
                {posts.posts.map((post) => (
                  <Col key={post.id} sm={6}>
                    <PostItem {...post} key={img} imageSrc={img} />
                  </Col>
                ))}
              </Row>
              <div className="mt-5">
                <nav aria-label="Page navigation example">
                  <ReactPaginate
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    nextLabel={<FaAngleRight />}
                    previousLabel={<FaAngleLeft />}
                    pageCount={posts.totalPage}
                    pageRangeDisplayed={3}
                    onPageChange={(e) => {
                      setPage(e.selected);
                      console.log(e.selected);
                    }}
                    containerClassName="pagination justify-content-center"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    activeClassName="active"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    disabledClassName="disabled"
                    renderOnZeroPageCount={null}
                  />
                </nav>
              </div>
            </>
          ) : (
            "Error: no post found"
          )}
        </Col>
        <Sidebar>sidebar</Sidebar>
      </Row>
    </Container>
  );
};

export default Blog;
