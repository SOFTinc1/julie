import React from "react";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/svg/logo.png";
import { FooterContainer, Row, ButtonCon, Logo, Option, Options, LinkCol, Hr, Copyright } from "./footer.styles";

function Footer() {
  let navigate = useNavigate();

  return (
    <FooterContainer>
      <Logo
          src={LogoIcon}
          onClick={() => {
            navigate("/");
          }}
        />
      <Row>
        <ButtonCon>request a session</ButtonCon>
        <Option>
          <LinkCol to="/">home</LinkCol>
          <LinkCol to="/">FAQs</LinkCol>
          <LinkCol to="/">contact</LinkCol>
          <LinkCol to="/">become a partner</LinkCol>
        </Option>
        <Options>

        </Options>
      </Row>
    </FooterContainer>
  );
}

export default Footer;
