import styled from "styled-components";

export const Body = styled.div`
  display:flex;
  flex-direction:column;

`

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
`;

export const MovieContainer = styled.div`
  width:90vw;
  margin-left:5%;
`;

export const GridMovie = styled.div`
  display: grid;
  row-gap:2%;
  grid-template-columns: repeat(4, 1fr);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  border: 2px solid #c4c4c6;
  padding:2%;
`;
