import styled from "styled-components";
import Button from "../button/button";

export const Other2Container = styled.div`
  width: 100%;
  padding: 30px 3px 30px 80px;
  background: #fff;

  @media screen and (max-width: 830px) {
    padding: 30px 3px 30px 10px;
  }
`;
export const Row = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  -ms-overflow-style: none !important;
  scrollbar-width: none !important;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  @media screen and (max-width: 830px) {
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
  }
`;
export const CardContainer = styled.div`
  @media screen and (max-width: 830px) {
  }
`;
export const Top = styled.div`
  
  background: #3468fa;
  padding: 10px 15px;
  border-radius: 5px;

  color: #fff;
  font-family: typo;
  font-size: 18px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 0.05rem;

  @media screen and (max-width: 830px) {
  }
`;
export const CardBody = styled.p`
  color: #000;
  width: 380px;
  background: #fbfbfb;
  border-radius: 5px;
  padding: 15px 45px 15px 15px;
  font-family: typo;
  font-size: 18px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.05rem;
  margin: 20px 0 0 0;

  @media screen and (max-width: 830px) {
  }
`;
export const Inst = styled.h1`
  color: #000;
  font-family: typo;
  font-size: 18px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-align: center;
  margin: 40px 0 30px 0;

  @media screen and (max-width: 830px) {
  }
`;
