import styled from "styled-components";
// import Button from "../../../button/button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 88.2%;
  padding: 0;
  height: 60px !important;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.8px);
  -webkit-backdrop-filter: blur(6.8px);
  background: rgba(255, 255, 255, 0.54);
  position: fixed;

  @media (min-width: 831px) and (max-width: 991px) {
    align-items: center !important;
    
  }

  @media screen and (max-width: 830px) {
    align-items: center !important;
    padding: 0;
    width: 95%;
  }
`;
export const LogoImg = styled.img`
  align-items: center;
  padding: 0;
  width: 200px;
  height: 100px;
  margin: 0 auto;
  cursor: pointer;
  margin: -35px 0 0 -40px;

  @media screen and (max-width: 830px) {
    margin: -33px 0 0 -40px;
  }
`;
export const NavBar = styled(Nav)`
  margin: -35px 0 0 auto;
  padding: 0;
  align-items: center;
`;
export const Option = styled(Link)`
  padding: 0;
  align-items: center;
  cursor: pointer;
  color: #000;
  font-family: typo;
  font-size: 16px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 0.07rem;

  @media screen and (max-width: 830px) {
    font-size: 24px;
    border-bottom: 1px solid #aaa;
    padding: 0 0 5px 0;
  }
`;
export const ButtonImg = styled.img`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.54);
  border-radius: 50%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.8px);
  -webkit-backdrop-filter: blur(6.8px);
`;
