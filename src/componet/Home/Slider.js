import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Carousel, Col, Nav, Navbar } from "react-bootstrap";

export default function Slider(props) {
if(!props.images ){
  return null
}

  return (
<Carousel>
  <Carousel.Item>
    <img style={{ height: 318}}
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/asset/"+props.images[0] +".png"}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>معرض الكويت للتقنية </h3>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{ height: 318}}
      className="d-block w-100"  
      src={process.env.PUBLIC_URL + "/asset/"+props.images[1]+".png"}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>معرض الامارات للتقنية</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{ height: 318}}
      className="d-block w-100"  
      src={process.env.PUBLIC_URL + "/asset/"+props.images[2]+".png"}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>معرض السعودية التقنية</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )

}