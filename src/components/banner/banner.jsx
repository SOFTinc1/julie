import React from "react";
import Header from "../header/header";
import Sections from "../sections/sections";
import {
  BannerContainer,
  Details,
  LeftDiv,
  LeftDiv2,
  LeftDiv3,
  RightDiv,
} from "./banner.styles";

function Banner() {
  return (
    <BannerContainer>
      <Header />
      <Details>
        <LeftDiv>every</LeftDiv>
        <LeftDiv2>moment matters, let us</LeftDiv2>
        <LeftDiv3>capture them for you</LeftDiv3>
      </Details>
      <RightDiv>our prices are affordable and low, give us a try</RightDiv>
      <Sections />
    </BannerContainer>
  );
}

export default Banner;
