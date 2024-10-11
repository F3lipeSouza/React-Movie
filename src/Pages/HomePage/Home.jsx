import { useEffect, useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { getMoviesList } from "../../Api/Api";
import { apiBase } from "../../Api/apiBase";
import { Card, DivHome, GridMovie, ImageBannerHome, MovieContainer } from "./homeStyle";

export function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesList(setMovies);
    return () => {
      console.log("componente desmontou!");
    };
  }, []);

  return (
    <body>
      <DivHome>
        <ImageBannerHome
          src="https://cdn.pixabay.com/photo/2014/04/02/17/07/film-307992_640.png"
          alt="Banner de a hora do filme"
        />
      </DivHome>
      <h3>Filmes Populares</h3>

      <MovieContainer>
        <GridMovie>
          {movies.map((movie) => (
            <Card key={movie.id}>
              <img src={`${apiBase}${movie.poster_path}`} alt={movie.title} />
              <h3>Titulo: {movie.title}</h3>
              <h3>Nota: {movie.vote_average.toFixed(1)}</h3>
            </Card>
          ))}
        </GridMovie>
      </MovieContainer>
      <Footer />
    </body>
  );
}
