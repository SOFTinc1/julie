import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  LogoText,
  // LogoImg,
  NavBar,
  Option,
  // ButtonImg,
} from "./header.styles";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/svg/logo.png";
import Message from "../../assets/svg/sms.svg";
import "./header.css";

function Header() {
  let navigate = useNavigate();

  return (
    <HeaderContainer>
      <Navbar bg="transparent" expand="lg" className="expand-md">
        <Container fluid className="container">
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
            alt=""
          >
            {/* <LogoImg src={Logo} alt="" /> */}
            <LogoText>julie</LogoText>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <NavBar className="ms-auto">
              <Nav.Link className="option-nav">
                <Option to="/">galleries</Option>
              </Nav.Link>

              <Nav.Link className="option-nav">
                <Option to="/">information</Option>
              </Nav.Link>

              <Nav.Link className="option-nav">
                <Option to="/">about us</Option>
              </Nav.Link>

              {/* <Nav.Link className="closeonmobile">
                <Option to="/">
                  <ButtonImg src={Message} />
                </Option>
              </Nav.Link> */}
            </NavBar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
