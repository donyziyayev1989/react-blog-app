import { Carousel, Image } from "react-bootstrap";
const img = "../assets/blog-1.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src={img}
          style={{ height: "500px" }}
          className="w-100 object-fit-cover "
        />
        <Carousel.Caption>
          <h1>Carousel item title</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            quaerat, ea expedita asperiores qui cum quam quo dignissimos
            veritatis explicabo quisquam quis fugit voluptatum consectetur
            dolores nisi dolor nihil laudantium minus incidunt! Quos deserunt
            eius mollitia id magni, officia repellat?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={img}
          style={{ height: "500px" }}
          className="w-100 object-fit-cover "
        />
        <Carousel.Caption>
          <h1>Carousel item title</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            quaerat, ea expedita asperiores qui cum quam quo dignissimos
            veritatis explicabo quisquam quis fugit voluptatum consectetur
            dolores nisi dolor nihil laudantium minus incidunt! Quos deserunt
            eius mollitia id magni, officia repellat?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
