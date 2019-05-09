import React from "../../node_modules/react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import ControlledCarousel from "../components/Carousel";
import RegContainer from "../components/RegContainer";

function CarouselEx() {
    return (
      <div>
          <Wrapper>
              <RegContainer>
               <ControlledCarousel />
               </RegContainer>
               </Wrapper>    
          </div>

     
         
    );
}

export default CarouselEx;
