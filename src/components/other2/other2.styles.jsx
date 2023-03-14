import styled from "styled-components";
import Camera from "../../assets/images/camera2.jpg";

export const Other2Container = styled.div`
  width: 100%;
  height: 500px;
  background: url(${Camera});
  background-size: cover;
  background-repeat: no-repeat;


  @media screen and (max-width: 830px) {
    
  }
`;
export const DarkOverlay = styled.div`
  width: 100%;
  height: 500px;
  padding: 30px 3px 30px 80px;
  background: #000000e5;

  @media screen and (max-width: 830px) {
    padding: 10px;
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
  color: #f5f5f5;
  font-family: typo;
  font-size: 36px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 800;
  letter-spacing: 0.05rem;
  margin: 80px 0 50px 0;
  text-align: left;

  @media screen and (max-width: 830px) {
  }
`;
export const CardContainer = styled.div`
  border: 2px solid #0f0f0f96;
  padding: 10px 20px;


  &:hover {
    border: 4px solid #161616;
  }

  @media screen and (max-width: 830px) {
  }
`;
export const Top = styled.div`
  color: #f5f5f5;
  font-family: dona;
  font-size: 18px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.1rem;

  @media screen and (max-width: 830px) {
  }
`;
export const CardBody = styled.p`
  color: #f5f5f5;
  font-family: dona;
  font-size: 14px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.07rem;
  line-height: 32px;
  margin: 20px 0 30px 0;

  @media screen and (max-width: 830px) {
    width: 250px;
  }
`;
export const Inst = styled.h1`
  @media screen and (max-width: 830px) {
  }
`;
