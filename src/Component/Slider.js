import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data/data.json'

const Slider = () => {
  return (
    <>
      <Carousel fade>
      {
        data.banner.start.map((item, index) =>(
            <Carousel.Item key={index}>
                <img className="d-block w-100" src={item} alt="slider" />
            </Carousel.Item>
        ))
      }
      </Carousel>
    </>
  );
};

export default Slider;
