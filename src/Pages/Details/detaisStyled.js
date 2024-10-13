import styled from "styled-components";

export const DetailsCard = styled.div`
  display: flex;
`;

export const MoviePoster = styled.div`
  width: 30vw;
`;

export const ImagePoster = styled.img`
  width: 100%;
`;

export const Sinopse = styled.div`
  margin-left: 2%;
`;

export const DetaisBtn = styled.button`
  background-color: #c4c4c6;
  border: 2px solid black;
  width: 200px;
  height: 36px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bolder;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    zoom: 110%;
  }
`;
