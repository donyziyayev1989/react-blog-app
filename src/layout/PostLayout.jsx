import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <Container className="pt-5">
      <Row>
        <Col lg={9} md={8} className="mb-sm-5">
          <Outlet />
        </Col>
        <Col lg={3} md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default PostLayout;
