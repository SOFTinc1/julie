import styled from "styled-components";
import Button from "../button/button";

export const OtherContainer = styled.div`
  width: 100%;
  padding: 0 80px;
  background-color: #000;
  overflow: hidden !important;

  @media screen and (max-width: 830px) {
    padding: 30px 10px;
    outline: none;
    border: none;
  }
`;
export const Row = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 830px) {
    display: block;
    outline: none;
    border: none;
  }
`;
export const Col1 = styled.div`
  width: 1200px;

  @media screen and (max-width: 830px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  color: #f5f5f5;
  font-family: typo;
  font-size: 36px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 0.05rem;
  margin: 80px 0 20px 0;
  text-align: left;

  @media screen and (max-width: 830px) {
    font-size: 26px;
  }
`;
export const Details = styled.p`
  color: #cecece;
  font-family: dona;
  font-size: 16px;
  text-decoration: none;
  text-transform: lowercase;
  font-weight: 400;
  letter-spacing: 0.05rem;
  text-align: left;
  line-height: 34px;

  @media screen and (max-width: 830px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

export const ButtonCon = styled(Button)`
  align-items: center !important;
  display: flex;
  gap: 10px;
  text-align: center;
  padding: 15px 40px;
  margin: 20px 0 0 auto;

  @media screen and (max-width: 830px) {
    margin: 0 0 40px 0;
  }
`;
export const ButtonText = styled.h1`
  font-weight: 800;
  color: #f5f5f5;
  font-size: 16px;
  align-items: center !important;
  margin: 0;
  width: fit-content;

  @media screen and (max-width: 830px) {
  }
`;
export const Icon = styled.h1`
  width: fit-content;
  font-size: 44px;
  color: #fff;
  margin: -37px 0 0 0;
  padding: 0;

  @media screen and (max-width: 830px) {
  }
`;
export const Col2 = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 830px) {
  }
`;
export const ImgSrc = styled.img`
  background: #242424;
  width: 300px;
  height: 400px;
  border-radius: 5px;
  margin: 100px 0 0 0;

  @media screen and (max-width: 830px) {
    width: 150px;
    height: 250px;
  }
`;
export const ImgSrc2 = styled.img`
  background: #3468fa;
  width: 400px;
  height: 500px;
  border-radius: 5px;

  @media screen and (max-width: 830px) {
    width: 400px;
    height: 350px;
  }
`;
