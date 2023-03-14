import styled from "styled-components";
import Bg from "../../assets/images/banner.jpg";
import Button from "../button/button";

export const BannerContainer = styled.div`
  background: url(${Bg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 800px;

  @media screen and (max-width: 830px) {
    height: 100vh;
  }
`;
export const DarkOverlay = styled.div`
  width: 100%;
  height: 800px;
  background: rgba(0, 0, 0, 0.54);
  padding: 20px 0 0 0;

  @media screen and (max-width: 830px) {
    height: 100vh;
    padding: 0 10px;
    background: rgba(0, 0, 0, 0.658);
  }
`;
export const Details = styled.div`
  margin: 150px 0;
  
  @media screen (max-width: 400px) and (max-width: 830px) {
    margin: 50px 0 0 0;
  }
  @media screen and (max-width: 400px) {
    margin: 80px 0 0 0;
  }
`;
export const H1 = styled.h1`
  text-align: center;
  color: #fff;
  font-family: tuyet;
  font-size: 76px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.05rem;

  @media screen and (max-width: 830px) {
    font-size: 42px;
    line-height: 66px;
  }
`;
export const P = styled.p`
  text-align: center;
  color: #fff;
  font-family: dona;
  font-size: 22px;
  text-transform: lowercase;
  font-weight: 400;
  letter-spacing: 0.07rem;
  width: 600px;
  margin: 0 auto;

  @media screen and (max-width: 830px) {
    width: 100%;
  }
`;
export const ButtonDiv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 20px;
  margin: 15px 0;

  @media screen and (max-width: 830px) {
    flex-direction: column;
  }
`;
export const ButtonCont = styled(Button)``;
export const ButtonCon = styled(Button)`
background: #f5f5f5;
color: #000;
font-weight: 600;
`;