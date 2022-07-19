import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import slide1 from "../assets/slide-1.jpg";
import slide2 from "../assets/slide-2.jpg";
import slide3 from "../assets/slide-3.jpg";
import "../styles/carousel.css";

function CarouselFadeExample() {
  return (
    <div className="carousel-div">
        <Carousel fade>
        <Carousel.Item>
            <img
            className="carousel-img d-block w-100"
            src={slide2}
            alt="First slide"
            />
            <Carousel.Caption>
                <h4 className="carousel-tag">Drive in with the car and leave with a clean car in less than 10 minutes</h4>
                <Button className="explore-button" variant="primary">
                    Explore our offerings
                </Button>
            </Carousel.Caption>
            
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="carousel-img d-block w-100"
            src={slide1}
            alt="Second slide"
            />

            <Carousel.Caption>
                <h4 className="carousel-tag">Drive in with the car and leave with a clean car in less than 10 minutes</h4>
                <Button className="explore-button" variant="primary">
                    Explore our offerings
                </Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="carousel-img d-block w-100"
            src={slide3}
            alt="Third slide"
            />

            <Carousel.Caption>
                <h4 className="carousel-tag">Drive in with the car and leave with a clean car in less than 10 minutes</h4>
                <Button className="explore-button" variant="primary">
                    Explore our offerings
                </Button>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselFadeExample;