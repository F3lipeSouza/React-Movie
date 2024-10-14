import { useSelector } from "react-redux";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import {
  DetailsCard,
  DetaisBtn,
  ImagePoster,
  MainContainer,
  MoviePoster,
  Sinopse,
} from "./detaisStyled";
import { apiBase } from "../../Api/apiBase";

export function Details() {
  const state = useSelector((state) => state.movies.movie);

  return (
    <MainContainer>
      <Header page={state.title} />
      <DetailsCard>
        <MoviePoster>
          <ImagePoster
            src={`${apiBase}${state.poster_path}`}
            alt={`Poster do filme ${state.title}`}
          />
        </MoviePoster>
        <Sinopse>
          <p><b>titulo:</b>{state.title}</p>
          <p><b>sinopse:</b>{state.overview}</p>
          <p><b>lançamento:</b>{state.release_date}</p>
          <p><b>nota:</b>{state.vote_average?state.vote_average.toFixed(1):'N/A'}</p>
          <DetaisBtn to={'/'}>Voltar para home</DetaisBtn>
        </Sinopse>
      </DetailsCard>
      <Footer />
    </MainContainer>
  );
}
