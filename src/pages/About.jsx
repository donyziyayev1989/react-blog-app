import { Col, Container, Image, Row } from "react-bootstrap";

const img = "https://picsum.photos/1200/550";
const About = () => {
  return (
    <section className="section pt-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={9}>
            <Image src={img} fluid />
            <h1 className="page-title my-4">About</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam.
            </p>
            <blockquote>
              “Always use active voice over the passive one.”
            </blockquote>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt quaerat voluptatem.
            </p>
            <ul>
              <li>Nemo enim ipsam voluptatem</li>
              <li>Duis aute irure dolor</li>
              <li>Ut enim ad minim veniam</li>
              <li>Excepteur sint occaecat</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
