import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from 'react-bootstrap';


const Banner = ({banner}) => {
  return (
      <>
        <Carousel fade>
            {
                banner.end.map((item, index) =>(
                    <CarouselItem key={item.image} id="banner" interval={1000} keyboard={true}>
                        <img src={item.image} alt= {index}/>
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.source}</p>
                            <a href="#0" style={{textDecoration:"none", color:"white"}}>Read more</a>
                        </Carousel.Caption>
                    </CarouselItem>
                ))
            }
        </Carousel>
      </>
  )
};

export default Banner;
