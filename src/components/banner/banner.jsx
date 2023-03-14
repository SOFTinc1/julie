import React from "react";
import Header from "../header/header";
import Sections from "../sections/sections";
import {
  BannerContainer,
  DarkOverlay,
  Details,
  H1,
  P,
  ButtonDiv,
  ButtonCont,
  ButtonCon,
} from "./banner.styles";

function Banner() {
  return (
    <BannerContainer>
      <DarkOverlay>
        <Header />
        <Details>
          <H1>we are here to capture all your beautiful moments.</H1>
          <P>our prices are affordable and low, give us a try</P>
          <ButtonDiv>
            <ButtonCont>learn more about us</ButtonCont>
            <ButtonCon>book session now</ButtonCon>
          </ButtonDiv>
        </Details>
      </DarkOverlay>

      {/* <Sections />  */}
    </BannerContainer>
  );
}

export default Banner;
