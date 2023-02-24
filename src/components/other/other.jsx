import React from "react";
import {
  OtherContainer,
  Row,
  Col1,
  Title,
  Details,
  ButtonFlex,
  Hr,
  ButtonCon,
  Col2,
  ImgSrc,
  ImgSrc2,
} from "./other.styles";
import One from "../../assets/images/1.png";
import Two from "../../assets/images/2.png";

function Other() {
  return (
    <OtherContainer>
      <Row>
        <Col1>
          <Title>do you want a photoshot</Title>
          <Details>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, Recusandae
            quibusdam ab eius quas minima delectus perspiciatis explicabo
            corrupti, Ipsam vitae alias sunt nisi molestias voluptates minus,
            quae maxime, quos saepe ex voluptate! Omnis corrupti id quam,
            molestias, quo dicta excepturi eveniet laboriosam, mollitia in
            cumque ab soluta qui, Ipsa dolore ex soluta, dolores consectetur
            illum voluptatum veniam magnam maxime reprehenderit obcaecati natus
            facilis qui aut culpa in placeat, Quod maxime, animi ipsam iusto
            iste distinctio voluptas dolor possimus architecto fugiat?
          </Details>
          <ButtonFlex>
        <Hr />
        <ButtonCon>book session now</ButtonCon>
      </ButtonFlex>
        </Col1>
        <Col2>
          <ImgSrc src={One} />
          <ImgSrc2 src={Two} />
        </Col2>
      </Row>
    </OtherContainer>
  );
}

export default Other;
