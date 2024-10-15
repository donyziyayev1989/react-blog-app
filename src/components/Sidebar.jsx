import { Col } from "react-bootstrap";

const Sidebar = ({ children }) => {
  return (
    <Col lg={4} md={12}>
      {children}
    </Col>
  );
};

export default Sidebar;
