import React from "react";
import {
  GalleryOverviewContainer,
  Title,
  Head,
  Row,
  Col1,
  Flex,
  Img1,
  Img2,
  Img3,
  Col2,
  Img4,
  Img5,
  Col3,
  Img6,
  Img7,
  ButtonFlex,
  Hr,
  ButtonCon,
} from "./gallery-overview.styles";
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.jpg";
import four from "../../assets/images/4.jpg";
import five from "../../assets/images/5.jpg";
import six from "../../assets/images/6.jpg";
import seven from "../../assets/images/7.jpg";

function GalleryOverview() {
  return (
    <GalleryOverviewContainer>
      <Title>some of our works</Title>
      <Head>we are passionate, dedicated and friendly</Head>
      <Row>
        <Col1>
          <Flex>
            <Img1 src={one} />
            <Img2 src={five} />
          </Flex>
          <Img3 src={two} />
        </Col1>
        <Col2>
          <Img4 src={four} />
          <Img5 src={three} />
        </Col2>
        <Col3>
          <Img6 src={six} />
          <Img7 src={seven} />
        </Col3>
      </Row>
      <ButtonFlex>
        <Hr />
        <ButtonCon>View more</ButtonCon>
      </ButtonFlex>
    </GalleryOverviewContainer>
  );
}

export default GalleryOverview;
