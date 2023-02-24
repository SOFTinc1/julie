import React from "react";
import {
  Other2Container,
  Title,
  Row,
  CardContainer,
  Top,
  CardBody,
  Inst,
} from "./other2.styles";

function Other2() {
  return (
    <Other2Container>
      <Title>stages of our work</Title>
      <Row>
        <CardContainer>
          <Top>1, acquitances</Top>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, Odio,
            fugit! Ullam maxime perferendis dolorem aspernatur possimus
            quibusdam, odio quidem harum, quo consectetur et veniam accusantium
            veritatis eaque! Quisquam, eum dicta,
          </CardBody>
        </CardContainer>

        <CardContainer>
          <Top>2, concept definition</Top>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, Odio,
            fugit! Ullam maxime perferendis dolorem aspernatur possimus
            quibusdam, odio quidem harum, quo consectetur et veniam accusantium
            veritatis eaque! Quisquam, eum dicta,
          </CardBody>
        </CardContainer>

        <CardContainer>
          <Top>3, shooting</Top>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, Odio,
            fugit! Ullam maxime perferendis dolorem aspernatur possimus
            quibusdam, odio quidem harum, quo consectetur et veniam accusantium
            veritatis eaque! Quisquam, eum dicta,
          </CardBody>
        </CardContainer>

        <CardContainer>
          <Top>4, processing</Top>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, Odio,
            fugit! Ullam maxime perferendis dolorem aspernatur possimus
            quibusdam, odio quidem harum, quo consectetur et veniam accusantium
            veritatis eaque! Quisquam, eum dicta,
          </CardBody>
        </CardContainer>
      </Row>
      <Inst>drag right to see more </Inst>
    </Other2Container>
  );
}

export default Other2;
