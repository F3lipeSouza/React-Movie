import axios from "axios";
import { ApiKey } from "./apiKey";

export const getMoviesList = (setState) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`)
    .then((response) => {
      setState(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDetail = (id, setState) =>
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`)
    .then((response)=>{
        setState(response.data);
    }).catch((error)=>{
        console.log(error);
    });
