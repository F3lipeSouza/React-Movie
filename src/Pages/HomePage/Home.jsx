import { useEffect, useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { getDetail, getMoviesList } from "../../Api/Api";
import { apiBase } from "../../Api/apiBase";
import {
  Body,
  Card,
  DivHome,
  GridMovie,
  ImageBannerHome,
  MovieContainer,
  Title,
} from "./homeStyle";
import { Header } from "../../components/header/Header";
import { getMovieInfo } from "../../redux/movieSlice";
import { useDispatch } from "react-redux";

export function HomePage() {
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    getMoviesList(setMovies);
  }, []);

  const onHoverDetail = (e) => {
    getDetail(e.target.id, setMovieDetail);
  };

  useEffect(() => {
    if (movieDetail){
      dispatch(getMovieInfo(movieDetail));
    }
  }, [movieDetail, dispatch]);

  return (
    <Body>
      <Header page="Home" />
      <DivHome>
        <ImageBannerHome
          src="https://cdn.pixabay.com/photo/2014/04/02/17/07/film-307992_640.png"
          alt="Banner de a hora do filme"
        />
      </DivHome>
      <Title>Filmes Populares</Title>

      <MovieContainer>
        <GridMovie>
          {movies.map((movie) => (
            <Card id={movie.id} key={movie.id} onMouseEnter={(e) => onHoverDetail(e)} to={'/details'}>
              <img src={`${apiBase}${movie.poster_path}`} alt={movie.title} />
              <h3>Titulo: {movie.title}</h3>
              <h3>Nota: {movie.vote_average.toFixed(1)}</h3>
            </Card>
          ))}
        </GridMovie>
      </MovieContainer>
      <Footer />
    </Body>
  );
}
