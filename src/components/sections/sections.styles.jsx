import styled from "styled-components";

export const SwapContainer = styled.div`

  @media screen and (max-width: 830px) {
    padding: 0;
    margin: 50px 0 0 0;
  }
`;
export const TabDetails = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 16px;
  border-top-left-radius: 0;
  padding: 20px 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 830px) {
    padding: 20px 10px;
  }
`;
export const TabDetails1 = styled.div`
  background: #fff;
  display: flex;
  gap: 10px;
  width: 100%;
  border-radius: 7px;
  border-top-left-radius: 0;
  padding: 20px 30px;
  z-index: 999 !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 830px) {
    padding: 20px 10px;
    display: block;
  }
`;
export const Details = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 830px) {
    padding: 20px;
    margin: 10px 0 0 0;
  }
`;
export const Address = styled.h1`
  font-family: typo;
  color: #000;
  font-size: 16px;
  text-transform: capitalize;
`;
export const City = styled.h1`
  font-family: typo;
  color: #000;
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 600;
`;
export const Country = styled.h1`
  font-family: typo;
  color: #000;
  font-size: 16px;
  text-transform: capitalize;
`;
