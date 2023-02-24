import styled from "styled-components";
import Button from "../button/button";

export const OtherContainer = styled.div`
  width: 100%;
  padding: 30px 80px;
  overflow: hidden !important;

  @media screen and (max-width: 830px) {
    padding: 30px 10px;
  }
`;
export const Row = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 830px) {
    display: block;
  }
`;
export const Col1 = styled.div`
  width: 1200px;

  @media screen and (max-width: 830px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  color: #000;
  font-family: newyork;
  font-size: 36px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.05rem;
  margin: 80px 0 20px 0;
  text-align: left;

  @media screen and (max-width: 830px) {
    font-size: 26px;
  }
`;
export const Details = styled.p`
  color: #000;
  font-family: typo;
  font-size: 16px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.05rem;
  text-align: left;
  line-height: 34px;

  @media screen and (max-width: 830px) {
    font-size: 16px;
    line-height: 30px;
  }
`;
export const ButtonFlex = styled.div`
  display: flex;
  gap: 0;
  align-items: center;
  margin: 40px 0;

  @media screen and (max-width: 830px) {
    font-size: 16px;
    margin: 0 0 40px 0;
  }
`;
export const Hr = styled.hr`
  width: 400px;

  @media screen and (max-width: 830px) {
    width: 200px;
  }
`;
export const ButtonCon = styled(Button)`
  width: 190px;
  font-weight: 800;
  color: #fff;
  padding: 12px 20px;
  // border-radius: 50px;

  @media screen and (max-width: 830px) {
    width: 210px;
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
