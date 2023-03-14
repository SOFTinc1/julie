import styled from "styled-components";
// import Button from "../../../button/button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

// export const HeaderContainer = styled.div`
//   width: 100%;
//   padding: 0;
//   height: 60px !important;
//   border-radius: 0;
//   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//   backdrop-filter: blur(6.8px);
//   -webkit-backdrop-filter: blur(6.8px);
//   background: rgba(19, 19, 19, 0.596);
//   position: fixed;
//   margin: 20px 0;
//   top: 0;
//   // background: rgba(0, 0, 0, 0.54);
// `;

export const HeaderContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  align-items: center;
  outline: 2px solid #161616;
  height: 50px;
  border-radius: 4px;
  padding: 0 0 0 10px;

  @media screen and (max-width: 830px) {
    padding: 10px 0;
    width: 100%;
    outline: none;
  }
`;
export const LogoText = styled.h1`
  cursor: pointer;
  color: #fbfbfb;
  font-family: dona;
  font-size: 36px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin: -8px 0 0 0;

  @media screen and (max-width: 830px) {
    margin: 0;
  }
`;
// export const LogoImg = styled.img`
//   align-items: center;
//   padding: 0;
//   width: 200px;
//   height: 100px;
//   cursor: pointer;
//   margin: -40px 0 0 -40px;

//   @media screen and (max-width: 830px) {
//     margin: -33px 0 0 -40px;
//   }
// `;
export const NavBar = styled(Nav)`
  margin: -10px 0 0 auto;
  padding: 0;
  align-items: center;
`;
export const Option = styled(Link)`
  padding: 0;
  align-items: center;
  cursor: pointer;
  color: #fbfbfb;
  font-family: dona;
  font-size: 16px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
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
  padding: 5px;
  background: #f5f5f5;
  border-radius: 3px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;
