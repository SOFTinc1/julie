import styled from "styled-components";
import Bg from "../../assets/images/banner1.jpg";
import BgMobile from "../../assets/images/banner1-mobile.jpg";

export const BannerContainer = styled.div`
  background: url(${Bg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  padding: 10px 80px;

  @media screen and (max-width: 830px) {
    padding: 20px 10px;
    background: url(${BgMobile});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const Details = styled.div`
  margin: 120px auto 0 0;

  @media screen and (max-width: 525px) {
    margin: 300px 0 0 0;
  }
  @media screen and (max-width: 400px) {
    margin: 200px 0 0 0;
  }
`;
export const LeftDiv = styled.h1`
  background: #3468fa;
  width: 130px;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-family: newyork;
  font-size: 46px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.05rem;
  margin: 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;

  @media screen and (max-width: 830px) {
    width: 90px;
    font-size: 26px;
    font-family: typo;
    font-weight: 400;
    letter-spacing: 0.07rem;
    box-shadow: none;
  }
`;
export const LeftDiv2 = styled.h1`
  background: #3468fa;
  width: 560px;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-family: newyork;
  font-size: 46px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.05rem;
  margin: 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;


  @media screen and (max-width: 830px) {
    width: 340px;
    font-size: 26px;
    font-family: typo;
    font-weight: 400;
    letter-spacing: 0.07rem;
    box-shadow: none;
  }
`;
export const LeftDiv3 = styled.h1`
  background: #3468fa;
  width: 500px;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-family: newyork;
  font-size: 46px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.05rem;
  margin: 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  @media screen and (max-width: 830px) {
    width: 310px;
    font-size: 26px;
    font-family: typo;
    font-weight: 400;
    letter-spacing: 0.05rem;
    box-shadow: none;
  }
`;
export const RightDiv = styled.h1`
  width: 400px;
  background: #242424;
  margin: 110px 0 auto auto;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-family: newyork;
  font-size: 26px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.05rem;
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);


  @media screen and (max-width: 830px) {
    width: auto;
    font-size: 18px;
    line-height: 32px;
    margin: 10px 0 0 0;
    font-family: typo;
    font-weight: 800;
    letter-spacing: 0.07rem;
  }
`;
