import { Carousel } from "react-bootstrap";
import "./InfoElements.css"
import "bootstrap/dist/css/bootstrap.css";
import image1 from '../../image/Carousel1.jpg';
import image3 from '../../image/Carousel3.jpeg';

const CarouselContainer = () => {

  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={5000} style={{ backgroundColor: "black", height: "1000px"}}>
        <img
          className="d-block w-100"
          src={image1}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item interval={5000} style={{ backgroundColor: "black", height: "1000px"}}>
      <img
          className="d-block w-100"
          src={image1}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item interval={5000} style={{ backgroundColor: "black", height: "1000px"}}>
      <img
          className="d-block w-100"
          src={image3}
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;