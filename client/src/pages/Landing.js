import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Carousel from "../components/Carousel";
import Wrapper from "../components/Wrapper";

import GlobalCard from "../components/GlobalCard";
import ControlledCarousel from "../components/Carousel";
import RegContainer from "../components/RegContainer";

function Landing() {
  return (
    <div>
      <Wrapper>
      <Header backgroundImage="/public/assets/images/indiela.png" fluid>
  </Header>
      
          <Carousel />

          
            <Row>
              
            </Row>
        

      </Wrapper>
    </div>
  );
}

export default Landing;
