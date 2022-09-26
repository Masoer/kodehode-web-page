import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const NewSection = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  display: flex;
  flex-direction: row;
  height: 93vh;
  width: auto;
  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const ImagePhone = styled.img`
  display: none;
  @media only screen and (max-width: 40em) {
    display: block;
    height: 70vh;
    width: auto;
  }
`;

export const PaddingDiv = styled.div`
  padding: 40px 30px;
  @media only screen and (max-width: 40em) {
    padding: 0px;
  }
`;

export const PSTyle = styled.div`
  align-items: center;
`;

export const MainContentDiv = styled.div`
  padding: 0px 30px;
`;
