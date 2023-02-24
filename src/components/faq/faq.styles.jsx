import styled from "styled-components";
// import Button from "../button/button";

export const Other2Container = styled.div`
  width: 100%;
  padding: 10px 80px;
  background: #f5f5f5;

  @media screen and (max-width: 830px) {
    padding: 30px 3px 30px 10px;
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


