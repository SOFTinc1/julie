import styled from "styled-components";
import Button from "../button/button";

export const GalleryOverviewContainer = styled.div`
  padding: 30px 80px 80px 80px;
  background: #000;

  @media screen and (max-width: 830px) {
    padding: 30px 10px;
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
  margin: 20px 0 0 0;
  text-align: left;

  @media screen and (max-width: 830px) {
    font-size: 36px;
  }
`;
export const Head = styled.h1`
  color: #f5f5f5;
  font-family: dona;
  font-size: 18px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.05rem;
  margin: 15px 0 80px 0;
  text-align: left;

  @media screen and (max-width: 830px) {
    font-size: 26px;
  }
`;
export const Row = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 830px) {
    display: block;
  }
`;
export const Col1 = styled.div``;
export const Flex = styled.div`
  display: flex;
  gap: 10px;
`;
export const Img1 = styled.img`
  width: 300px;
  height: 300px;
  background: #3468fa;
  border-radius: 5px;

  @media screen and (max-width: 830px) {
    border-radius: 5px;
    width: 200px;
    height: 250px;
  }
`;
export const Img2 = styled.img`
  width: 300px;
  height: 300px;
  background: #242424;
  border-radius: 5px;

  @media screen and (max-width: 830px) {
    border-radius: 5px;
    width: 200px;
    height: 250px;
  }
`;
export const Img3 = styled.img`
  width: 600px;
  height: 400px;
  background: #242424;
  margin: 10px 0 0 0;
  border-radius: 5px;

  @media screen and (max-width: 830px) {
    border-radius: 5px;
    width: 100%;
    height: auto;
  }
`;
export const Col2 = styled.div``;
export const Img4 = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 5px;

  @media screen and (max-width: 830px) {
    border-radius: 5px;
    margin: 10px 0 0 0;
    width: 100%;
    height: auto;
    height: auto;
  }
`;
export const Img5 = styled.img`
  width: 300px;
  height: 300px;
  margin: 10px 0 0 0;
  border-radius: 5px;

  @media screen and (max-width: 830px) {
    border-radius: 5px;
    margin: 10px 0 0 0;
    width: 100%;
    height: auto;
  }
`;
export const Col3 = styled.div``;
export const Img6 = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px;

  @media screen and (max-width: 830px) {
    border-radius: 5px;
    margin: 10px 0 0 0;
    width: 100%;
    height: auto;
  }
`;
export const Img7 = styled.img`
  width: 300px;
  height: 400px;
  background: #3468fa;
  margin: 10px 0 0 0;
  border-radius: 5px;

  @media screen and (max-width: 830px) {
    border-radius: 5px;
    margin: 10px 0 0 0;
    width: 100%;
    height: auto;
  }
`;
export const ButtonCon = styled(Button)`
color: #fff;
margin: 20px 0 0 auto;
padding: 15px auto;

@media screen and (max-width: 830px) {
  
}
`;
