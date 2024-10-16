import { Button, Form, Row } from "react-bootstrap";

const CommentForm = () => {
  return (
    <div className="comment-form">
      <h3 className="mb-3">Post a Comment</h3>
      <Form>
        <Row>
          <Form.Group className="col-sm-6 mb-4" controlId="name">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="col-sm-6 mb-4" controlId="email">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="col-sm-12 mb-4" controlId="name">
            <Form.Control type="text" as="textarea" placeholder="Message" />
          </Form.Group>
        </Row>
        <Button variant="primary" size="lg">
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default CommentForm;
