import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
`

export const DetailsCard = styled.div`
  display: flex;
  flex: 1;
  height:30vh;
`;

export const MoviePoster = styled.div`
  width: 100vw;
  height:60vh;
`;

export const ImagePoster = styled.img`
  width: 100%;
  height:130%;
`;

export const Sinopse = styled.div`
  font-size:24px;
  gap:2%;
  margin-left: 2%;
  margin-right:2%;
`;

export const DetaisBtn = styled(Link)`
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
  text-decoration:none;
  color:black;

  &:hover {
    cursor: pointer;
    zoom: 110%;
  }
`;
