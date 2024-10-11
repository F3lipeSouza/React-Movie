import styled from "styled-components";

export const DivHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ImageBannerHome = styled.img`
  display: flex;
  width: 80vw;
  height: 80vh;
  object-fit: contain;
  // background-image: linear-gradient(to bottom right ,#c4c4c6, #131415);
`;

export const MovieContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GridMovie = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 80vw;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  border: 2px solid #c4c4c6;
`;
