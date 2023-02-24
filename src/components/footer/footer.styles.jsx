import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../button/button";

export const FooterContainer = styled.div`
  padding: 20px 30px 40px 30px;
  margin: 0 0 auto 0;

  @media screen and (max-width: 830px) {
    padding: 20px 10px;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -60px 0 0 0;

  @media screen and (max-width: 830px) {
    display: block;
    margin: 0;
  }
`;
export const Logo = styled.img`
  width: 300px;
  height: 200px;
  margin: 0 0 0 -90px;

  @media screen and (max-width: 830px) {
    margin: 0;
    width: 100px;
    height: 47px;
  }
`;
export const ButtonCon = styled(Button)`
color: #fff;
margin: 0 40px 0 0;

@media screen and (max-width: 830px) {
  width: 100%;
  text-align: center;
}
`;
export const Option = styled.div`
  display: flex;
  gap: 60px;

  @media screen and (max-width: 830px) {
    gap: 15px;
  }
`;
export const Options = styled.div`
  display: flex;
  gap: 46px;
  margin: 0 0 0 auto;

  @media screen and (max-width: 830px) {
    gap: 15px;
  }
`;
export const LinkCol = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #000000;
  font-family: typo;
  text-decoration: none;
  text-transform: capitalize;

  @media screen and (max-width: 830px) {
    font-size: 14px;
  }
`;